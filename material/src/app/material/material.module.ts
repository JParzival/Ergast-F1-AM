import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule, 
        MatButtonModule, 
        MatSidenavModule, 
        MatIconModule, 
        MatListModule, 
        MatTableModule,
        MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: 
  [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatTabsModule
  ],
  exports:
  [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
