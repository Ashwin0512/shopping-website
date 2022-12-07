package com.supermarket.supermarketbackend.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
public class Product {
    @Id
    @GeneratedValue
    private UUID product_id;
    private String category;
    private String product_name;
    @Lob
    @Column(length = 10000)
    private String desc;
    private double price;
    private double discount;
    private String product_url;
    private int days_to_deliver;

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public UUID getProduct_id() {
        return product_id;
    }

    public void setProduct_id(UUID product_id) {
        this.product_id = product_id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public double getDiscount() {
        return discount;
    }

    public void setDiscount(double discount) {
        this.discount = discount;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setItem_name(String item_name) {
        this.product_name = product_name;
    }

    public String getProduct_url() {
        return product_url;
    }

    public void setProduct_url(String product_url) {
        this.product_url = product_url;
    }

    public int getDays_to_deliver() {
        return days_to_deliver;
    }

    public void setDays_to_deliver(int days_to_deliver) {
        this.days_to_deliver = days_to_deliver;
    }

    public Product(UUID product_id, String category, String product_name, String desc, double price, double discount, String product_url, int days_to_deliver) {
        this.product_id = product_id;
        this.category = category;
        this.product_name = product_name;
        this.desc = desc;
        this.price = price;
        this.discount = discount;
        this.product_url = product_url;
        this.days_to_deliver = days_to_deliver;
    }

    public Product() {

    }
}
