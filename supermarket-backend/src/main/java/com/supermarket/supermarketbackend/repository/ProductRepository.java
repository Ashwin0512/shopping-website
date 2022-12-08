package com.supermarket.supermarketbackend.repository;

import com.supermarket.supermarketbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {
    @Query("SELECT p FROM Product p WHERE p.category = :category")
    List<Product> findProductsByCategory(String category);

    @Query("SELECT DISTINCT category from Product")
    List<String> getCategories();

}