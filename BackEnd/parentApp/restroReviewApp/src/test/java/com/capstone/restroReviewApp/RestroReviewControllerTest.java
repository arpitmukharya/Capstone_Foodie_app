package com.capstone.restroReviewApp;

import com.capstone.restroReviewApp.controller.RestroReviewController;
import com.capstone.restroReviewApp.model.RestroReview;
import com.capstone.restroReviewApp.rabbitmq.Consumer;
import com.capstone.restroReviewApp.service.RestroReviewService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class RestroReviewControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Mock
    private Consumer consumer;
    @InjectMocks
    private RestroReviewController restroReviewController;
    private RestroReview restroReview;

    @BeforeEach
    public void setup(){
        restroReview=new RestroReview();
        restroReview.setUserEmailId("arpit@gmail.com");
        restroReview.setReview("Good");
        restroReview.setGstNo("CS12SDV");
        restroReview.setStar(4);
        mockMvc= MockMvcBuilders.standaloneSetup(restroReviewController).build();
    }

    @AfterEach
    public void clean(){
        restroReview=null;

    }

    @Test
    public void addReviewSuccess() throws Exception {
        when(consumer.addReview(restroReview)).thenReturn(restroReview);
        mockMvc.perform(
                post("/foodie-app/restro-review-app/v1/add-review")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(convertToJson(restroReview)))
                        .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
        verify(consumer,times(1)).addReview(restroReview);

    }
    private static String convertToJson(final Object obj){
        String result="";
        try{
            ObjectMapper mapper=new ObjectMapper();
            result = mapper.writeValueAsString(obj);
        }catch (Exception ex){
            ex.printStackTrace();
        }
        return result;
    }
}
