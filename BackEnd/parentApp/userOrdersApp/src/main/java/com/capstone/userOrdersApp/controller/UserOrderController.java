package com.capstone.userOrdersApp.controller;

import com.capstone.userOrdersApp.model.UserOrder;
import com.capstone.userOrdersApp.service.UserOrderService;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/foodie-app/user-order-app/v1")
public class UserOrderController {
    @Autowired
    UserOrderService userOrderService;

// http://localhost:5555/foodie-app/user-order-app/v1/add-order   [POST]

    @PostMapping("/add-order")
    @HystrixCommand(fallbackMethod = "fallbackLoginCheck",commandProperties = {
     @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds",value = "5000")})
    public ResponseEntity<?> addOrder(@RequestBody UserOrder userOrder){
        //below block to be uncommented only for manual interruption
//        try {
//            Thread.sleep(6000);
//        }catch (InterruptedException ex){
//            ex.printStackTrace();
//        }
        return new ResponseEntity<>(userOrderService.addOrder(userOrder), HttpStatus.OK);
    }
    //fallback method
    public ResponseEntity<?> fallbackLoginCheck(@RequestBody UserOrder userOrder){
        String message="Order service is busy,Please try after sometime";
        return new ResponseEntity<>(message,HttpStatus.GATEWAY_TIMEOUT);
    }


    // http://localhost:5555/foodie-app/user-order-app/v1/get-order-by-emailId/{emailId}   [GET]
    @GetMapping("/get-order-by-emailId/{emailId}")
    public ResponseEntity<?> getOrderByEmailId(@PathVariable String emailId){
        return new ResponseEntity<>(userOrderService.getOrderByEmailId(emailId),HttpStatus.OK);
    }



    // http://localhost:5555/foodie-app/user-order-app/v1/get-order-by-orderid/{orderId}  [GET]
    @GetMapping("/get-order-by-orderid/{orderId}")
    public ResponseEntity<?> getOrderByOrderId(@PathVariable int orderId){
        return new ResponseEntity<>(userOrderService.getOrderByOrderId(orderId),HttpStatus.OK);
    }

    //  http://localhost:5555/foodie-app/user-order-app/v1/get-orderlist-by-gstno/{gstNo}  [GET]
    @GetMapping("/get-orderlist-by-gstno/{gstNo}")
    public ResponseEntity<?> getOrderListByGstNo(@PathVariable String gstNo){
        return new ResponseEntity<>(userOrderService.getOrderListByGstNo(gstNo),HttpStatus.OK);
    }

    //  http://localhost:5555/foodie-app/user-order-app/v1/get-all-orders  [GET]
    @GetMapping("/get-all-orders")
    public ResponseEntity<?> getAllOrders(){
        return new ResponseEntity<>(userOrderService.getAllOrders(),HttpStatus.OK);
    }
}
