import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-welfare',
  templateUrl: './welfare.component.html',
  styleUrls: ['./welfare.component.scss']
})
export class WelfareComponent implements OnInit {

  menus_maintenance = [];
  menus_inquiry = [];
  menus_report = [];

  constructor() { }

  ngOnInit(): void {

    
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
