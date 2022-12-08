package com.supermarket.supermarketbackend.controller;

import com.supermarket.supermarketbackend.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
    @Autowired
    private OrdersRepository orderRepository;
//    @GetMapping("/user/currentOrders")
//    Order getByUser(@PathVariable("UserName") String UserName) {
//        return OrdersRepository.findByUser(UserName);
//    }
}
