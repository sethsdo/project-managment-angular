import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../task.service';
import { Product } from './products';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product = new Product();
  tasks = []
  current = ''
  list = []
  constructor(private _taskService: TaskService, private _route: ActivatedRoute, private _router: Router) { 
    this.tasks = this._taskService.retrieveTasks();
    this._route.paramMap.subscribe(params => {
      this.current = params.get('this');
    })
  }
  onDelete(id){
    for (let task in this.tasks) {
      if (this.tasks[task].title = id) {
        this.tasks.splice(this.tasks[task], 1)
      }
    }
    this._router.navigate(['show'])
  }

  onUpdate() {
    
    this.list.push(this.product)
    for (let task = 0; task < this.tasks.length; task++) {
      console.log(task)
      if (this.tasks[task].title = this.current) {
        this.tasks.splice(task, 1, this.list)
        return this._router.navigate(['show'])
      }
      console.log(this.tasks)
    }
  }

  ngOnInit() {
    console.log(this.current)
  }

}
