import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {
  ButtonModule,MessageService
} from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog'; 
import { PopInnerComponent } from './pop-inner/pop-inner.component';
import { PopComponent } from './pop/pop.component';
import { DialogService, ConfirmationService } from 'primeng/api';
import { DynamicDialogComponent } from 'primeng/components/dynamicdialog/dynamicdialog'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
@NgModule({ 
  imports: [
        BrowserModule,
        BrowserAnimationsModule,
    FormsModule,  
    ButtonModule ,  
    CommonModule,
    DynamicDialogModule
  ], 
  declarations: [ AppComponent, HelloComponent, PopInnerComponent, PopComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DialogService,MessageService,ConfirmationService],
  entryComponents:[PopComponent,PopInnerComponent]
})
export class AppModule { }
