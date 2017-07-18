import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { DiaryComponent } from './diary/diary.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { RankComponent } from './rank/rank.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ArticleComponent,
    DiaryComponent,
    HeaderComponent,
    FooterComponent,
    ArticleListComponent,
    DiaryListComponent,
    CommentComponent,
    CommentListComponent,
    JumbotronComponent,
    RankComponent,
    SearchComponent
  ],
  exports: [
    ArticleComponent,
    DiaryComponent,
    HeaderComponent,
    FooterComponent,
    ArticleListComponent,
    DiaryListComponent,
    CommentComponent,
    CommentListComponent,
    JumbotronComponent,
    RankComponent,
    SearchComponent
  ]
})
export class ComponentsModule { }
