import { useEffect, useRef, useState } from "react";
import styled from "./Post.module.css";
import StarRatings from "react-star-ratings";
import { AiOutlinePlus, AiOutlineDown } from "react-icons/ai";

const Winetype = ["레드", "화이트", "로제", "스파클링", "주정강화"];

const Post = () => {
  const TitlefileRef = useRef<HTMLInputElement>(null);
  const fileRefArr = useRef<HTMLInputElement[]>([]);
  const [star, setStar] = useState(0);
  const [previewTitle, setPreviewTitle] = useState<string | null>(null);
  const [previewImg, setPreviewImg] = useState<string[] | null>([]);
  const [showType, setShowType] = useState(false);
  const [selecttype, setSelectType] = useState("");
  const [filenum, setFilenum] = useState(0);

  const OnClickImageUploadBtn = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    TitlefileRef.current?.click();
  };

  const PreviewTitleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      const imageFile = e.target.files[0];
      if (imageFile && imageFile.type.substring(0, 5) === "image") {
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewTitle(reader.result as string);
        };
        reader.readAsDataURL(imageFile);
      }
    }
  };

  const PreviewImage = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    if (e.target.files !== null) {
      const imageFile = e.target.files[0];
      if (imageFile && imageFile.type.substring(0, 5) === "image") {
        const reader = new FileReader();
        reader.onload = () => {
          if (previewImg) {
            const tmp = [...previewImg];
            tmp[id] = reader.result as string;
            setPreviewImg(tmp);
          }
        };
        reader.readAsDataURL(imageFile);
      }
    }
  };
  const OnClickAddImageUploadBtn = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number
  ) => {
    e.stopPropagation();
    fileRefArr.current[id]?.click();
  };

  const ImageUploadFile = () => {
    let filearr = [];
    for (let i = 0; i < filenum; i++) {
      filearr.push(
        <>
          <div
            className={styled.imageBtn}
            onClick={(e) => OnClickAddImageUploadBtn(e, i)}
          >
            {previewImg![i] ? (
              <img src={previewImg![i] as string} />
            ) : (
              <div style={{ color: "white", marginBottom: "0px" }}>image</div>
            )}
          </div>
          <input
            className={styled.imageinput}
            ref={(e: HTMLInputElement) => (fileRefArr.current[i] = e)}
            name="image"
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => PreviewImage(e, i)}
          />
        </>
      );
    }
    return filearr;
  };

  const FilterTypeHandler = (type: string) => () => {
    setSelectType(type);
    setShowType(false);
  };

  return (
    <div className={styled.PostBackground}>
      <div className="maxframe">
        <div className={styled.Post}>
          <div className={styled.section}>
            <div className={styled.title}>
              <h3>커뮤니티 작성 가이드</h3>
              <p>원활한 커뮤니티 작성을 위해 꼭 확인해주세요</p>
            </div>
            <div className={styled.postRole}>
              <p>
                간단한 자기 소개 후 와인에 관한 이야기를 최대한 자세하게
                들려주세요.
                <span style={{ color: "#B0B0B0", marginLeft: "15px" }}>
                  ex) 당도는 낮은 편이지만 제 입에는 달게 느껴졌습니다...
                </span>
              </p>
              <p>
                사진 첨부 시 용량은 장당 최대 20MB까지 업로드할 수 있고, jpg,
                png, gif 포맷을 지원합니다.
              </p>
              <p>사진은 최대 5장까지 등록 가능합니다.</p>
              <p>
                글 작성과 이미지 업로드 시 , 타인의 지식재산권을 침해하지 않도록
                유의해주세요.
              </p>
            </div>
          </div>
          <div className={styled.section}>
            <div className={styled.title}>
              <h3>필수 정보 입력</h3>
              <p>
                와인 정보를 확인하는데 꼭 필요한 정보이니 최대한 꼼꼼하게
                작성해주세요.
              </p>
              <p>
                <span style={{ color: "red" }}>*</span>표시가 있는 칸은 필수
                입력 값 입니다.
              </p>
            </div>
            <div className={styled.postContents}>
              <form>
                <div className={styled.contents_title}>
                  <h3>
                    제목 <span style={{ color: "red" }}>*</span>
                  </h3>
                  <input
                    id="title"
                    type="text"
                    placeholder="게시글 제목을 입력해주세요."
                  />
                </div>
                <div className={styled.contents_titleImage}>
                  <div>
                    <h3>
                      대표이미지 <span style={{ color: "red" }}>*</span>
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--primary)",
                      }}
                    >
                      (최대 20MB)
                    </p>
                  </div>
                  <div
                    className={styled.imageBtn}
                    onClick={OnClickImageUploadBtn}
                  >
                    {previewTitle ? (
                      <img src={previewTitle as string} />
                    ) : (
                      <div style={{ color: "white", marginBottom: "0px" }}>
                        image
                      </div>
                    )}
                  </div>
                  <input
                    className={styled.imageinput}
                    ref={TitlefileRef}
                    name="image"
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={PreviewTitleImage}
                  />
                </div>
                <div className={styled.contents_titleImage}>
                  <div>
                    <h3>추가이미지</h3>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--primary)",
                      }}
                    >
                      (1장당 최대 20MB)
                    </p>
                  </div>
                  {ImageUploadFile().map((c) => c)}
                  {filenum < 4 ? (
                    <div
                      className={styled.imagePlusBtn}
                      onClick={() => setFilenum(filenum + 1)}
                    >
                      <div style={{ color: "#a6a6a6", marginBottom: "0px" }}>
                        <AiOutlinePlus />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  className={showType ? styled.listActive : styled.listUnactive}
                >
                  <h3>
                    와인타입 <span style={{ color: "red" }}>*</span>
                  </h3>
                  <div>
                    <div
                      className={styled.winetype_Selector}
                      onClick={() => setShowType(!showType)}
                    >
                      <span
                        className={selecttype === "" ? "" : styled.colorBlack}
                      >
                        {selecttype === ""
                          ? "와인타입을 선택해 주세요"
                          : selecttype}
                      </span>
                      <AiOutlineDown />
                    </div>
                    <div
                      className={[
                        styled.winetype_Selector_list,
                        showType ? styled.active : styled.unactive,
                      ].join(" ")}
                    >
                      <ul>
                        {Winetype.map((type, idx) => (
                          <li key={type} onClick={FilterTypeHandler(type)}>
                            {type}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <h3>구매가격</h3>
                  <input type="number" placeholder="구매가격을 입력해주세요." />
                </div>
                <div className={styled.contents_wineinfo}>
                  <h3>
                    와인명 <span style={{ color: "red" }}>*</span>
                  </h3>
                  <input type="text" />
                  <h3>해시태그</h3>
                  <input
                    type="text"
                    placeholder="ex) #선물용 #파티용 #크리스마스 #연말파티"
                  />
                </div>
                <div className={styled.contents_wineStar}>
                  <h3>
                    와인별점 <span style={{ color: "red" }}>*</span>
                  </h3>
                  <StarRatings
                    rating={star}
                    starDimension="25px"
                    starHoverColor={"#61002E"}
                    starRatedColor={"#61002E"}
                    changeRating={(rating) => setStar(rating)}
                  />
                </div>
                <div>
                  <h3>
                    내용 <span style={{ color: "red" }}>*</span>
                  </h3>
                  <textarea placeholder="내용을 입력해주세요." />
                </div>
                <div className={styled.btnWrapper}>
                  <button>등록</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
