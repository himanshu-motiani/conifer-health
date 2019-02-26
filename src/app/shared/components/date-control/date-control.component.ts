import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.css']
})
export class DateControlComponent implements OnInit {

  minDate: Date;
  maxDate: Date;

  constructor() {
  }
  ngOnInit() {
  }

}
