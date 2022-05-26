import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  @Output() sidenaveMode = new EventEmitter<string>();

  constructor(private observer: BreakpointObserver){}

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        console.log(this.sidenav.mode);
        this.sidenaveMode.emit(this.sidenav.mode);
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        console.log(this.sidenav.mode);
        this.sidenav.open();
      }
    });
  }

  addSidenavMode(value:string){
    this.sidenaveMode.emit(this.sidenav.mode);
  }

}

