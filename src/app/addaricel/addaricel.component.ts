import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormBuilder } from '@angular/forms';
import { NgserviceService } from '../ngservice.service';
import { Article } from '../article';
import { Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-addaricel',
  templateUrl: './addaricel.component.html',
  styleUrls: ['./addaricel.component.css']
})
export class AddaricelComponent implements OnInit {
  article = new Article();
  selectedfile = null;
  SERVER_URL: string = "{Server URL}";
  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];
  constructor(private _route: Router, private _service: NgserviceService, private _http: HttpClient) { }

  ngOnInit(): void {
  }
  addarticlefromsubmit() {
    this._service.addArticle(this.article).subscribe(
      data => {
        console.log("data added");
        console.log(this.article)
        this._route.navigate(['']);
      })
      
  }
  back() {
    this._route.navigate(['']);
  }


  url;

  onFileChanged(event) {

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {

      this.url = reader.result;
      console.log(event.target.files[0].name)
      this.selectedfile = event.target.files[0];

    }
  }
  onUpload() {
    const fd = new FormData();
    fd.append('imageFile', this.selectedfile, this.selectedfile.name);
    this._http.post("http://localhost:8081/hamdi/uploadImage", fd)
      .subscribe(res => {
        console.log(res);

      });
    this.article.urlimage = this.selectedfile.name;
    console.log(this.article.urlimage);
    
  }
  






}












