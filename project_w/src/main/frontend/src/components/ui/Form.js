import styled from './Form.module.css';

const Form = props => {
  return (
    <form
      className={styled.form}
      onSubmit={props.onsubmit}
    >
      {props.children}
    </form>
  );
};
export default Form;
