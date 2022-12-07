package com.supermarket.supermarketbackend.controller;

import com.supermarket.supermarketbackend.model.User;
import com.supermarket.supermarketbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add/user")
    User newUser(@RequestBody User newUser) {
        return  userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("user/byEmail/{email}")
    User getByEmail(@PathVariable("email") String email) {
        return userRepository.findByEmail(email);
    }
}