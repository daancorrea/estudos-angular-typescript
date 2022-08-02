import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { Curso1Component } from './curso1/curso1.component';



@NgModule({
  declarations: [
    CursosComponent,
    Curso1Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
