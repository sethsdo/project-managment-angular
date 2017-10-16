import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductHomeComponent } from './product-home/product-home.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditProductComponent } from './product-list/edit-product/edit-product.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProductHomeComponent},
  { path: 'create', component: CreateProjectComponent},
  { path: 'show', component: ProductListComponent},
  { path: 'edit/:this', component: EditProductComponent},
  { path: 'edit/goHome', redirectTo: '/show' },
  { path: 'create/home', redirectTo: '/show' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
