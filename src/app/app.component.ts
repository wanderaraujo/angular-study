import { User } from './task-list/user';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wanderson';
  textUpper: string = 'alo bangu';
  percentValue: number = 0.5;
  date: Date = new Date();
  money: number = 10;
  user: User = {
    name:'Bob',
    age: 25
  }
}
