package com.capstone.profilePictureApp.service;

import com.capstone.profilePictureApp.model.ProfilePicture;

public interface ProfileService {
    public ProfilePicture addProfilePicture(ProfilePicture profilePicture);
    public ProfilePicture getProfileByEmailId(String emailId);
}
