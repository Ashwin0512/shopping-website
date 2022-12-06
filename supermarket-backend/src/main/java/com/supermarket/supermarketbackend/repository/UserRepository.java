package com.supermarket.supermarketbackend.repository;

import com.supermarket.supermarketbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

}
