import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) {

  }


  getData(){
    let url =  'http://127.0.0.1:8000/api/comments?page=1'
    return this.http.get(url)
  }
}
