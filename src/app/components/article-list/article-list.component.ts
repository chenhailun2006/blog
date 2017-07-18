import { Article } from '../../models/article';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  @Input() articleList: Article[];
  constructor() { }

  ngOnInit() {
  }

}
