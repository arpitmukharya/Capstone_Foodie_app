package com.capstone.userAuthApp.service;

import com.capstone.userAuthApp.model.UserAuth;

public interface UserAuthService {
    public UserAuth addUser(UserAuth userAuth);
    public UserAuth loginCheck(String emailId,String password);
}
