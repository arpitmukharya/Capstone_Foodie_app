package com.capstone.userAuthApp.service;

import com.capstone.userAuthApp.model.UserAuth;
import com.capstone.userAuthApp.repository.UserAuthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAuthServiceImpl implements UserAuthService{
    @Autowired
    private UserAuthRepository userAuthRepository;


    @Override
    public UserAuth addUser(UserAuth userAuth) {
        return userAuthRepository.save(userAuth);
    }

    @Override
    public UserAuth loginCheck(String emailId, String password) {
        //get user object by id
        //if found,check password in the result object
        //if password match:authentication success
        //return result user object
        if (userAuthRepository.findById(emailId).isPresent()){
            UserAuth result=userAuthRepository.findById(emailId).get();
            if (result.getPassword().equals(password)){

                result.setPassword("");
                return result;
            }else {
                return null;
            }
        }else {
            return null;
        }
    }
}
