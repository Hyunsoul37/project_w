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
  winePrice: number;
  hashTag: string[];
  wineType: string;
  starPoint: number;
}
export interface firstCommentState {
  commentId: number;
  reviewId: number;
  comment: string;
  writerId: number;
  regiDate: string;
  writerNick: string;
  writerProfile: string;
  like: boolean;
  child: secondCommentState[];
}
export interface secondCommentState {
  commentId: number;
  reviewId: number;
  comment: string;
  writerId: number;
  parentId: number;
  writerNick: string;
  writerProfile: string;
  regiDate: string;
  tagWriterNick?: string;
  tagWriterId: number;
  like: boolean;
}
export interface commentState {
  parent: firstCommentState[];
}
