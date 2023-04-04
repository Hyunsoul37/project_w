import styled from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";
//AiFillGithub
const Footer = () => {
  return (
    <footer className={styled.Footer}>
      <div className={styled.Footer_Info}>
        <div className={styled.logo}>WAGU</div>
        <div className={styled.devInfo}>
          <div>
            <h1>BackEnd</h1>
            <h3>Lee ho hyun</h3>
            <p>
              <span style={{ marginRight: "10px" }}>E-MAIL</span>{" "}
              soulhyun37@gmail.com
            </p>
            <a href="https://github.com/Hyunsoul37" target="blank">
              <AiFillGithub />
            </a>
          </div>
          <div>
            <h1>FrontEnd</h1>
            <h3>Lim sun min</h3>
            <p>
              <span style={{ marginRight: "10px" }}>E-MAIL</span>{" "}
              dlatjsals123@naver.com
            </p>
            <a href="https://github.com/SSSunmin" target="blank">
              <AiFillGithub />
            </a>
          </div>
          <div>
            <h1>Designer</h1>
            <h3>Shin hyo jin</h3>
            <p>
              <span style={{ marginRight: "10px" }}>E-MAIL</span>{" "}
              tlsgywls1107@naver.com
            </p>
            <a href="https://github.com/hyooo11" target="blank">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>

      <p>
        본 사이트는 상업적 목적이 아닌 포트폴리오용으로 제작된 사이트입니다.
      </p>
    </footer>
  );
};
export default Footer;
