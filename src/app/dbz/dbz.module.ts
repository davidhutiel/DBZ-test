import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  exports: [
    MainPageComponent
  ],
  declarations: [MainPageComponent,ListComponent, FormComponent],
  imports: [
    CommonModule, FormsModule
  ]
})
export class DbzModule { }
