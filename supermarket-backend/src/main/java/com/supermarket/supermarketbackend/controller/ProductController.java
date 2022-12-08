package com.supermarket.supermarketbackend.controller;

import com.supermarket.supermarketbackend.model.Product;
import com.supermarket.supermarketbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.UUID;

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

//    @GetMapping("/categories")
//    List<String> getCategories() {
//        return productRepository.getCategories();
//    }

    @GetMapping("/products/{category}")
    List<Product> getProductsByCategory(@PathVariable("category") String category) {
        return productRepository.findProductsByCategory(category);
    }

    @GetMapping("product/{id}")
    Product getProductById(@PathVariable UUID id) throws UserPrincipalNotFoundException {
        return productRepository.findById(id).orElseThrow(()->new UserPrincipalNotFoundException(id.toString()));
    }

    @PutMapping("/product/{id}")
    Product updateProduct(@RequestBody Product newProduct, @PathVariable UUID id) throws UserPrincipalNotFoundException {
        return productRepository.findById(id).map(product -> {
            product.setProduct_name(newProduct.getProduct_name());
            product.setPrice(newProduct.getPrice());
            product.setDiscount(newProduct.getDiscount());
            product.setProduct_url(newProduct.getProduct_url());
            product.setDesc(newProduct.getDesc());
            product.setDays_to_deliver(newProduct.getDays_to_deliver());
            product.setCategory(newProduct.getCategory());
            product.setStock(newProduct.getStock());
            return productRepository.save(product);
        }).orElseThrow(()->new UserPrincipalNotFoundException(id.toString()));
    }

    @DeleteMapping("product/{id}")
    String deleteProduct(@PathVariable UUID id) throws UserPrincipalNotFoundException {
        if(!productRepository.existsById(id)) {
            throw new UserPrincipalNotFoundException(id.toString());
        }
        productRepository.deleteById(id);
        return "Product with id " + id + " has been deleted successfully.";
    }
 }