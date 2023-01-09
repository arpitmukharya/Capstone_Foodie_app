package com.capstone.user.repository;

import com.capstone.user.model.CommonUser;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<CommonUser,String> {
}
