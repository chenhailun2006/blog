export class ArticleComment {
  id: number;
  text: string;
  userId: number;
  addDate: Date;
  articleId: number;

  constructor(id: number, text: string, userId: number, addDate: number, articleId: number) {
    this.id = id;
    this.text = text;
    this.userId = userId;
    this.addDate = new Date(addDate);
    this.articleId = articleId;
  }
}
