package com.supermarket.supermarketbackend.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table
public class Admin {
    @Id
    @GeneratedValue
    private UUID admin_id;
    private String admin_name;
    private String admin_password;
    private String admin_address;
    private String admin_phone;
    @Column(unique = true)
    private String admin_email;

    public UUID getAdmin_id() {
        return admin_id;
    }

    public void setAdmin_id(UUID admin_id) {
        this.admin_id = admin_id;
    }

    public String getAdmin_name() {
        return admin_name;
    }

    public void setAdmin_name(String admin_name) {
        this.admin_name = admin_name;
    }

    public String getAdmin_password() {
        return admin_password;
    }

    public void setAdmin_password(String admin_password) {
        this.admin_password = admin_password;
    }

    public String getAdmin_address() {
        return admin_address;
    }

    public void setAdmin_address(String admin_address) {
        this.admin_address = admin_address;
    }

    public String getAdmin_phone() {
        return admin_phone;
    }

    public void setAdmin_phone(String admin_phone) {
        this.admin_phone = admin_phone;
    }

    public String getAdmin_email() {
        return admin_email;
    }

    public void setAdmin_email(String admin_email) {
        this.admin_email = admin_email;
    }

    public Admin(UUID admin_id, String admin_name, String admin_password, String admin_address, String admin_phone, String admin_email) {
        this.admin_id = admin_id;
        this.admin_name = admin_name;
        this.admin_password = admin_password;
        this.admin_address = admin_address;
        this.admin_phone = admin_phone;
        this.admin_email = admin_email;
    }

    public Admin() {

    }
}