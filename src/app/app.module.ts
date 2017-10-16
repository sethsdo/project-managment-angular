import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { EditProductComponent } from './product-list/edit-product/edit-product.component';
import { TaskService } from './task.service'; 


@NgModule({
  declarations: [
    AppComponent,
    ProductHomeComponent,
    ProductListComponent,
    CreateProjectComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
