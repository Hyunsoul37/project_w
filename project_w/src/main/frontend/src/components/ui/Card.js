import styled from './Card.module.css';

const Card = props => {
  return (
    <div
      id={props.id}
      className={styled.Card}
      onClick={e => props.onClick(e)}
    >
      {props.children}
    </div>
  );
};
export default Card;
