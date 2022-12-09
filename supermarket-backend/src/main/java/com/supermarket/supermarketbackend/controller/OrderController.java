package com.supermarket.supermarketbackend.controller;

import com.supermarket.supermarketbackend.model.Order;
import com.supermarket.supermarketbackend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/orders")
    List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

//    @PostMapping("/add/order")
//    Order newOrder(@RequestBody Order newOrder) {
//        return orderRepository.save(newOrder);
//    }

    @GetMapping("/order/{id}")
    Order getOrderById(@PathVariable("id") UUID id) {
        return orderRepository.findOrderById(id);
    }

    @GetMapping("/orders/{id}")
    List<Order> getOrdersByUserId(@PathVariable("id")UUID id) {
        return orderRepository.findOrdersByUserId(id);
    }

    @GetMapping("/orders/{date}")
    List<Order> getOrdersByDate(@PathVariable("date") Date date) {
        return orderRepository.findOrdersByDate(date);
    }
    @PostMapping("/user/{id}/placeOrder")
    Order newOrder(@RequestBody Order newOrder) {
        return orderRepository.save(newOrder);
        //deduct money from user wallet balance
        //alert dedena...
        //deduct item stock
    }
}
