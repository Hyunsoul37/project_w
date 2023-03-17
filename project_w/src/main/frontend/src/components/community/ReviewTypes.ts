export interface reviewState {
  reviewId: number;
  nickname: string;
  profileimg: string;
  reviewDate: string;
  heartCount: number;
  reviewTitle: string;
  reviewContents: string;
  reviewimage: string[];
  wineName: string;
  price: string;
  hashTag: string[];
  wineType: string;
}
export interface firstCommentState {
  firstComment_Id: number;
  writerId: number;
  writerNickName: string;
  commentText: string;
  writerImage: string;
  regiDate: string;
  commentLike: boolean;
  secondComment: secondCommentState[];
}
interface secondCommentState {
  secondComment_Id: number;
  writerId: number;
  writerNickName: string;
  commentText: string;
  writerImage: string;
  regiDate: string;
  writerTag?: string;
  commentLike: boolean;
}
export interface commentState {
  reviewId: number;
  firstComment: firstCommentState[];
}
