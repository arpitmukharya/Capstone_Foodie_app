package com.capstone.userFavouriteRestroApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Restro {
    private String gstNo,restroName,restroAddress,openTime,closeTime,cuisine;
}
