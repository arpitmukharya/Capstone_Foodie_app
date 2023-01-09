import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { checkEmail } from '../checkEmail';
import { checkPhNo } from '../checkPhNo';
import { SignupService } from '../signup.service';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {

  constructor(private vendorService:VendorService,private signUpservice:SignupService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }


  restro=new FormGroup({
    restroName:new FormControl('',[Validators.required,Validators.maxLength(100)]),
    emailId:new FormControl('',[Validators.required,checkEmail()]),
    gstNo:new FormControl('',[Validators.required]),
    restroAddress:new FormControl('',[Validators.required]),
    openTime:new FormControl('',[Validators.required]),
    closeTime:new FormControl('',[Validators.required]),
    cuisine:new FormControl('',[Validators.required]),
    restroPhone:new FormControl('',[Validators.required,checkPhNo()])
  });
 
  
get restroName(){
  return this.restro.get('restroName');
}

get emailId(){
  return this.restro.get('emailId');
}

get gstNo(){
  return this.restro.get('gstNo');
}

get restroAddress(){
  return this.restro.get('restroAddress');
}

get openTime(){
  return this.restro.get('openTime');
}

get closeTime(){
  return this.restro.get('closeTime');
}

get cuisine(){
  return this.restro.get('cuisine');
}

get restroPhone(){
  return this.restro.get('restroPhone');
}

// newRestro:Restuarant[]=[];
restroDataObj:any;
durationInSeconds=5;
addRestro(){
 this.restroDataObj={
  gstNo:this.restro.value.gstNo,
  emailId:this.restro.value.emailId,
  restroName:this.restro.value.restroName,
  restroAddress:this.restro.value.restroAddress,
  cuisine:this.restro.value.cuisine,
  openTime:this.restro.value.openTime,
  closeTime:this.restro.value.closeTime,
  restroPhone:this.restro.value.restroPhone,
  menuList:this.items
 }
  this.vendorService.addRestro(this.restroDataObj).subscribe(
    rsp=>{
      this.upload();
      console.log(rsp)
      this.snackbar.open('Your Resataurant Is Added Successfuly','Close',{
        duration: this.durationInSeconds * 1000,       
      });
      
      this.restro.reset();
    }
  )
  
}



selectedFile:any;
event1:any;
imgURL: any;
receivedImageData: any;
base64Data: any;
convertedImage: any;
public  onFileChanged(event:any) {
  console.log(event);
  this.selectedFile = event.target.files[0];
  // Below part is used to display the selected image
  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = (event2) => {
    this.imgURL = reader.result;
};
}

upload(){
  const uploadData = new FormData();
uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
this.signUpservice.addRestroProfilePicture(uploadData).subscribe(
  res=>{
    console.log("successfully uploaded");
  },fail=>{
    console.log("try again uploading")
  }
)
}

show:boolean=true
addDiv(){
this.show=false;
console.log(this.show)
}

menuList=new FormGroup({
  itemName:new FormControl('',[Validators.required]),
  itemCategory:new FormControl('',[Validators.required]),
  itemImageUrl:new FormControl('',[Validators.required]),
  itemDescription:new FormControl('',[Validators.required]),
  itemPrice:new FormControl('',[Validators.required])
});
get itemName(){
  return this.menuList.get('itemName');
}
get itemCategory(){
  return this.menuList.get('itemCategory');
}
get itemImageUrl(){
  return this.menuList.get('itemImageUrl');
}
get itemDescription(){
  return this.menuList.get('itemDescription');
}
get itemPrice(){
  return this.menuList.get('itemPrice');
}



items:any[]=[];
item:any;
addItem(){
  this.show=true;
  this.item={
    itemName:this.menuList.value.itemName,
    itemCategory:this.menuList.value.itemCategory,
    itemImageUrl:this.menuList.value.itemImageUrl,
    itemDescription:this.menuList.value.itemDescription,
    itemPrice:this.menuList.value.itemPrice
  }
  this.items.push(this.item);
  this.menuList.reset();
  console.log(this.items)
}

}
