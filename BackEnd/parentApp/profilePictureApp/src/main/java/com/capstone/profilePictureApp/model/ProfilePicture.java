package com.capstone.profilePictureApp.model;

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
public class ProfilePicture {
    @Id
    private String emailId;
    private String name;
    private String type;
    @Lob
    private byte[] pic;
}
