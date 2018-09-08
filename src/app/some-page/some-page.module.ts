import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { SomePageComponent } from './some-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule,
  ],
  declarations: [SomePageComponent],
  providers: [NbSidebarService], // we need this service for the sidebar
  exports: [
    SomePageComponent
  ]
})
export class SomePageModule { }
