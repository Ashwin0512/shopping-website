package com.supermarket.supermarketbackend.controller;

import com.supermarket.supermarketbackend.model.Product;
import com.supermarket.supermarketbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/product")
    Product newProduct(@RequestBody Product newProduct) {
        return productRepository.save(newProduct);
    }

    @GetMapping("/products")
    List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/categories")
    List<String> getCategories() {
        return productRepository.getCategories();
    }

    @GetMapping("/products/{category}")
    List<Product> getProductsByCategory(@PathVariable("category") String category) {
        return productRepository.findProductsByCategory(category);
    }
 }