package com.supermarket.supermarketbackend.repository;

import com.supermarket.supermarketbackend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CategoryRepository extends JpaRepository<Category, UUID> {

}
