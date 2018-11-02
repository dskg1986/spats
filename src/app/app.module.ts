import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReviewTwoComponent } from './review-two/review-two.component';
import { ReviewThreeComponent } from './review-three/review-three.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppSrpdashComponent } from './app-srpdash/app-srpdash.component';
import { LeadSrpdashComponent } from './lead-srpdash/lead-srpdash.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SrpApplicationComponent } from './srp-application/srp-application.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LogInComponent } from './log-in/log-in.component';
import { RecHomeComponent } from './rec-home/rec-home.component';
import { PaleoHomeComponent } from './paleo-home/paleo-home.component';
import { AccountTcComponent } from './account-tc/account-tc.component';
import { AccountProfileComponent } from './account-profile/account-profile.component';
import { ReportsComponent } from './reports/reports.component';
import { AdminTermsComponent } from './admin-terms/admin-terms.component';
import { AdminSearchBlmComponent } from './admin-search-blm/admin-search-blm.component';
import { AdminSearchAppComponent } from './admin-search-app/admin-search-app.component';
import { AdminDomainsComponent } from './admin-domains/admin-domains.component';
import { AdminDocLibComponent } from './admin-doc-lib/admin-doc-lib.component';

// services
import { AuthenticationService } from './services/authentication/authentication.service';
import { AuthGuardService } from './services/authentication/auth-guard.service';
import { SrpApplicationService } from './services/application/srp-application.service';
import { ProfileService } from './services/profile/profile.service';
import { StateService } from './services/states/states.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reviewTwo', component: ReviewTwoComponent, canActivate: [AuthGuardService] },
  { path: 'reviewThree', component: ReviewThreeComponent, canActivate: [AuthGuardService] },
  { path: 'blmDash', component: LeadSrpdashComponent, canActivate: [AuthGuardService] },
  { path: 'appDash', component: AppSrpdashComponent, canActivate: [AuthGuardService] },
  { path: 'paleoHome', component: PaleoHomeComponent },
  { path: 'recHome', component: RecHomeComponent },
  { path: 'srpApp', component: SrpApplicationComponent, canActivate: [AuthGuardService] },
  { path: 'terms', component: AdminTermsComponent, canActivate: [AuthGuardService] },
  { path: 'domains', component: AdminDomainsComponent, canActivate: [AuthGuardService] },
  { path: 'BLMSearch', component: AdminSearchBlmComponent, canActivate: [AuthGuardService] },
  { path: 'applicantSearch', component: AdminSearchAppComponent, canActivate: [AuthGuardService] },
  { path: 'docLib', component: AdminDocLibComponent, canActivate: [AuthGuardService] },
  { path: 'createAccount', component: CreateAccountComponent },
  { path: 'logIn', component: LogInComponent },
  { path: 'accountTC', component: AccountTcComponent },
  { path: 'profile', component: AccountProfileComponent, canActivate: [AuthGuardService] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewTwoComponent,
    ReviewThreeComponent,
    PageNotFoundComponent,
    AppSrpdashComponent,
    LeadSrpdashComponent,
    NavComponent,
    FooterComponent,
    SrpApplicationComponent,
    CreateAccountComponent,
    LogInComponent,
    RecHomeComponent,
    PaleoHomeComponent,
    AccountTcComponent,
    AccountProfileComponent,
    ReportsComponent,
    AdminTermsComponent,
    AdminSearchBlmComponent,
    AdminSearchAppComponent,
    AdminDomainsComponent,
    AdminDocLibComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    SrpApplicationService,
    ProfileService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
