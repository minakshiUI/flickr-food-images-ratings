import { Component, OnInit,ViewChild } from '@angular/core'; 
import { from, Observable } from 'rxjs';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FlickrAPIService} from '../services/flickr-api.service';
import { FlickrPhoto } from '../Interface/FlickrImages';
import { ImagesGridComponent } from '../images-grid/images-grid.component';

@Component({
  selector: 'app-review-image',
  templateUrl: './review-image.component.html',
  styleUrls: ['./review-image.component.css']
})
export class ReviewImageComponent implements OnInit {
  
  // @ViewChild('f') ratingForm:NgForm;
  public ratingForm:FormGroup;
  selectedValue: number=0;
  imageDetail;
  // rating;
  stars=[1,2,3,4,5];

  constructor(private router:Router, private flickrService:FlickrAPIService,
              private activatedRoute:ActivatedRoute, private fb:FormBuilder) { 
                this.ratingForm=fb.group({
                  rating:['',Validators.required],
                  name:['',Validators.required],
                  reason:['',Validators.required]
                });
              }
  ngOnInit(){
    this.flickrService.getImageById().subscribe(data=>{
            this.imageDetail=data;        
        });
  }
    
  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }

  addClass(star) {
    console.log("star", star); 
    console.log("selectedvalue", this.selectedValue);
    let ab = "";
    for (let i = 0; i < star; i++) {
      console.log("star i", star);
      ab = "starId" + i;
      document.getElementById(ab).classList.add("selected");
    }
 }

 removeClass(star) {
  console.log("removestar", star);
  let ab = "";
 for (let i = star-1; i >= this.selectedValue; i--) {
    console.log("star i", star);
    ab = "starId" + i;
    document.getElementById(ab).classList.remove("selected");
  }
}
  
  onSubmit(){    
      
    this.router.navigate(['/']);
  
   for(let i = 0; i< this.flickrService.urlArr.length; i++){
     
      if(this.flickrService.urlArr[i].id==this.imageDetail.id){
          // this.flickrService.urlArr[i].rating = this.rating;
          this.flickrService.urlArr[i].rating =this.ratingForm.controls['rating'].value;
        }
     }
  }
}
