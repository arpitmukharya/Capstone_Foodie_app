import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { checkEmail } from '../checkEmail';
import { checkPhNo } from '../checkPhNo';
import { EmailService } from '../email.service';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupservice:SignupService,private emailService:EmailService,private route:Router,private snackbar:MatSnackBar) { }

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

  allDt:any;
  complete=this.commonUser.value;

  mail:any;
 
  durationInSeconds=5;
  register(){
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

    this.mail={
      "recipient":this.commonUser.value.emailId,
      "msgBody":"UserName: "+this.commonUser.value.userName+"\n "+"Registered email-Id: "+this.commonUser.value.emailId+"\n "+"Password: "+this.commonUser.value.password,
      "subject":"Welcome to Foodie App \n Feed the hunger with us!! as our precious "+this.commonUser.value.role
    }

    this.signupservice.registerUser(this.allDt).subscribe(
      resp=>{
        this.snackbar.open('Sign Up Success','Close',{
          duration: this.durationInSeconds * 1000,
         
        });
        this.route.navigateByUrl("/login");
        console.log(resp);
        this.emailSend();
        this.upload();
       
      }
    )
  }
  emailSend(){
    this.emailService.sendMail(this.mail).subscribe(
      resp=>{
        this.snackbar.open('Credentials Sent On E-mail','Close',{
          duration: this.durationInSeconds * 1000,
         
        });
      }
    )
  }


  
  firstNameValue:string="";
  lastNameValue:string="";
  emailValue:string="";
  passwordValue:string="";
  userNameValue:string="";
  mobileNoValue:number;
  addressValue:string="";
  roleValue:any;

  
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

 


upload(){
  const uploadData = new FormData();
uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
this.signupservice.addProfilePicture(uploadData).subscribe(
  res=>{
    console.log("successfully uploaded");
  },fail=>{
    alert("try again uploading")
  }
)
}
////////////////////////////////////////////////////////////////////////
 // This part is for uploading
//  onUpload() {
//   const uploadData = new FormData();
//   uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
//   this.httpClient.post('http://localhost:8080/check/upload',uploadData)
//   .subscribe(
//                res => {console.log(res);
//                        this.receivedImageData = res;
//                        this.base64Data = this.receivedImageData.picSize;//this to be get from the backend
//                        this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
//                err => console.log('Error Occured during saving: ' + err)
//             );
//  }













}
