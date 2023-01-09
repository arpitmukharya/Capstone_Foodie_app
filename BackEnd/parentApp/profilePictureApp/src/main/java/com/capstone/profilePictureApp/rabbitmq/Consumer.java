package com.capstone.profilePictureApp.rabbitmq;

import com.capstone.profilePictureApp.model.ProfilePicture;
import com.capstone.profilePictureApp.service.ProfileService;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
    @Autowired
    private ProfileService profileService;

     public String emailId;
    @RabbitListener(queues = "user_queue")
    public void getDtoFromQueueAndAddToDB(ProfileDTO profileDTO){
        //userDTO:emailId+password
        //build auth user object
        //send auth user object to service.addUSer();
        emailId=profileDTO.getEmailId();
        System.out.println("recieved "+emailId);

    }

    public ProfilePicture addProfile(ProfilePicture profilePicture){
        profilePicture.setEmailId(emailId);
        return profileService.addProfilePicture(profilePicture);
    }

}
