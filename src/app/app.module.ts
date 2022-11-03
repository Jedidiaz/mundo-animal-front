import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { SliderComponent } from './modules/shared/slider/slider.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import {ImageModule} from 'primeng/image';
import { ProductsComponent } from './modules/products/products/products.component';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms'
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {SelectButtonModule} from 'primeng/selectbutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {GalleriaModule} from 'primeng/galleria';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {BadgeModule} from 'primeng/badge';
import { ProductDetailComponent } from './modules/products/product-detail/product-detail.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { CategoryComponent } from './modules/products/category/category.component';
import {ListboxModule} from 'primeng/listbox';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    ProductsComponent,
    ProductDetailComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MegaMenuModule,
    ButtonModule,
    CarouselModule,
    ImageModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    InputTextModule,
    RippleModule,
    RatingModule,
    SelectButtonModule,
    InputNumberModule,
    GalleriaModule,
    AutoCompleteModule,
    BadgeModule,
    ToggleButtonModule,
    ListboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
