package com.capstone.userAuthApp.controller;

import com.capstone.userAuthApp.model.UserAuth;
import com.capstone.userAuthApp.service.SecurityTokenGenerator;
import com.capstone.userAuthApp.service.UserAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/foodie-app/user-auth-app/v1")
public class UserAuthController {
    @Autowired
    private UserAuthService userAuthService;

    @Autowired
    private SecurityTokenGenerator securityTokenGenerator;


    // http://localhost:2221/foodie-app/user-auth-app/v1/register  [POST]
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserAuth userAuth) {
        return new ResponseEntity<>(userAuthService.addUser(userAuth), HttpStatus.OK);
    }



    //    http://localhost:2221/foodie-app/user-auth-app/v1/authenticate  [POST]
    @PostMapping("/authenticate")
    public ResponseEntity<?> loginCheck(@RequestBody UserAuth userAuth) {
        UserAuth result = userAuthService.loginCheck(userAuth.getEmailId(), userAuth.getPassword());
        if (result != null) {
            //authentication success
            //get jwt from jwt service method
            //by passing result object
            Map<String,String> key=securityTokenGenerator.generateToken(result);
            return new ResponseEntity<>(key,HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Authentication failed", HttpStatus.NOT_FOUND);
        }
    }
}
