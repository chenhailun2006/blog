export class Article {
  id: number;
  title: string;
  summary: string;
  content: string;
  addDate: Date;
  lastModified: Date;
  likeCount: number;
  dislikeCount: number;
  // userId: number;
  articleTypeId: number;
  imgSrc?: string = null;

  constructor(
    id: number,
    title: string,
    summary: string,
    content: string,
    addDate: number,
    lastModified: number,
    likeCount: number = 0,
    dislikeCount: number = 0,
    // userId: number,
    articleTypeId: number,
    imgSrc?: string
  ) {
    this.id = id;
    this.title = title;
    this.summary = summary;
    this.content = content;
    this.addDate = new Date(addDate);
    this.lastModified = new Date(lastModified);
    this.likeCount = likeCount;
    this.dislikeCount = dislikeCount;
    // this.userId = userId;
    this.articleTypeId = articleTypeId;
    if (imgSrc) {
      this.imgSrc = imgSrc;
    }
  }
}
