import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { DiaryComponent } from './diary/diary.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { DiaryListComponent } from './diary-list/diary-list.component';
import { CommentComponent } from './comment/comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArticleComponent, DiaryComponent, HeaderComponent, FooterComponent, ArticleListComponent, DiaryListComponent, CommentComponent, CommentListComponent],
  exports: [
    ArticleComponent
  ]
})
export class ComponentsModule { }
