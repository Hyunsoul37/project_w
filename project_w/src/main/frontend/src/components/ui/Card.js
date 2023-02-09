import styled from './Card.module.css';

const Card = (props) => {
  return (
    <div
      id={props.id}
      className={[styled.Card, props.className ? props.className : ''].join(
        ' '
      )}
      onClick={(e) => props.onClick(e)}
    >
      {props.children}
    </div>
  );
};
export default Card;
