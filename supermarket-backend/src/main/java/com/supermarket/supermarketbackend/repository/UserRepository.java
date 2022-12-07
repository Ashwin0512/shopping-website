package com.supermarket.supermarketbackend.repository;

import com.supermarket.supermarketbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    @Query("SELECT u FROM User u WHERE u.user_email = :user_email")
    User findByEmail(String user_email);
}