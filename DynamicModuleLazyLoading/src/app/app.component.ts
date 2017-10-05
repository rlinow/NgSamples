import { Component, Directive, ViewContainerRef, AfterViewInit, ViewChild,
  NgModuleFactoryLoader, ReflectiveInjector, NgModuleRef } from '@angular/core';

import { ISampleModule } from './interfaces';

  @Directive({selector: '[dmlDynamicModuleContainer]'})
  export class DynamicModuleContainerDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
  }

@Component({
  selector: 'dml-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loader: NgModuleFactoryLoader) {}

  @ViewChild(DynamicModuleContainerDirective) childContainer: DynamicModuleContainerDirective;

  loadDynamicModule(): void {
    this.loader.load('./sample-lazy/sample-lazy.module#SampleLazyModule').then((moduleFactory) => {
      const moduleRef = <NgModuleRef<ISampleModule>>moduleFactory.create(ReflectiveInjector.fromResolvedProviders([],
        this.childContainer.viewContainerRef.parentInjector));
      const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(moduleRef.instance.componentType);
      this.childContainer.viewContainerRef.clear();
      this.childContainer.viewContainerRef.createComponent(componentFactory);
    });
  }
}
