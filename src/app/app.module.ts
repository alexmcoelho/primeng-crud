import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EventoListComponent } from './components/evento-list/evento-list.component';
import { EventoDetailComponent } from './components/evento-detail/evento-detail.component';
import { EventoInfoService } from './services/evento-info.service';
import { CandidateInfoService } from './services/candidate-info.service';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './components/candidate-detail/candidate-detail.component';
import { FavouriteInfoComponent } from './components/favourite-info/favourite-info.component';

import {DataTableModule, SharedModule, ButtonModule, InputTextModule, DialogModule, CalendarModule, DropdownModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    EventoListComponent,
    EventoDetailComponent,
    CandidateListComponent,
    CandidateDetailComponent,
    FavouriteInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    BrowserAnimationsModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    DropdownModule
  ],
  providers: [EventoInfoService, CandidateInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
