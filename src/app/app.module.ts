import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {CardModule} from "primeng/card";
import {DropdownModule, InputTextModule, PanelModule} from "primeng/primeng";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoadingComponent} from "./loading/loading.component";
import { ZippyComponent } from './zippy/zippy.component';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    LoadingComponent,
    ZippyComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    BrowserAnimationsModule
  ],
  exports: [
    LoadingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
