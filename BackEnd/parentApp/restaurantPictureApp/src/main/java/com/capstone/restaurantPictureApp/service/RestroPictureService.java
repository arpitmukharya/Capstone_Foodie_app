package com.capstone.restaurantPictureApp.service;

import com.capstone.restaurantPictureApp.model.RestroPicture;

import java.util.List;

public interface RestroPictureService {
    public RestroPicture addRestroProfilePicture(RestroPicture restroPicture);
    public List<RestroPicture> getAllRestroPicture();
    public RestroPicture getRestroProfileByGstNo(String gstNo);
}
