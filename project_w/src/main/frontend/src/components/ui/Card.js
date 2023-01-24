import styled from './Card.module.css';

const Card = props => {
  return <div className={styled.Card}>{props.children}</div>;
};
export default Card;
