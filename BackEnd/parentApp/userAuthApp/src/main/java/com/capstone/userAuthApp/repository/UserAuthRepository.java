package com.capstone.userAuthApp.repository;

import com.capstone.userAuthApp.model.UserAuth;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAuthRepository extends JpaRepository<UserAuth,String> {
}
