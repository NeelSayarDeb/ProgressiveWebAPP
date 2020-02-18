import { Component, OnInit } from  '@angular/core';
import { SwUpdate } from  '@angular/service-worker';
import { DataService, Item } from  './services/data.service';

@Component({
selector:  'app-root',
templateUrl:  './app.component.html',
styleUrls: ['./app.component.css']
})
export  class  AppComponent  implements  OnInit{
title  =  'pwademo';
items:  Array<Item>;
updateAvl = false;

constructor(
    private updates: SwUpdate,
    private  apiService:  DataService){
      this.updates.available.subscribe(event => {
        this.updateAvl = true;
      })
}
ngOnInit(){
this.fetchData();
}
fetchData(){
this.apiService.fetch().subscribe((data:  Array<Item>)=>{
console.log(data);
this.items  =  data;
}, (err)=>{
console.log(err);
});
}
}
