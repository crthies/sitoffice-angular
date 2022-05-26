import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// Material menú responsive
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

const MaterialModules = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule  
]

@NgModule({
  imports: [ MaterialModules ],
  exports: [ MaterialModules ]
})
export class MaterialModule { }
