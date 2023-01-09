package com.capstone.userFavouriteRestroApp.service;

import com.capstone.userFavouriteRestroApp.model.Restro;
import com.capstone.userFavouriteRestroApp.model.UserFavourite;
import com.capstone.userFavouriteRestroApp.repository.UserFavouriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserFavouriteServiceImpl implements UserFavouriteService {

    @Autowired
    private UserFavouriteRepository userFavouriteRepository;

//    @Override
//    public UserFavourite addFavRestro(UserFavourite userFavourite) {
//        userFavourite.setRestroList(new ArrayList<>());
//        return userFavouriteRepository.insert(userFavourite);
//    }

    @Override
    public List<Restro> getFavRestroByEmailId(String emailId) {

        return userFavouriteRepository.findById(emailId).get().getRestroList();
    }

    @Override
    public UserFavourite updateUserFavouriteRestros(String emailId, Restro restro) {
        if (userFavouriteRepository.findById(emailId).isPresent()) {
            UserFavourite userFavourite = userFavouriteRepository.findById(emailId).get();
            List<Restro> existingList= userFavourite.getRestroList();
            for (int i=0;i<existingList.size();i++){
                if (restro.getGstNo().equals(existingList.get(i).getGstNo())){
                    return null;
                }
            }
            existingList.add(restro);
            return userFavouriteRepository.save(userFavourite);
        }else {
            List<Restro> restroList=new ArrayList<>();
            restroList.add(restro);
            UserFavourite userFavourite=new UserFavourite(emailId,restroList);
            return userFavouriteRepository.insert(userFavourite);
        }
    }

    @Override
    public boolean deleteFavRestroByGstNo(String emailId, String gstNo) {
        UserFavourite userFavourite=userFavouriteRepository.findById(emailId).get();
        List<Restro> restroList=userFavourite.getRestroList();

        for (int i=0;i<restroList.size();i++){
            if (gstNo.equals(restroList.get(i).getGstNo())){
                restroList.remove(i);
            }

        }
        userFavouriteRepository.save(userFavourite);
        return true;
    }
}
