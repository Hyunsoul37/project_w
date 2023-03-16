package shop.winetoy.server.s3.service;

import java.io.File;
import java.io.IOException;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;

@Service
public class S3UpladerService {

	@Value("${spring.file-path}")
	private String fileDir;

	@Value("${cloud.aws.s3.bucket}")
	private String bucket;

	private final AmazonS3Client amazonS3Client;

	@Autowired
	public S3UpladerService(AmazonS3Client amazonS3Client) {
		this.amazonS3Client = amazonS3Client;
	}

	public String upload(MultipartFile multipartFile, String dirName) throws IOException {

		File folder = new File(fileDir);
		if (!folder.exists()) {
			try {
				folder.mkdir();
			} catch (Exception e) {
			}
		}
		String originalName = multipartFile.getOriginalFilename();
		File uploadFile = convert(multipartFile)
				.orElseThrow(() -> new IllegalArgumentException("error : MultipartFile -> File convert fail"));

		return upload(uploadFile, dirName);
	}

	private String upload(File uploadFile, String dirName) {
		String fileName = dirName + "/" + UUID.randomUUID() + uploadFile.getName();
		String uploadImageUrl = putS3(uploadFile, fileName);

		removeNewFile(uploadFile);
		return uploadImageUrl;
	}

	private String putS3(File uploadFile, String fileName) {

		amazonS3Client.putObject(
				new PutObjectRequest(bucket, fileName, uploadFile).withCannedAcl(CannedAccessControlList.PublicRead));
		return amazonS3Client.getUrl(bucket, fileName).toString();
	}

	public boolean delete(String url) {
		
		String path = getS3UrlToKey(url);
		amazonS3Client.deleteObject(new DeleteObjectRequest(bucket, path));

		return amazonS3Client.doesObjectExist(bucket, path);
	}

	private void removeNewFile(File targetFile) {
		if (targetFile.delete()) {
			System.out.println("File Delete Success");
			return;
		}
		System.out.println("File Delete Fail");
	}

	private Optional<File> convert(MultipartFile multipartFile) throws IOException {
		if (multipartFile.isEmpty()) {
			return Optional.empty();
		}

		String originalFilename = multipartFile.getOriginalFilename();
		String storeFileName = createStoreFileName(originalFilename);

		File file = new File(fileDir + storeFileName);
		multipartFile.transferTo(file);
		return Optional.of(file);
	}

	private String createStoreFileName(String originalFilename) {
		String ext = extractExt(originalFilename);
		String uuid = getOriginalFileName(originalFilename);
		return uuid + "." + ext;
	}

	private String extractExt(String originalFilename) {
		int pos = originalFilename.lastIndexOf(".");
		return originalFilename.substring(pos + 1);
	}

	private String getOriginalFileName(String originalFilename) {
		int pos = originalFilename.lastIndexOf(".");
		return originalFilename.substring(0, pos);
	}

	private String getS3UrlToKey(String url) {
		String[] strArr = url.split("/");
		String path = "";

		for (int i = 3; i < strArr.length; i++)
			path += ('/' + strArr[i]);

		path = path.substring(1);
		return path;
	}
}
