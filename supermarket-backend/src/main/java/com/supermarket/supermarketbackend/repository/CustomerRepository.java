package com.supermarket.supermarketbackend.repository;

import com.supermarket.supermarketbackend.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}