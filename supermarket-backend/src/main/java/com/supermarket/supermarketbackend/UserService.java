package com.supermarket.supermarketbackend;

import com.supermarket.supermarketbackend.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
}
