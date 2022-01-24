import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  commentForm= new FormGroup({
    name: new FormControl('BA'),
    content: new FormControl('Ibra')


  })

  collectData(){
    console.warn(this.commentForm.value)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
