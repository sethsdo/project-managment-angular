import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';
import { AppRoutingModule } from './../app-routing.module';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = ''
  price = ''
  tasks = [];

  constructor(private _taskService: TaskService, private _router: Router) {
    console.log(this._taskService.tasks.length)
    this.tasks = this._taskService.tasks;
  }

  onDelete(id) {
    console.log(id)
    for (let task in this.tasks) {
      if (this.tasks[task].title = id) {
        this.tasks.splice(this.tasks[task], 1)
      }
    }
    this._router.navigate(['show']);
  }
  onEdit(id){
    console.log(['edit/' + id])
    this._router.navigate(['edit/' + id]);
  }

  ngOnInit() {
    this.tasks = this._taskService.tasks;
    console.log(this.tasks, "this is list")
  }

}
