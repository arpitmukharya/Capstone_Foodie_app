package com.capstone.restaurantPictureApp.rabbitmq;


import com.capstone.restaurantPictureApp.model.RestroPicture;
import com.capstone.restaurantPictureApp.service.RestroPictureService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
    @Autowired
    private RestroPictureService restroPictureService;

     public String gstNo;
    @RabbitListener(queues = "user_queue1")
    public void getDtoFromQueueAndAddToDB(RestroProfileDTO restroProfileDTO){
        //userDTO:emailId+password
        //build auth user object
        //send auth user object to service.addUSer();
        gstNo= restroProfileDTO.getGstNo();
        System.out.println("recieved "+gstNo);

    }

    public RestroPicture addRestroProfilePicture(RestroPicture restroPicture){
        restroPicture.setGstNo(gstNo);
        return restroPictureService.addRestroProfilePicture(restroPicture);
    }

}
