import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { ModuleWithProviders } from '@angular/core';
import { rootRouterConfig } from './app.routes';

const rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    PagesModule,
    rootRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
