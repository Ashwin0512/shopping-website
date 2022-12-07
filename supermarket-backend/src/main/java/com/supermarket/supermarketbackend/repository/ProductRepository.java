package com.supermarket.supermarketbackend.repository;

import com.supermarket.supermarketbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Long> {
    @Query("SELECT p FROM Product p WHERE p.category = :category")
    List<Product> findProductsByCategory(String category);
}