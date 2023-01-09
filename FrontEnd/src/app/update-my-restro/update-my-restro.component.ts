import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AllRestaurantsService } from '../all-restaurants.service';
import { checkEmail } from '../checkEmail';
import { checkPhNo } from '../checkPhNo';
import { SignupService } from '../signup.service';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-update-my-restro',
  templateUrl: './update-my-restro.component.html',
  styleUrls: ['./update-my-restro.component.css']
})
export class UpdateMyRestroComponent implements OnInit {

  constructor(private vendorService:VendorService,private signUpservice:SignupService,private allRestroservice:AllRestaurantsService,private snackbar:MatSnackBar) { 
    this.selectedRestro();
  }

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
      this.restro.reset();
      this.snackbar.open('Restaurant Data Updated','Close',{
        duration: this.durationInSeconds * 1000,       
      });
      this.upload();
      console.log(rsp)
      
      
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
    alert("try again uploading")
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
  console.log(this.items)
}

myRestroData:any;
vendorgstNo:any;
selectedRestro(){
  this.vendorgstNo=this.vendorService.vendorGstNo;
  this.allRestroservice.getRestroByGstNo(this.vendorgstNo).subscribe(
    resp=>{
      this.myRestroData=resp;
      console.log(this.myRestroData);
    }
  )
}
allMenuItem:any;
updatebtn(){
  this.restro.patchValue(
    {
      restroName:this.myRestroData.restroName,
    emailId:this.myRestroData.emailId,
    gstNo:this.myRestroData.gstNo,
    restroAddress:this.myRestroData.restroAddress,
    openTime:this.myRestroData.openTime,
    closeTime:this.myRestroData.closeTime,
    cuisine:this.myRestroData.cuisine,
    restroPhone:this.myRestroData.restroPhone
      })
      this.allMenuItem=this.myRestroData.menuList;
     }
  
     
     deleteMenu(itemName:any){
      this.vendorService.deleteMenuItem(this.myRestroData.gstNo,itemName).subscribe(
        resp=>{
          console.log(resp);
          alert("Item Deleted");
        }
      )

     }

 }

