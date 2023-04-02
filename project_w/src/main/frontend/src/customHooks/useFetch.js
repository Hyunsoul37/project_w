import { useCallback } from "react";
import { useRouter } from "next/router";

// import { useNavigate } from 'react-router-dom';

const useFetch = () => {
  const router = useRouter();
  // const navigate = useNavigate();
  const sendRequestData = useCallback(
    async ({
      url,
      type = "GET",
      data,
      header,
      movepath = null,
      AfterGetData,
    }) => {
      // console.log(`useFetch에서 받은데이터
      // url:${url}
      // type: ${type}
      // data: ${data}
      // header Content-Type:${header["Content-Type"]}
      // movepath:${movepath}`);

      try {
        const response = await fetch(url, {
          method: type,
          body: data ? JSON.stringify(data) : null,
          headers: header,
        });
        // if (!response.ok) {
        //   throw new Error('Request failed!');
        // }
        const responseData = await response.json();
        if (movepath) {
          router.push(
            {
              pathname: movepath,
            },
            movepath
          );
        }
        if (AfterGetData !== null || AfterGetData !== undefined) {
          AfterGetData(responseData);
        }
      } catch (err) {
        console.log(err);
      }
    },
    []
  );
  return {
    sendRequestData,
  };
};

export default useFetch;
