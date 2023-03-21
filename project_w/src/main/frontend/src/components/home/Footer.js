import styled from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";
//AiFillGithub
const Footer = () => {
  return (
    <footer className={styled.Footer}>
      <div className={styled.devInfo}>
        <div>
          <h1>이호현</h1>
          <AiFillGithub />
        </div>
        <div>
          <h1>임선민</h1>
          <AiFillGithub />
        </div>
        <div>
          <h1>신효진</h1>
          <AiFillGithub />
        </div>
      </div>
      <p>본 사이트는 포트폴리오용 사이트입니다.</p>
    </footer>
  );
};
export default Footer;
