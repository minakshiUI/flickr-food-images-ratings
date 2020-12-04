import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesGridComponent } from './images-grid/images-grid.component';
import { ReviewImageComponent } from './review-image/review-image.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ImagesGridComponent,
    ReviewImageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    FormsModule,
    HttpClientModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
