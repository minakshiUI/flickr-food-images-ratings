export interface FlickrPhoto{
    farm:string;
    id:string;
    secret:string;
    server:string;
    title:string;
    photos:{
      photo:FlickrPhoto[];
    };
    rating: any;
  }