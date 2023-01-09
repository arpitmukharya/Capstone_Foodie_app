package com.capstone.restaurantApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Menu {
    private String itemName,itemCategory,itemImageUrl,itemDescription;
    private int itemPrice;
}
