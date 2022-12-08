package com.supermarket.supermarketbackend.controller;

import com.supermarket.supermarketbackend.model.User;
import com.supermarket.supermarketbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add/user")
    User newUser(@RequestBody User newUser) throws NoSuchAlgorithmException {
//        byte[] hashed_password = getSHA(newUser.getUser_password());
//        String x = toHexString(hashed_password);
//        newUser.setUser_password(x);
        return  userRepository.save(newUser);
    }

    public static byte[] getSHA(String input) throws NoSuchAlgorithmException
    {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        return md.digest(input.getBytes(StandardCharsets.UTF_8));
    }

    public static String toHexString(byte[] hash)
    {
        BigInteger number = new BigInteger(1, hash);

        StringBuilder hexString = new StringBuilder(number.toString(16));

        while (hexString.length() < 64)
        {
            hexString.insert(0, '0');
        }

        return hexString.toString();
    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("user/byEmail/{email}")
    User getByEmail(@PathVariable("email") String email) {
        return userRepository.findByEmail(email);
    }
    @GetMapping("user/{id}")
    User getUserById(@PathVariable UUID id) throws UserPrincipalNotFoundException {
        return userRepository.findById(id).orElseThrow(()->new UserPrincipalNotFoundException(id.toString()));
    }
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable UUID id) throws UserPrincipalNotFoundException {
        return userRepository.findById(id).map(user -> {
            user.setUser_name(newUser.getUser_name());
            user.setUser_email(newUser.getUser_email());
            user.setUser_phone(newUser.getUser_phone());
            user.setUser_password(newUser.getUser_password());
            user.setUser_address(newUser.getUser_address());
            user.setWallet_balance((newUser.getWallet_balance()));
            return userRepository.save(user);
        }).orElseThrow(()->new UserPrincipalNotFoundException(id.toString()));
    }

    @DeleteMapping("user/{id}")
    String deleteUser(@PathVariable UUID id) throws UserPrincipalNotFoundException {
        if(!userRepository.existsById(id)) {
            throw new UserPrincipalNotFoundException(id.toString());
        }
        userRepository.deleteById(id);
        return "User with id " + id + " has been deleted successfully.";
    }

//    @PostMapping("/user/{id}/placeOrder")
//    Order newOrder(@RequestBody Order newOrder) {
//        return OrdersRepository.save(newOrder);
//        //deduct money from user wallet balance
//        //deduct item stock
//    }
}