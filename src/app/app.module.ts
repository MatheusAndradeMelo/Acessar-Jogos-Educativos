import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

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
    BuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
