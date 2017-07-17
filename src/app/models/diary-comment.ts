export class DiaryComment {
  id: number;
  text: string;
  addDate: Date;
  likeCount: number;
  dislikeCount: number;
  userId: number;
  constructor(id: number, text: string, addDate: number, likeCount: number, dislikeCount: number, userId: number) {
    this.id = id;
    this.text = text;
    this.addDate = new Date(addDate);
    this.likeCount = likeCount;
    this.dislikeCount = dislikeCount;
    this.userId = userId;
  }
}
