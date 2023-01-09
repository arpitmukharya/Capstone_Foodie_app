package com.capstone.restroReviewApp.repository;

import com.capstone.restroReviewApp.model.RestroReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RestroReviewRepository extends JpaRepository<RestroReview,Integer> {
    @Query("select r from RestroReview r where r.gstNo=?1")
    public List<RestroReview> getReviewByGstNo(String gstNo);

    public List<RestroReview> findByUserEmailId(String emailId);

}
