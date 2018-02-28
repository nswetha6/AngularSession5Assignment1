import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-component', //changing rootcomponent selector name to my-app-component from app-root-component
  templateUrl: './root-component.component.html',
  styleUrls: ['./root-component.component.css']
})
export class RootComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
