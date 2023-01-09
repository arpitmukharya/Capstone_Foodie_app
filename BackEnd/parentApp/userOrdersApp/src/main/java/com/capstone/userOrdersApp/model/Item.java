package com.capstone.userOrdersApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Item {
    private String itemName,itemCategory;
    private int price,quantity;
}
