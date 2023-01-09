package com.capstone.restaurantApp.service;

import com.capstone.restaurantApp.model.Menu;
import com.capstone.restaurantApp.model.Restro;

import java.util.List;

public interface RestroService {
    public Restro addRestro(Restro restro);
    public List<Restro> getAllRestro();
    public List<Restro> getRestroByEmailId(String emailId);
    public boolean deleteRestroByGstNo(String gstNo);
    public List<Restro> getRestroByAddress(String address);
    public Restro getRestroByGstNo(String gstNo);

    public Restro addMenuListToRestro(String gstNo,Menu menu);

    public List<Menu> getMenuListByGstNo(String gstNo);
    public boolean deleteMenuItemByName(String gstNo,String itemName);
    public List<Menu> getMenuListByCategory(String gstNo, String Category);
}
