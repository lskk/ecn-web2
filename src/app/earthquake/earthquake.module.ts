import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarthquakesListComponent } from './earthquakes-list/earthquakes-list.component';
import { NbCardModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    HttpClientModule,
  ],
  declarations: [EarthquakesListComponent],
  exports: [EarthquakesListComponent],
})
export class EarthquakeModule { }
