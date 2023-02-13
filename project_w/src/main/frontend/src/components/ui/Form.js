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
      <button onClick={() => router.push('/join')}>SignUp</button>
    </div>
  );
};
export default Form;
