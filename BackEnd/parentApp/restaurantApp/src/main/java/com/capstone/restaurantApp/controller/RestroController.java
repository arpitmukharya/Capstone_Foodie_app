package com.capstone.restaurantApp.controller;

import com.capstone.restaurantApp.model.Menu;
import com.capstone.restaurantApp.model.Restro;
import com.capstone.restaurantApp.service.RestroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/foodie-app/restaurant-app/v1")
public class RestroController {
    @Autowired
    private RestroService restroService;


    //http://localhost:3333/foodie-app/restaurant-app/v1/add-restaurant  [POST]
    @PostMapping("/add-restaurant")
    public ResponseEntity<?> addRestro(@RequestBody Restro restro){
        return new ResponseEntity<>(restroService.addRestro(restro), HttpStatus.OK);
    }


    //http://localhost:3333/foodie-app/restaurant-app/v1/get-all-restaurants  [GET]
    @GetMapping("/get-all-restaurants")
    public ResponseEntity<?> getAllRestro(){
        return new ResponseEntity<>(restroService.getAllRestro(),HttpStatus.OK);
    }

    //http://localhost:3333/foodie-app/restaurant-app/v1/get-restaurant-by-emailid/{emailId}  [GET]
    @GetMapping("/get-restaurant-by-emailid/{emailId}")
    public ResponseEntity<?> getRestroById(@PathVariable String emailId){
        return new ResponseEntity<>(restroService.getRestroByEmailId(emailId),HttpStatus.OK);
    }

    //http://localhost:3333/foodie-app/restaurant-app/v1/delete-restaurant-by-gstno/{gstNo}  [DELETE]
    @DeleteMapping("/delete-restaurant-by-gstno/{gstNo}")
    public ResponseEntity<?> deleteRestroByGstNo(@PathVariable String gstNo){
        return new ResponseEntity<>(restroService.deleteRestroByGstNo(gstNo),HttpStatus.OK);
    }

    //http://localhost:3333/foodie-app/restaurant-app/v1/get-restaurant-by-address/{address}   [GET]
    @GetMapping("/get-restaurant-by-address/{address}")
    public ResponseEntity<?> getRestroByAddress(@PathVariable String address){
        return new ResponseEntity<>(restroService.getRestroByAddress(address),HttpStatus.OK);
    }

    //http://localhost:3333/foodie-app/restaurant-app/v1/get-retaurant-by-gst-no/{gstNo}   [GET]
    @GetMapping("/get-retaurant-by-gst-no/{gstNo}")
    public ResponseEntity<?>getRestroByGstNo(@PathVariable String gstNo){
        return new ResponseEntity<>(restroService.getRestroByGstNo(gstNo),HttpStatus.OK);
    }

    // http://localhost:3333/foodie-app/restaurant-app/v1/add-menu-list-to-restaurant/{gstNo}  [PUT]
    @PutMapping("/add-menu-list-to-restaurant/{gstNo}")
    public ResponseEntity<?> addMenuListToRestro(@PathVariable String gstNo, @RequestBody Menu menu){
        return new ResponseEntity<>(restroService.addMenuListToRestro(gstNo,menu),HttpStatus.OK);
    }

    //  http://localhost:3333/foodie-app/restaurant-app/v1/get-menu-list-by-gst-no/{gstNo}   [GET]
    @GetMapping("/get-menu-list-by-gst-no/{gstNo}")
    public ResponseEntity<?> getMenuListByGstNo(@PathVariable String gstNo){
        return new ResponseEntity<>(restroService.getMenuListByGstNo(gstNo),HttpStatus.OK);
    }

    //  http://localhost:3333/foodie-app/restaurant-app/v1/delete-menu-item-by-itemname/{gstNo}/{itemName}  [DELETE]
    @DeleteMapping("/delete-menu-item-by-itemname/{gstNo}/{itemName}")
    public ResponseEntity<?> deleteMenuItemByName(@PathVariable String gstNo,@PathVariable String itemName){
        return new ResponseEntity<>(restroService.deleteMenuItemByName(gstNo,itemName),HttpStatus.OK);
    }

    // http://localhost:3333/foodie-app/restaurant-app/v1/get-menu-list-by-category/{gstNo}/{category}  [GET]
    @GetMapping("/get-menu-list-by-category/{gstNo}/{category}")
    public ResponseEntity<?> getMenuListByCategory(@PathVariable String gstNo, @PathVariable String category){
        return new ResponseEntity<>(restroService.getMenuListByCategory(gstNo,category),HttpStatus.OK);
    }

}
