import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpClient:HttpClient) { }

  baseUrlForEmail="http://localhost:1212/foodie-app/email-service-app/v1/sendmail";

  sendMail(mail:any){
    return this.httpClient.post(this.baseUrlForEmail,mail);
  }
}
