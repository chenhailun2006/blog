import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DevelopSummaryComponent } from './develop-summary/develop-summary.component';
import { TechnicalArticleComponent } from './technical-article/technical-article.component';
import { DiaryPageComponent } from './diary-page/diary-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ComponentsModule } from '../components/components.module';
import { AddArticleComponent } from './add-article/add-article.component';
import { CKEditorModule } from 'ng2-ckeditor';
@NgModule({
  imports: [
    CKEditorModule,
    CommonModule,
    ComponentsModule,
  ],
  declarations: [
    HomeComponent,
    DevelopSummaryComponent,
    TechnicalArticleComponent,
    DiaryPageComponent,
    AboutPageComponent,
    AddArticleComponent
  ],
  exports: [
    AboutPageComponent,
    HomeComponent,
    DevelopSummaryComponent,
    TechnicalArticleComponent,
    DiaryPageComponent,
    AddArticleComponent
  ]
})
export class PagesModule { }
