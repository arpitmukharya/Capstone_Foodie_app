package com.example.emailService.controller;

import com.example.emailService.model.EmailDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/foodie-app/email-service-app/v1")
public class EmailController {
    @Autowired
    JavaMailSender javaMailSender;

// http://localhost:9999/foodie-app/email-service-app/v1/sendmail  [POST]
    @PostMapping("/sendmail")
    public ResponseEntity<Object> sendEmail(@RequestBody EmailDetails emailDetails){
        SimpleMailMessage sm=new SimpleMailMessage();
        sm.setFrom("foodie.app.1212@gmail.com");
        sm.setTo(emailDetails.getRecipient());
        sm.setSubject(emailDetails.getSubject());
        sm.setText(emailDetails.getMsgBody());
        javaMailSender.send(sm);
        return generateResponse("email send to mail "+emailDetails.getRecipient(),HttpStatus.OK,emailDetails);
    }
    public ResponseEntity<Object> generateResponse(String msg, HttpStatus st,Object response){
        Map<String,Object> mp=new HashMap<String,Object>();
        mp.put("message",msg);
        mp.put("status",st.value());
        mp.put("data",response);
        return new ResponseEntity<Object>(mp,st);
    }
}
