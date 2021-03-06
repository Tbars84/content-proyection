import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// PRIME MODULES
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import { AppComponent } from './app.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {SpinnerModule} from 'primeng/spinner';
import {TreeModule} from 'primeng/tree';

// COMPONENTS
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthFormRemember } from './auth-form/components/auth-remember.component';
import { SelectorComponent } from './auth-form/components/selector-form.component';
import { StoreComponent } from './auth-form/components/store-form.component';
import { StockComponent } from './auth-form/components/stock-form.component';
import { MapComponentComponent } from './map-component/map-component.component';
// SERVICES
import { StockData } from './auth-form/services/items-stock.services';
import { AppsData } from './map-component/services/items-stock.services';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthFormRemember,
    SelectorComponent,
    StoreComponent,
    StockComponent,
    MapComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
    SpinnerModule,
    TreeModule
  ],
  providers: [StockData , AppsData],
  bootstrap: [AppComponent]
})
export class AppModule { }
