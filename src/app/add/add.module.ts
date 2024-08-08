import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { AddRoutingModule } from './add-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    FormsModule,
    AddRoutingModule
  ],
  
})
export class AddModule { }
