import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanksComponent } from './banks/banks.component';
import { HttpClientModule } from '@angular/common/http';
import { BankService } from './bank.service';
import { FormsModule} from '@angular/forms';

import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    BanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
