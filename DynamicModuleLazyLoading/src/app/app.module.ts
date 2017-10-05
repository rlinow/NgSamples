import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent, DynamicModuleContainerDirective } from './app.component';

@NgModule({
  declarations: [
    AppComponent, DynamicModuleContainerDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'dummy/sample', loadChildren: './sample-lazy/sample-lazy.module#SampleLazyModule' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
