package com.capstone.userOrdersApp.service;

import com.capstone.userOrdersApp.model.UserOrder;
import com.capstone.userOrdersApp.repository.UserOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class UserOrderServiceImpl implements UserOrderService {
    @Autowired
    private UserOrderRepository userOrderRepository;

    @Override
    public UserOrder addOrder(UserOrder userOrder) {
        int orderId=new Random().nextInt(999999);
        System.out.println(orderId);
        userOrder.setOrderId(orderId);


        return userOrderRepository.insert(userOrder);
    }

    @Override
    public List<UserOrder> getOrderByEmailId(String emailId) {
        List<UserOrder> userOrderList=userOrderRepository.findAll();
        List<UserOrder> result=new ArrayList<>();
        for (int i=0;i<userOrderList.size();i++){
            if (emailId.equals(userOrderList.get(i).getEmailId())){
                result.add(userOrderList.get(i));
            }
        }
        return result;
    }

    @Override
    public UserOrder getOrderByOrderId(int orderId) {

        return userOrderRepository.findById(orderId).get();
    }

    @Override
    public List<UserOrder> getOrderListByGstNo(String gstNo) {
        List<UserOrder> allOrders=userOrderRepository.findAll();
        List<UserOrder> gstNoOrderList=new ArrayList<>();
        for (int i=0;i<allOrders.size();i++){
            if (gstNo.equals(allOrders.get(i).getGstNo())){
                System.out.println(allOrders.get(i));
                gstNoOrderList.add(allOrders.get(i));
            }
        }

        return gstNoOrderList;
    }

    @Override
    public List<UserOrder> getAllOrders() {
        return userOrderRepository.findAll();
    }
}
