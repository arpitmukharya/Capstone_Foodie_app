package com.capstone.userOrdersApp.service;

import com.capstone.userOrdersApp.model.UserOrder;

import java.util.List;

public interface UserOrderService {
    public  abstract UserOrder addOrder(UserOrder userOrder);
    public abstract List<UserOrder> getOrderByEmailId(String emailId);
    public abstract UserOrder getOrderByOrderId(int orderId);
    public abstract List<UserOrder> getOrderListByGstNo(String gstNo);
    public abstract List<UserOrder> getAllOrders();
}
