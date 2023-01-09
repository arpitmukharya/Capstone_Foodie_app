package com.capstone.restroReviewApp;

import com.capstone.restroReviewApp.model.RestroReview;
import com.capstone.restroReviewApp.repository.RestroReviewRepository;
import com.capstone.restroReviewApp.service.RestroReviewServiceImpl;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class RestroReviewServiceTest {
    @Mock
    private RestroReviewRepository restroReviewRepository;
    @InjectMocks
    private RestroReviewServiceImpl restroReviewService;
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

    }

    @Test
    public void addReviewSuccess(){
        when(restroReviewRepository.save(restroReview)).thenReturn(restroReview);
        assertEquals(restroReview,restroReviewService.addReview(restroReview));
        verify(restroReviewRepository,times(1)).save(restroReview);
    }


    @Test
    public void getReviewByEmailIdSuccess(){
        when(restroReviewRepository.findByUserEmailId(restroReview.getUserEmailId())).thenReturn(List.of(restroReview));
        assertEquals(List.of(restroReview),restroReviewService.getReviewByEmailID(restroReview.getUserEmailId()));
        verify(restroReviewRepository,times(1)).findByUserEmailId(restroReview.getUserEmailId());
    }

}
