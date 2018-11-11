import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NbThemeModule } from '@nebular/theme';
import { SomePageModule } from './some-page/some-page.module';
import { EarthquakeModule } from './earthquake/earthquake.module';
import { TsunamiPotentialPageComponent } from './tsunami-potential-page/tsunami-potential-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TsunamiPotentialPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'default' }), // this will enable the default theme, you can change this to `cosmic` to enable the dark theme
    SomePageModule,
    EarthquakeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
