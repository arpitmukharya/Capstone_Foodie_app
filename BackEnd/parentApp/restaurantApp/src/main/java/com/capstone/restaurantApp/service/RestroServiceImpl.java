package com.capstone.restaurantApp.service;

import com.capstone.restaurantApp.model.Menu;
import com.capstone.restaurantApp.model.Restro;
import com.capstone.restaurantApp.rabbitmq.Producer;
import com.capstone.restaurantApp.rabbitmq.RestaurantPicDTO;
import com.capstone.restaurantApp.repository.RestroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RestroServiceImpl implements RestroService{
    @Autowired
    private RestroRepository restroRepository;
    @Autowired
    private Producer producer;

    @Override
    public Restro addRestro(Restro restro) {
        RestaurantPicDTO restaurantPicDTO=new RestaurantPicDTO(restro.getGstNo());
        producer.sentDtoToQueue(restaurantPicDTO);
//        restro.setMenuList(new ArrayList<>());
            if(restroRepository.findById(restro.getGstNo()).isPresent()){
            Restro existingRestro=restroRepository.findById(restro.getGstNo()).get();
             List<Menu> existingList=existingRestro.getMenuList();
            for (int i=0;i<restro.getMenuList().size();i++){
                existingList.add(existingList.size(),restro.getMenuList().get(i));
            }
            return restroRepository.save(existingRestro);
        }else {
            return restroRepository.insert(restro);
        }
    }

    @Override
    public List<Restro> getAllRestro() {
        return restroRepository.findAll();
    }

    @Override
    public List<Restro> getRestroByEmailId(String emailId) {
       List<Restro> restroList=restroRepository.findAll();
       List<Restro> result=new ArrayList<>();
        for (int i=0;i<restroList.size();i++){
            if(emailId.equals( restroList.get(i).getEmailId())){
                result.add(restroList.get(i));
            }
        }
        return result;
    }

    @Override
    public boolean deleteRestroByGstNo(String gstNo) {
         restroRepository.deleteById(gstNo);
         return true;
    }

    @Override
    public List<Restro> getRestroByAddress(String address) {
        List<Restro> restroList=restroRepository.findAll();
        List<Restro> result=new ArrayList<>();

        for (int i=0;i<restroList.size();i++){
            if(restroList.get(i).getRestroAddress().toLowerCase().startsWith(address)){
                result.add(restroList.get(i));
            }
        }
        return result;
    }

    @Override
    public Restro getRestroByGstNo(String gstNo) {
        return restroRepository.findById(gstNo).get();
    }

    @Override
    public Restro addMenuListToRestro(String gstNo,Menu menu) {
        Restro data=restroRepository.findById(gstNo).get();
        List<Menu> existingList=data.getMenuList();
        existingList.add(menu);

//        for (int i=0;i<menuList.size();i++){
//            existingList.add(menuList.get(i));
//        }

        return restroRepository.save(data);
    }

    @Override
    public List<Menu> getMenuListByGstNo(String gstNo) {

        return restroRepository.findById(gstNo).get().getMenuList();
    }

    @Override
    public boolean deleteMenuItemByName(String gstNo, String itemName) {
        Restro restro=restroRepository.findById(gstNo).get();
        List<Menu> menuList=restro.getMenuList();
        for (int i=0;i<menuList.size();i++){
            if (itemName.equals(menuList.get(i).getItemName())){
                menuList.remove(i);
                restroRepository.save(restro);
                return true;
            }
        }

        return false;
    }

    @Override
    public List<Menu> getMenuListByCategory(String gstNo, String category) {
        List<Menu> menuList=restroRepository.findById(gstNo).get().getMenuList();
        List<Menu> result= menuList.stream().filter(menu -> menu.getItemCategory().equals(category)).toList();
        System.out.println(result);
        return result;
    }
}
