package com.supermarket.supermarketbackend.repository;

import com.supermarket.supermarketbackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {

}
