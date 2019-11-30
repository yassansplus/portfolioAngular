import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './element/menu/menu.component';
import { IndexComponent } from './page/index/index.component';
import { BannerComponent } from './element/header/banner/banner.component';
import { FooterComponent } from './element/footer/footer.component';
import { BlogComponent } from './page/blog/blog.component';
import { BlogBannerComponent } from './element/header/blog-banner/blog-banner.component';
import { RightbarComponent } from './element/sidebar/rightbar/rightbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndexComponent,
    BannerComponent,
    FooterComponent,
    BlogComponent,
    BlogBannerComponent,
    RightbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
