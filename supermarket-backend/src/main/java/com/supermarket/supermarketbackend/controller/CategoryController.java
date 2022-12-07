package com.supermarket.supermarketbackend.controller;

import com.supermarket.supermarketbackend.model.Category;
import com.supermarket.supermarketbackend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping("/category/add")
    Category newCategory(@RequestBody Category newCategory) {
        return categoryRepository.save(newCategory);
    }

    @GetMapping("/categories")
    List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
}
