import { Component, OnInit } from '@angular/core';
import { ISampleComponent } from '../../interfaces';

@Component({
  selector: 'dml-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, ISampleComponent {

  init(): void { }

  constructor() { }

  ngOnInit() {
  }

}
