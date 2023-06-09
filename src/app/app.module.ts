import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';

// SCREENs
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoContentComponent } from './components/video-content/video-content.component';
import { MiniBannerComponent } from './components/mini-banner/mini-banner.component';
import { ProblemsActivityComponent } from './components/problems-activity/problems-activity.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { ApostilleComponent } from './components/apostille/apostille.component';
import { WarrantyComponent } from './components/warranty/warranty.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { SurprisesComponent } from './components/surprises/surprises.component';
import { SuportComponent } from './components/suport/suport.component';
import { DiscountComponent } from './components/discount/discount.component';
import { CountDownComponent } from './components/countdown/countdown.component';
import { BuyComponent } from './components/buy/buy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AskedQuestions } from './components/frequently-asked-questions/asked-questions.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import Swiper from 'swiper';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    VideoContentComponent,
    MiniBannerComponent,
    ProblemsActivityComponent,
    SolutionsComponent,
    ApostilleComponent,
    WarrantyComponent,
    CertificateComponent,
    SurprisesComponent,
    SuportComponent,
    DiscountComponent,
    CountDownComponent,
    BuyComponent,
    AskedQuestions,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatTooltipModule
  ],
  providers: [Swiper],
  bootstrap: [AppComponent]
})
export class AppModule { }
