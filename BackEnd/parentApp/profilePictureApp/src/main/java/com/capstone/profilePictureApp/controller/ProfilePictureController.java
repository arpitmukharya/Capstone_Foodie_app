package com.capstone.profilePictureApp.controller;

import com.capstone.profilePictureApp.model.ProfilePicture;
import com.capstone.profilePictureApp.rabbitmq.Consumer;
import com.capstone.profilePictureApp.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/foodie-app/profile-picture-app/v1")
public class ProfilePictureController {

    @Autowired
    private Consumer consumer;
    @Autowired
    private ProfileService profileService;

// http://localhost:7777/foodie-app/profile-picture-app/v1/add-profile-picture   [POST]
    @PostMapping("/add-profile-picture")
    public ResponseEntity<?> addProfilePicture(@RequestParam("myFile") MultipartFile file) throws IOException {
        ProfilePicture profilePicture=new ProfilePicture();
        profilePicture.setName(file.getName());
        profilePicture.setType(file.getContentType());
        profilePicture.setPic(file.getBytes());
        return new ResponseEntity<>(consumer.addProfile(profilePicture), HttpStatus.OK);
    }

    // http://localhost:7777/foodie-app/profile-picture-app/v1/get-profile-picture-by-emailid/{emailId}  [GET]
    @GetMapping("/get-profile-picture-by-emailid/{emailId}")
    public ResponseEntity<?> getProfilePicByEmailId(@PathVariable String emailId){
        return new ResponseEntity<>(profileService.getProfileByEmailId(emailId),HttpStatus.OK);
    }
}
