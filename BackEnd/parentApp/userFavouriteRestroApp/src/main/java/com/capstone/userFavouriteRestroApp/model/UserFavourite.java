package com.capstone.userFavouriteRestroApp.model;

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
public class UserFavourite {
    @Id
    private String emailId;
    private List<Restro> restroList;
}
