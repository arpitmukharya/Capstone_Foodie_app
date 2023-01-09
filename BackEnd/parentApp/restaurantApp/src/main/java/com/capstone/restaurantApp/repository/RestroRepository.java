package com.capstone.restaurantApp.repository;

import com.capstone.restaurantApp.model.Restro;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RestroRepository extends MongoRepository<Restro,String> {
}
