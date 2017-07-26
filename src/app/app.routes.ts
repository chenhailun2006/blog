import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DevelopSummaryComponent } from './pages/develop-summary/develop-summary.component';
import { TechnicalArticleComponent } from './pages/technical-article/technical-article.component';
import { DiaryPageComponent } from './pages/diary-page/diary-page.component';
export const rootRouterConfig: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'develop-summary', component: DevelopSummaryComponent, outlet: 'aux' },
  { path: 'technical-article', component: TechnicalArticleComponent },
  { path: 'diary', component: DiaryPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'add-article', component: AddArticleComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
