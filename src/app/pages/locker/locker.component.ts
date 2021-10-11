import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.scss']
})
export class LockerComponent implements OnInit {

  menus_maintenance: any = [];
  menus_inquiry: any = [];
  menus_report: any = [];

  constructor() { }

  ngOnInit() {
    axios.get('/assets/PEF.json').then(response => (
      this.menus_maintenance = response.data
    ));

    axios.get('/assets/PEI.json').then(response => (
      this.menus_inquiry = response.data
    ));

    axios.get('/assets/PER_O.json').then(response => (
      this.menus_report = response.data
    ));
  }

}
