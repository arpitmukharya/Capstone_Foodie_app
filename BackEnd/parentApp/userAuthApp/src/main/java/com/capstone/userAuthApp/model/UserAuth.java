package com.capstone.userAuthApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class UserAuth {
    @Id
    private String  emailId;
    private String password,userName,role;
}
