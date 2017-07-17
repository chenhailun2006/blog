export class Diary {
  id: number;
  text: string;
  addDate: Date;
  likeCount: number;
  dislikeCount: number;
  imgSrc: string;
  constructor(id: number, text: string, addDate: number, likeCount: number, dislikeCount: number, imgSrc: string) {
    this.id = id;
    this.text = text;
    this.addDate = new Date(addDate);
    this.likeCount = likeCount;
    this.dislikeCount = dislikeCount;
    this.imgSrc = imgSrc;
  }
}
