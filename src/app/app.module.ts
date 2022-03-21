import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ApiSerivce } from './api.service';
// import { MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent, DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiSerivce,
    // {provide: MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, useValue: 'check'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
