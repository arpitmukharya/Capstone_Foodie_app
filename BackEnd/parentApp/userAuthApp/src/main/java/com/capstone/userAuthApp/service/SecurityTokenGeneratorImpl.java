package com.capstone.userAuthApp.service;

import com.capstone.userAuthApp.model.UserAuth;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
@Service
public class SecurityTokenGeneratorImpl implements SecurityTokenGenerator{

    @Override
    public Map<String, String> generateToken(UserAuth userAuth) {
        Map<String,String> result=new HashMap<>();
        Map<String,Object> data=new HashMap<>();
        data.put("userObject",userAuth);

        String jwtToken= Jwts.builder()
                .setClaims(data)
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS512,"mysecurekey").compact();
        result.put("token",jwtToken);
        result.put("message","user succesfull logged in");
        return result;
    }
}
