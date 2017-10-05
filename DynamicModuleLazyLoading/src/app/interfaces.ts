import { Type } from '@angular/core';

export interface ISampleModule {
    componentType: Type<ISampleComponent>;
}

export interface ISampleComponent {
    init(): void;
}
