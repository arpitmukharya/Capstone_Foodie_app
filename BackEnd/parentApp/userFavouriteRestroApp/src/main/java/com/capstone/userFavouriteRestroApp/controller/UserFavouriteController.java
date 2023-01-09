package com.capstone.userFavouriteRestroApp.controller;

import com.capstone.userFavouriteRestroApp.model.Restro;
import com.capstone.userFavouriteRestroApp.model.UserFavourite;
import com.capstone.userFavouriteRestroApp.service.UserFavouriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/foodie-app/user-favourite-restaurant-app/v1")
public class UserFavouriteController {
    @Autowired
    private UserFavouriteService userFavouriteService;

//    // http://localhost:4444/foodie-app/user-favourite-restaurant-app/v1/add-favourite-restaurant [POST]
//    @PostMapping("/add-favourite-restaurant")
//    public ResponseEntity<?> addFavRestro(@RequestBody UserFavourite userFavourite){
//        return new ResponseEntity<>(userFavouriteService.addFavRestro(userFavourite), HttpStatus.OK);
//    }

    // http://localhost:4444/foodie-app/user-favourite-restaurant-app/v1/get-favourite-restaurant-by-emailid/{emailId} [GET]
    @GetMapping("/get-favourite-restaurant-by-emailid/{emailId}")
    public ResponseEntity<?> getRestroByEmailId(@PathVariable String emailId){
        return new ResponseEntity<>(userFavouriteService.getFavRestroByEmailId(emailId),HttpStatus.OK);
    }

  //  http://localhost:4444/foodie-app/user-favourite-restaurant-app/v1/add-favourite-restaurant-to-user/{emailId}  [PUT]
    @PutMapping("/add-favourite-restaurant-to-user/{emailId}")
    public ResponseEntity<?> addFavRestroToUser(@PathVariable String emailId, @RequestBody Restro restro){
        return new ResponseEntity<>(userFavouriteService.updateUserFavouriteRestros(emailId,restro),HttpStatus.OK);
    }

  //  http://localhost:4444/foodie-app/user-favourite-restaurant-app/v1/delete-favourite-restaurant-by-emailId/{emailId}/{gstNo}
    @DeleteMapping("/delete-favourite-restaurant-by-emailId/{emailId}/{gstNo}")
    public ResponseEntity<?> deleteRestroByEmailId(@PathVariable String emailId,@PathVariable String gstNo){
        return new ResponseEntity<>(userFavouriteService.deleteFavRestroByGstNo(emailId,gstNo),HttpStatus.OK);
    }

}
