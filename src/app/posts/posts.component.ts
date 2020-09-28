import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Post } from '../post';

@Component({

  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  _postlist: Post[];
  post = new Post();
  edit: boolean = true;
  elseBlock: boolean;
  newtextPost: string;
  id : number =1;
  constructor(private _service: NgserviceService, private _route: Router) { }

  ngOnInit(): void {
    this._service.postList().subscribe(
      data => {
        console.log("ok !!")
        this._postlist = data;

      },
      error => console.log("erreur ")
    )
      this.post.textPost ="";


  }
  Delete_Post(post: Post) {
    console.log(post.idPost)
    this._service.deletepost(post.idPost).subscribe(
      data => {
        console.log("post deleted ");
        this.ngOnInit();
      });

  }
  update_Post(post:Post){
    this._service.getpostbyid(post.idPost).subscribe(
      data=>{
        console.log(post.idPost);
        post=data ;
      })
      console.log(post)
      this.post= post ;
  }
  save() {
    console.log(this.post)
    this._service.getpostbyid(this.post.idPost).subscribe(
      data=>{
        console.log(this.post.idPost);
        this.post=data ;
      }
    )
    console.log(this.newtextPost);
    this.post.textPost = this.newtextPost;
    this._service.updatepost(this.post).subscribe(
      data => {
        console.log("post up to date ");
        console.log(this.post);
      })
  }
  addpost() {

    if (this.post.textPost != "") {
      this._service.addpost(this.post).subscribe(
        data => {
          console.log("post added");
          console.log(this.post);
          this.post.textPost = "";
          this.ngOnInit();
        })
    }
  }
  like (post : Post) {
    this._service.getpostbyid(post.idPost).subscribe(
      data=>{
        console.log(post.idPost);

        post=data ;
        this.post= post ;
        this.post.like++
        this._service.updatepost(this.post).subscribe(
          data => {
            console.log("like up to date ");
            console.log(this.post);
            this.ngOnInit();
          })

      })

  }
  dislike (post: Post) {
    this._service.getpostbyid(post.idPost).subscribe(
      data=>{
        console.log(post.idPost);

        post=data ;
        this.post= post ;
        this.post.dislike++
        this._service.updatepost(this.post).subscribe(
          data => {
            console.log("dislike up to date ");
            console.log(this.post);
            this.ngOnInit();
          })

      })

    }


}
