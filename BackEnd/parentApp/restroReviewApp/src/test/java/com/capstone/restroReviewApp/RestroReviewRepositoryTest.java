package com.capstone.restroReviewApp;

import com.capstone.restroReviewApp.model.RestroReview;
import com.capstone.restroReviewApp.repository.RestroReviewRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class RestroReviewRepositoryTest {
    @Autowired
    private RestroReviewRepository restroReviewRepository;

    private RestroReview restroReview;

    @BeforeEach
    public void setup(){
        restroReview=new RestroReview();
        restroReview.setUserEmailId("arpit@gmail.com");
        restroReview.setReview("Good");
        restroReview.setGstNo("CS12SDV");
        restroReview.setStar(4);
    }

    @AfterEach
    public void clean(){
        restroReview=null;
        restroReviewRepository.deleteAll();
    }

    @Test
    public void getAllReviews(){
        restroReviewRepository.save(restroReview);
        List<RestroReview> restroReviewList=restroReviewRepository.findAll();
        assertEquals(1,restroReviewList.size());
    }

    @Test
    public void givenRestroReviewDetailsReturnRestroReview(){
        restroReviewRepository.save(restroReview);
        List<RestroReview> restroReview1=restroReviewRepository.findByUserEmailId(restroReview.getUserEmailId());
        assertEquals(restroReview1.get(0),restroReview);
    }

}

