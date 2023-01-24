import ReactDOM from 'react-dom';
import styled from './Modal.module.css';

const Backdrop = props => {
  return (
    <div
      className={styled.Backdrop}
      onClick={props.offModal}
    ></div>
  );
};
const ModalOverlay = props => {
  return (
    <div>
      <div className={styled.Modal}>{props.children}</div>
    </div>
  );
};
const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop offModal={props.offModal} />,
        document.getElementById('BackdropRoot')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('Modalroot')
      )}
    </>
  );
};
export default Modal;
