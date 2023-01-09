package com.capstone.user.controller;

import com.capstone.user.model.Address;
import com.capstone.user.model.CommonUser;
import com.capstone.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/foodie-app/user-app/v1")
public class UserController {
    @Autowired
    private UserService userService;

    //  http://localhost:1111/foodie-app/user-app/v1/register-user  [POST]

    @PostMapping("/register-user")
    public ResponseEntity<?> addUser(@RequestBody CommonUser commonUser){
       // commonUser.setAddressList(new ArrayList<>());
        return new ResponseEntity<>(userService.addUser(commonUser), HttpStatus.OK);
    }

    //  http://localhost:1111/foodie-app/user-app/v1/get-user-data-by-emailid/{emailId}  [GET]
    @GetMapping("/get-user-data-by-emailid/{emailId}")
    public ResponseEntity<?> getUserByEmailId(@PathVariable String emailId){
        return new ResponseEntity<>(userService.getUserByEmailId(emailId),HttpStatus.OK);
    }

    //  http://localhost:1111/foodie-app/user-app/v1/add-address-to-user/{emailId}  [PUT]
    @PutMapping("/add-address-to-user/{emailId}")
    public ResponseEntity<?> addAddressToUser(@PathVariable String emailId, @RequestBody Address address){
        return new ResponseEntity<>(userService.addAddressToUser(emailId,address),HttpStatus.OK);
    }

    //    http://localhost:1111/foodie-app/user-app/v1/get-all-user  [GET]
    @GetMapping("/get-all-user")
    public ResponseEntity<?> getAllUser(){
        return new ResponseEntity<>(userService.getAllUser(),HttpStatus.OK);
    }

}
