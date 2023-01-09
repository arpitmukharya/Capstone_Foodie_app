package com.capstone.user.service;

import com.capstone.user.model.Address;
import com.capstone.user.model.CommonUser;

import java.util.List;

public interface UserService {
    public CommonUser addUser(CommonUser commonUser);
    public CommonUser getUserByEmailId(String emailId);
    public  CommonUser addAddressToUser(String emailId, Address address);
    public List<CommonUser> getAllUser();
}
