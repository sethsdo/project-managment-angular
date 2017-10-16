import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { Product } from './products';
import { AppRoutingModule } from './../app-routing.module';
import { Router, ActivatedRoute } from '@angular/router';


@Component({ 
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

  title = 'Products';
  current = false
  product = new Product();
  tasks = [];

  constructor(private _taskService: TaskService, private _router: Router) {
    console.log(this.tasks.length, "this is create")
    this._taskService.tasks.push(this.tasks);

  }

  onSubmit() {
    this.tasks.push(this.product)
    this.product = new Product()
    this._router.navigate(['show']);
  }

  ngOnInit() {
  }

}
