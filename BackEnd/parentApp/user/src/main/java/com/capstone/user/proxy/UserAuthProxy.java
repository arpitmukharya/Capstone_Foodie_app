package com.capstone.user.proxy;

import com.capstone.user.dto.UserAuthDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "authentication-service", url = "localhost:2221")
public interface UserAuthProxy {
    @PostMapping("/foodie-app/user-auth-app/v1/register")
    public ResponseEntity<?> sendDtoToUserAuthApp(@RequestBody UserAuthDTO userAuthDTO);
}
