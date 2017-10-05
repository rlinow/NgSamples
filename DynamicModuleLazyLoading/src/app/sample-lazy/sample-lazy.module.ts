import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample/sample.component';
import { ISampleComponent, ISampleModule } from '../interfaces';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SampleComponent],
  entryComponents: [SampleComponent]
})
export class SampleLazyModule implements ISampleModule {
    componentType: Type<ISampleComponent> = SampleComponent;
}
