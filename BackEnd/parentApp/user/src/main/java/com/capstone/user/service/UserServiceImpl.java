package com.capstone.user.service;

import com.capstone.user.dto.UserAuthDTO;
import com.capstone.user.model.Address;
import com.capstone.user.model.CommonUser;
import com.capstone.user.proxy.UserAuthProxy;
import com.capstone.user.rabbitmq.Producer;
import com.capstone.user.rabbitmq.ProfileDTO;
import com.capstone.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserAuthProxy userAuthProxy;
    @Autowired
    private Producer producer;

    @Override
    public CommonUser addUser(CommonUser commonUser) {
        UserAuthDTO userAuthDTO=new UserAuthDTO(commonUser.getEmailId(), commonUser.getPassword(), commonUser.getUserName(), commonUser.getRole());
        userAuthProxy.sendDtoToUserAuthApp(userAuthDTO);
        ProfileDTO profileDTO=new ProfileDTO(commonUser.getEmailId());
        producer.sentDtoToQueue(profileDTO);

        if (userRepository.findById(commonUser.getEmailId()).isPresent()){
            return userRepository.save(commonUser);
        }else {
            return userRepository.insert(commonUser);
        }
    }
    @Override
    public CommonUser getUserByEmailId(String emailId) {
        return userRepository.findById(emailId).get();
    }

    @Override
    public CommonUser addAddressToUser(String emailId, Address address) {
        System.out.println(address);
        CommonUser commonUser=userRepository.findById(emailId).get();
        commonUser.getAddressList().add(address);
        return userRepository.save(commonUser);
    }
    @Override
    public List<CommonUser> getAllUser() {
        return userRepository.findAll();
    }
}
