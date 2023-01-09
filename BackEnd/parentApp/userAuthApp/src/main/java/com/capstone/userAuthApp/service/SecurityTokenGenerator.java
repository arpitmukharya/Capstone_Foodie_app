package com.capstone.userAuthApp.service;

import com.capstone.userAuthApp.model.UserAuth;

import java.util.Map;

public interface SecurityTokenGenerator {
    public Map<String,String> generateToken(UserAuth userAuth);
}
