import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { checkEmail } from '../checkEmail';
import { checkPhNo } from '../checkPhNo';
import { JwtService } from '../jwt.service';
import { SignupService } from '../signup.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private userService:UserService,private jwtService:JwtService,private signupservice:SignupService,private snackbar:MatSnackBar) {
    this.getUserData();
   }

  ngOnInit(): void {
  }

   commonUser=new FormGroup({
    emailId:new FormControl('',[Validators.required,checkEmail()]),
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    userName:new FormControl('',[Validators.required]),
    role:new FormControl('',[Validators.required]),
    mobileNo:new FormControl('',[Validators.required,checkPhNo()]),
    addressList:new FormGroup({
      address:new FormControl('')
    })  
  })

  get firstName(){
    return this.commonUser.get("firstName");
  }
  get lastName(){
    return this.commonUser.get("lastName");
  }
  get emailId(){
    return this.commonUser.get("emailId");
  }
  get password(){
    return this.commonUser.get("password");
  }
  get userName(){
    return this.commonUser.get("userName");
  }
  get mobileNo(){
    return this.commonUser.get("mobileNo");
  }
  get address(){
    return this.commonUser.get("addressList").get("address");
  }
  get role(){
    return this.commonUser.get("role");
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

 newAddress=new FormGroup({
  newaddress1:new FormControl('',[Validators.required]),
 
})

get newaddress1(){
  return this.newAddress.get("newaddress1");
}

responseData:any;
allDt:any;
durationInSeconds=5;
 update(){
  this.allDt={
    "emailId":this.commonUser.value.emailId,
    "firstName":this.commonUser.value.firstName,
    "lastName":this.commonUser.value.lastName,
    "password":this.commonUser.value.password,
    "userName":this.commonUser.value.userName,
    "role":this.commonUser.value.role,
    "mobileNo":this.commonUser.value.mobileNo,
    "addressList":[
      {
        "address":this.commonUser.value.addressList.address
      }
    ]
  }
  this.userService.updateUserData(this.allDt).subscribe(
    resp=>{
      this.upload();
      this.responseData=resp;
      console.log(this.responseData);
      this.snackbar.open('Profile Updated','Close',{
        duration: this.durationInSeconds * 1000,       
      });
      this.commonUser.reset();
     }
  )
 }
 addressObj:any;
 addAddress(){

this.addressObj={
  address:this.newAddress.value.newaddress1
}
console.log(this.addressObj);
this.userService.addAddressToUser(this.emailID,this.addressObj).subscribe(
  resp=>{
    console.log(resp);
    this.snackbar.open('Address Added','Close',{
      duration: this.durationInSeconds * 1000,       
    });
  }
)
 }

 updatebtn(){
  this.commonUser.patchValue(
    {
      emailId:this.userObj.emailId,
      firstName:this.userObj.firstName,
      lastName:this.userObj.lastName,
      password:this.userObj.password,
      userName:this.userObj.userName,
      role:this.userObj.role,
      mobileNo:this.userObj.mobileNo,
      addressList:{
        address:this.userObj.addressList[0].address
      }
     }
  )
  
 }

 upload(){
  const uploadData = new FormData();
uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
this.signupservice.addProfilePicture(uploadData).subscribe(
  res=>{
    console.log("successfully uploaded");
  },fail=>{
    console.log("try again uploading")
  }
)
}


  token:any;
  emailID:any;
  tokendata:any;
  userObj:any;

  getUserData(){
  this.token=localStorage.getItem('jwt');
  this.tokendata=this.jwtService.DecodeToken(this.token);
  console.log(this.tokendata);
  this.emailID=this.tokendata.userObject.emailId;
  console.log(this.emailID);

  this.userService.getUserByEmailId(this.emailID).subscribe(
    resp=>{
      this.userObj=resp;
      console.log(this.userObj);
    }
  )
 }


}
