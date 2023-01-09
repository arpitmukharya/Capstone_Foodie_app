package com.capstone.restaurantApp.model;

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
public class Restro {
    @Id
    private String gstNo;
    private String emailId,restroName,restroAddress,cuisine,openTime,closeTime;
    private long restroPhone;
   private List<Menu> menuList;
}
