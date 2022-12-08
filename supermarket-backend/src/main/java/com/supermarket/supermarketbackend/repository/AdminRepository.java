package com.supermarket.supermarketbackend.repository;

import com.supermarket.supermarketbackend.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

public interface AdminRepository extends JpaRepository<Admin, UUID> {
    @Query("SELECT a FROM Admin a WHERE a.admin_email = :admin_email")
    Admin findByEmail(String admin_email);
}