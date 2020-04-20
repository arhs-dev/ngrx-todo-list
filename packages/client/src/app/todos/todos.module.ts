import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [TodoListComponent],
})
export class TodosModule {}
