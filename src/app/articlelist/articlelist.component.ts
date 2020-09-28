import { Component, OnInit, ViewChild } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import { Article } from '../article';
import { Router } from '@angular/router';
import {  MatTableDataSource } from '@angular/material/table';
import { from } from 'rxjs';
@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.css']
})
export class ArticlelistComponent implements OnInit {
  _articlelist: Article[];
  name: string;
  datasource = new MatTableDataSource(this._articlelist);
  total: number;
  page: number = 1;

  constructor(private _service: NgserviceService, private _route: Router) { }

  ngOnInit(): void {
    this._service.ArticleList().subscribe(
      data => {
        console.log("ok read")
        this._articlelist = data;

      },
      error => console.log("erreur ")
    )

  }
  add_aritcle() {
    this._route.navigate(['/addaricle']);
  }
  updatearticle(article: Article) {
    console.log(article);
    this._route.navigate(['/updatearticle', article.idArticle]);
  }



  Delete_article(article: Article) {
    console.log(article.idArticle);

    this._service.deleteArticle(article).subscribe(
      data => {
        console.log("date deleted ");
        this.ngOnInit();
      });

  }
  search() {
    if (this.name != "") {
      this._articlelist = this._articlelist.filter(res => {
        return res.nameArticle.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });

    } else if (this.name == '') {
      this.ngOnInit();
    }

  }
  facture(){
    this._service.getFacture().subscribe(
      data => {
        console.log("facture done ") });

  }

}




