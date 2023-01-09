package com.capstone.user.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Document
public class CommonUser {
    @Id
    private String emailId;
    private String firstName,lastName,password,userName,role;
    private long mobileNo;
    private List<Address> addressList;

}
