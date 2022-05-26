import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit { 
  x = "Test"
  constructor() { }

  ngOnInit(): void {
  }

  reciveSidenavMode($event: string){
    this.x=$event
  }
}
