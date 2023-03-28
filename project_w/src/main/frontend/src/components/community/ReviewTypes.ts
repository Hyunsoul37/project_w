export interface reviewState {
  reviewId: number;
  writerId: number;
  writerNickName: string;
  profileimg: string;
  regiDate: string;
  reviewLike: number;
  reviewTitle: string;
  desc: string;
  reviewImgs: string[];
  wineName: string;
  winePrice: string;
  hashTag: string[];
  wineType: string;
  starPoint: number;
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
export interface secondCommentState {
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
