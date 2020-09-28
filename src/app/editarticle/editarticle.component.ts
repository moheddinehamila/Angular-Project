import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgserviceService} from '../ngservice.service' ; 
import {Article} from '../article';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})
export class EditarticleComponent implements OnInit {
  article = new Article();
  constructor(private _route : Router , private _service: NgserviceService , private _activateroute : ActivatedRoute) { }

  ngOnInit(): void {
   let id = parseInt(this._activateroute.snapshot.paramMap.get('idarticle'));  
    this._service.getarticlebyid(id).subscribe(
      data=>{
        console.log(id);
        this.article=data ;  
      }
    )
  }
  updatearticlefromsubmit(){
    this._service.updateArticle(this.article).subscribe (
      data=>{
        console.log("dataup to date ");
        this._route.navigate(['']);   
    }
    
    )

  }
 
  back(){
    this._route.navigate(['']); 
  }

}
