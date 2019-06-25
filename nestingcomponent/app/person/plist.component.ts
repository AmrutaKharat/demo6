import { Component } from '@angular/core';
import { checkAndUpdateDirectiveDynamic } from '@angular/core/src/view/provider';
@Component({
     selector:"plist",
     templateUrl:'./plist.component.html',
     styleUrls:['./plist.component.css']

})
export class PlistComponent{
    per={perid:0,pname:'',address:''};
    
    perarr=[
        {perid:1111,pname:"kishori",address:"aundh"},
        {perid:2222,pname:"Revati",address:"Baner"},
        {perid:1111,pname:"Ashwini",address:"Kothrud"},
        {perid:1111,pname:"Tushar",address:"Sangavi"}
      ]

      addData(){
         this.perarr.push(this.per);

      }

}