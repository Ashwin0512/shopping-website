package com.supermarket.supermarketbackend.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table
public class User {
    @Id
    @GeneratedValue
    private UUID user_id;
    private String user_name;
    private String user_password;
    private String user_address;
    private String user_phone;

    private Double wallet_balance;
    private boolean isUserLoggedIn;
    @Column(unique = true)
    private String user_email;

    public UUID getUser_id() {
        return user_id;
    }

    public void setUser_id(UUID user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_password() {
        return user_password;
    }

    public void setUser_password(String user_password) {
        this.user_password = user_password;
    }

    public String getUser_address() {
        return user_address;
    }

    public void setUser_address(String user_address) {
        this.user_address = user_address;
    }

    public String getUser_phone() {
        return user_phone;
    }

    public void setUser_phone(String user_phone) {
        this.user_phone = user_phone;
    }

    public Double getWallet_balance() {
        return wallet_balance;
    }

    public void setWallet_balance(Double wallet_balance) {

        this.wallet_balance = wallet_balance;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public boolean isUserLoggedIn() {
        return isUserLoggedIn;
    }

    public void setUserLoggedIn(boolean userLoggedIn) {
        isUserLoggedIn = userLoggedIn;
    }

    public User(UUID user_id, String user_name, String user_password, String user_address, String user_phone, String user_email) {
        this.user_id = user_id;
        this.user_name = user_name;
        this.user_password = user_password;
        this.user_address = user_address;
        this.user_phone = user_phone;
        this.wallet_balance = 1000.00;
        this.isUserLoggedIn = true;
        this.user_email = user_email;
    }

    public User() {

    }
}