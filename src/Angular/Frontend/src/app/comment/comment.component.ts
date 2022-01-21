import { Component, OnInit } from '@angular/core';
import {CommentService} from "../comment.service";
import {LoaderService} from "../loader/loader.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private commentService: CommentService, public loaderService: LoaderService) {
    this.commentService.getData().subscribe(data=>{
      this.data=data
      console.log(data)
    }

  )
  }

  data: any = []

  ngOnInit(): void {
  }

}
