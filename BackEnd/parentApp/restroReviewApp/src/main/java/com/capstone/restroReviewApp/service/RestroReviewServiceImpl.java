package com.capstone.restroReviewApp.service;

import com.capstone.restroReviewApp.model.RestroReview;
import com.capstone.restroReviewApp.repository.RestroReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RestroReviewServiceImpl implements RestroReviewService{
    @Autowired
    private RestroReviewRepository restroReviewRepository;

    @Override
    public RestroReview addReviewByEmailId(RestroReview restroReview) {
        return restroReviewRepository.save(restroReview);
    }

    @Override
    public List<RestroReview> getReviewByGstNo(String gstNo) {

//        List<RestroReview> allReviewList=restroReviewRepository.findAll();
//        List<RestroReview> result=new ArrayList<>();
//        for (int i=0;i<allReviewList.size();i++){
//
//        }
        return restroReviewRepository.getReviewByGstNo(gstNo);
    }

    @Override
    public List<RestroReview> getReviewByEmailID(String emailId) {
        return restroReviewRepository.findByUserEmailId(emailId);
    }

    @Override
    public List<RestroReview> getAllReview() {
        return restroReviewRepository.findAll();
    }
}
