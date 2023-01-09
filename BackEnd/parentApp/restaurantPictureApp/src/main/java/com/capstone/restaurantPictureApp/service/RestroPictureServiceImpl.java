package com.capstone.restaurantPictureApp.service;

import com.capstone.restaurantPictureApp.model.RestroPicture;
import com.capstone.restaurantPictureApp.repository.RestroPictureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestroPictureServiceImpl implements RestroPictureService {

    @Autowired
    private RestroPictureRepository restroPictureRepository;

    @Override
    public RestroPicture addRestroProfilePicture(RestroPicture restroPicture) {
        return restroPictureRepository.save(restroPicture);
    }

    @Override
    public List<RestroPicture> getAllRestroPicture() {
        return restroPictureRepository.findAll();
    }

    @Override
    public RestroPicture getRestroProfileByGstNo(String gstNo) {
        return restroPictureRepository.findById(gstNo).get();
    }
}
