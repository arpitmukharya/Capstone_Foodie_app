package com.capstone.profilePictureApp.repository;

import com.capstone.profilePictureApp.model.ProfilePicture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<ProfilePicture,String> {
}
