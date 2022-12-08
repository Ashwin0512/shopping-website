package com.supermarket.supermarketbackend.repository;

import com.supermarket.supermarketbackend.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;
import java.util.UUID;

public interface OrderRepository extends JpaRepository<Order, UUID> {
    @Query("SELECT o FROM Order o WHERE o.user_id = :user_id")
    List<Order> findOrdersByUserId(UUID user_id);

    @Query("SELECT o FROM Order o WHERE o.order_id = :order_id")
    Order findOrderById(UUID order_id);

    @Query("SELECT o FROM Order o WHERE o.order_date = :order_date")
    List<Order> findOrdersByDate(Date order_date);
}
