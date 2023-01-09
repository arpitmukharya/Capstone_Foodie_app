package com.capstone.restroReviewApp.service;

import com.capstone.restroReviewApp.model.RestroReview;

import java.util.List;

public interface RestroReviewService {
    public RestroReview addReviewByEmailId(RestroReview restroReview);

    public List<RestroReview> getReviewByGstNo(String gstNo);
    public List<RestroReview> getReviewByEmailID(String emailId);
    public List<RestroReview> getAllReview();
}
