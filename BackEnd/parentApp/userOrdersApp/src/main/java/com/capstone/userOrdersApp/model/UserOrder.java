package com.capstone.userOrdersApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Document
public class UserOrder {

    @Id
    private int orderId;
    private String emailId,address;
    private long mobileNo;
    private int totalPrice;
    private List<Item> itemList;
    private String gstNo;


}
