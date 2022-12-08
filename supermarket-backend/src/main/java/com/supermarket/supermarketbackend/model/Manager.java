package com.supermarket.supermarketbackend.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table
public class Manager{
    @Id
    @GeneratedValue
    private UUID manager_id;
    private String manager_name;
    private String manager_password;
    private String manager_address;
    private String manager_phone;
    @Column(unique = true)
    private String manager_email;

    public UUID getManager_id() {
        return manager_id;
    }

    public void setManager_id(UUID manager_id) {
        this.manager_id = manager_id;
    }

    public String getManager_name() {
        return manager_name;
    }

    public void setManager_name(String manager_name) {
        this.manager_name = manager_name;
    }

    public String getManager_password() {
        return manager_password;
    }

    public void setManager_password(String manager_password) {
        this.manager_password = manager_password;
    }

    public String getManager_address() {
        return manager_address;
    }

    public void setManager_address(String manager_address) {
        this.manager_address = manager_address;
    }

    public String getManager_phone() {
        return manager_phone;
    }

    public void setManager_phone(String manager_phone) {
        this.manager_phone = manager_phone;
    }

    public String getManager_email() {
        return manager_email;
    }

    public void setManager_email(String manager_email) {
        this.manager_email = manager_email;
    }

    public Manager(UUID manager_id, String manager_name, String manager_password, String manager_address, String manager_phone, String manager_email) {
        this.manager_id = manager_id;
        this.manager_name = manager_name;
        this.manager_password = manager_password;
        this.manager_address = manager_address;
        this.manager_phone = manager_phone;
        this.manager_email = manager_email;
    }

    public Manager() {

    }
}