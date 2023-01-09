package com.capstone.restroReviewApp.controller;

import com.capstone.restroReviewApp.model.RestroReview;
import com.capstone.restroReviewApp.service.RestroReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/foodie-app/restro-review-app/v1")
public class RestroReviewController {

    @Autowired
    private RestroReviewService restroReviewService;

    // http://localhost:6666/foodie-app/restro-review-app/v1/add-review-by-email-id [POST]
    @PostMapping("/add-review-by-email-id")
    public ResponseEntity<?> addReviewByEmailId(@RequestBody RestroReview restroReview){
        return new ResponseEntity<>(restroReviewService.addReviewByEmailId(restroReview), HttpStatus.OK);
    }


   // http://localhost:6666/foodie-app/restro-review-app/v1/get-review-by-gstno/{gstNo}  [GET]
    @GetMapping("/get-review-by-gstno/{gstNo}")
    public ResponseEntity<?> getReviewByGstNo(@PathVariable String gstNo){
        return new ResponseEntity<>(restroReviewService.getReviewByGstNo(gstNo),HttpStatus.OK);
            }

   // http://localhost:6666/foodie-app/restro-review-app/v1/get-review-by-emailid/{emailId}  [GET]
    @GetMapping("/get-review-by-emailid/{emailId}")
    public ResponseEntity<?> getReviewByEmailId(@PathVariable String emailId) {
        return new ResponseEntity<>(restroReviewService.getReviewByEmailID(emailId), HttpStatus.OK);
    }

    // http://localhost:6666/foodie-app/restro-review-app/v1/get-all-reviews  [GET]
    @GetMapping("/get-all-reviews")
    public ResponseEntity<?> getAllReviews(){
        return new ResponseEntity<>(restroReviewService.getAllReview(),HttpStatus.OK);
    }
}
