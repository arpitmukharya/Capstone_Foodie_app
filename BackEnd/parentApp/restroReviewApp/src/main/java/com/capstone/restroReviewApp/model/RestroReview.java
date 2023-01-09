package com.capstone.restroReviewApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class RestroReview {
    @Id
    @GeneratedValue
    private int reviewId;
    private String userEmailId,review,gstNo;
    private int star;
}
