package com.capstone.userFavouriteRestroApp.service;

import com.capstone.userFavouriteRestroApp.model.Restro;
import com.capstone.userFavouriteRestroApp.model.UserFavourite;

import java.util.List;

public interface UserFavouriteService {
//    public UserFavourite addFavRestro(UserFavourite userFavourite);
    public List<Restro> getFavRestroByEmailId(String emailId);
    public UserFavourite updateUserFavouriteRestros(String emailId,Restro restro );
    public boolean deleteFavRestroByGstNo(String emailId,String gstNo);
}
