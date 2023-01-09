package com.capstone.restaurantPictureApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class RestroPicture {
    @Id
    private String gstNo;
    private String restroPicName;
    private String picType;
    @Lob
    private byte[] picSize;
}
