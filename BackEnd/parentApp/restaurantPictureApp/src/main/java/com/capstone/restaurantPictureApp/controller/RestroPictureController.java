package com.capstone.restaurantPictureApp.controller;

import com.capstone.restaurantPictureApp.model.RestroPicture;
import com.capstone.restaurantPictureApp.rabbitmq.Consumer;
import com.capstone.restaurantPictureApp.service.RestroPictureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/foodie-app/restro-profile-picture-app/v1")
public class RestroPictureController {
    @Autowired
    private Consumer consumer;
    @Autowired
    private RestroPictureService restroPictureService;

    // http://localhost:8888/foodie-app/restro-profile-picture-app/v1/add-restro-profile-picture   [POST]
    @PostMapping("/add-restro-profile-picture")
    public ResponseEntity<?> addProfilePicture(@RequestParam("myFile") MultipartFile file) throws IOException {
        RestroPicture restroPicture=new RestroPicture();
        restroPicture.setRestroPicName(file.getName());
        restroPicture.setPicType(file.getContentType());
        restroPicture.setPicSize(file.getBytes());
        return new ResponseEntity<>(consumer.addRestroProfilePicture(restroPicture), HttpStatus.OK);
    }

    // http://localhost:8888/foodie-app/restro-profile-picture-app/v1/get-restro-profile-picture-by-gstno/{gstNo}   [GET]
    @GetMapping("/get-restro-profile-picture-by-gstno/{gstNo}")
    public ResponseEntity<?> getProfilePicByEmailId(@PathVariable String gstNo){
        return new ResponseEntity<>(restroPictureService.getRestroProfileByGstNo(gstNo),HttpStatus.OK);
    }

    // http://localhost:8888/foodie-app/restro-profile-picture-app/v1/get-all-restro-picture   [GET]
    @GetMapping("/get-all-restro-picture")
    public ResponseEntity<?>getAllRestroPictures(){
        return new ResponseEntity<>(restroPictureService.getAllRestroPicture(),HttpStatus.OK);
    }
}
