package com.capstone.userFavouriteRestroApp.repository;

import com.capstone.userFavouriteRestroApp.model.UserFavourite;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserFavouriteRepository extends MongoRepository<UserFavourite,String> {
}
