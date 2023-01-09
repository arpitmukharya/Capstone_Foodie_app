package com.capstone.userOrdersApp.repository;

import com.capstone.userOrdersApp.model.UserOrder;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserOrderRepository extends MongoRepository<UserOrder,Integer> {
}
