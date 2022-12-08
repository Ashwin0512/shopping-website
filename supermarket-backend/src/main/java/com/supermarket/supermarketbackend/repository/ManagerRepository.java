package com.supermarket.supermarketbackend.repository;

import com.supermarket.supermarketbackend.model.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

public interface ManagerRepository extends JpaRepository<Manager, UUID> {
    @Query("SELECT m FROM Manager m WHERE m.manager_email = :manager_email")
    Manager findByEmail(String manager_email);
}
