import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-work-calendar',
  templateUrl: './work-calendar.component.html',
  styleUrls: ['./work-calendar.component.css']
})
export class WorkCalendarComponent implements OnInit {
  view = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];
  constructor() {}

  ngOnInit() {}

  getRandomTimeH() {
    return Math.floor(Math.random() * 8 + 1);
  }

  getRandomTimeM() {
    return Math.floor(Math.random() * 60 + 1);
  }
}
