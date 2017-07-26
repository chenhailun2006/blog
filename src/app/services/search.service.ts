import { Article } from '../models/article';
import { ArticleType } from '../models/article-type';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  getArticlesByKeywordAndArticleType(keyword: string, ArticleType: ArticleType): Observable<Article[]> {
    return
  }

}
