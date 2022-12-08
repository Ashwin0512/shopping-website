package com.supermarket.supermarketbackend.repository;

import com.supermarket.supermarketbackend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface OrdersRepository extends JpaRepository<Order, UUID> {
//    @Query("SELECT u FROM Order u WHERE u.username = :user_name")
//    Order findByUser(String user_name);
}
