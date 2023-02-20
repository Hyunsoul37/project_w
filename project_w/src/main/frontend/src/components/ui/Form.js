import styled from './Form.module.css';
import { useRouter } from 'next/router';

const Form = (props) => {
  const router = useRouter();
  return (
    <div className={styled.formWrapper}>
      <form
        className={styled.form}
        onSubmit={props.onsubmit}
      >
        {props.children}
      </form>
      {props.isLogin && (
        <>
          <input
            id="idsave"
            type="checkbox"
          />
          <label htmlFor="idsave">
            <span>아이디저장</span>
          </label>
          <span onClick={() => router.push('/login/join')}>SignUp</span>
        </>
      )}
    </div>
  );
};
export default Form;
