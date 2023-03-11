import styled from "./CommentList.module.css";
import { defaultimg } from "./CommunityComment";
import { firstCommentState } from "./ReviewTypes";

const CommentList: React.FC<firstCommentState> = (props) => {
  return (
    <div className={styled.CommentList}>
      <div className={styled.firstComment}>
        <div className={styled.firstComment_Info}>
          <img
            src={props.writerImage !== "null" ? props.writerImage : defaultimg}
          />
          <div>{props.writerNickName}</div>
        </div>
        <div className={styled.commentText}>
          <p>{props.commentText}</p>
          <div>
            <span>{props.regiDate}</span>
            <span>♥ 좋아요</span>
            <span>답글달기</span>
          </div>
        </div>
      </div>
      {props.secondComment.length > 0 && (
        <div className={styled.SecondCommentWrapper}>
          {props.secondComment.map((c) => (
            <div className={styled.SecondComment}>
              <div className={styled.SecondComment_Info}>
                <img
                  src={
                    c.writerImage !== "null" ? props.writerImage : defaultimg
                  }
                />
                <div>{c.writerNickName}</div>
              </div>
              <div className={styled.SecondComment_commentText}>
                <p>{c.commentText}</p>
                <div>
                  <span>{c.regiDate}</span>
                  <span>♥ 좋아요</span>
                  <span>답글달기</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default CommentList;
