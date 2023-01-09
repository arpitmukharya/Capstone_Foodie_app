package com.capstone.profilePictureApp.service;

import com.capstone.profilePictureApp.model.ProfilePicture;
import com.capstone.profilePictureApp.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileServiceImpl implements ProfileService {

    @Autowired
    private ProfileRepository profileRepository;
    @Override
    public ProfilePicture addProfilePicture(ProfilePicture profilePicture) {
        return profileRepository.save(profilePicture);
    }

    @Override
    public ProfilePicture getProfileByEmailId(String emailId) {
        return profileRepository.findById(emailId).get();
    }
}
