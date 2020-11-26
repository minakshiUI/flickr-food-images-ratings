import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { FlickrAPIService } from '../services/flickr-api.service';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

 
@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.css']
})
export class ImagesGridComponent implements OnInit {

  images=[];
  stars=[1,2,3,4,5,6,7,8,9,10];

  constructor(private activatedRoute:ActivatedRoute, 
              private flickrService:FlickrAPIService){}


  ngOnInit(){    
    this.flickrService.loadFoodImages()
    .subscribe((res)=>{
      this.images=res;      
    });  
   
  }

  sendImageDetail(id:string){
      this.flickrService.setImageById(id);
 }
 
}