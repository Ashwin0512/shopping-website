package com.supermarket.supermarketbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;
import java.util.UUID;

@Entity
@Table
public class Order {
    @Id
    @GeneratedValue
    private UUID order_id;
    private Date order_date;
    private UUID ItemID;
    private  UUID user_id;
    private String UserName;
    private boolean isDelivered;
    private int StockOrdered;
    private double total_amount;
    private Date order_expected;

    public UUID getOrder_id() {
        return order_id;
    }

    public void setOrder_id(UUID order_id) {
        this.order_id = order_id;
    }

    public Date getOrder_date() {
        return order_date;
    }

    public void setOrder_date(Date order_date) {
        this.order_date = order_date;
    }

    public UUID getItemID() {
        return ItemID;
    }

    public void setItemID(UUID itemID) {
        ItemID = itemID;
    }

    public UUID getUser_id() {
        return user_id;
    }

    public void setUser_id(UUID user_id) {
        this.user_id = user_id;
    }

    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public boolean isDelivered() {
        return isDelivered;
    }

    public void setDelivered(boolean delivered) {
        isDelivered = delivered;
    }

    public int getStockOrdered() {
        return StockOrdered;
    }

    public void setStockOrdered(int stockOrdered) {
        StockOrdered = stockOrdered;
    }

    public double getTotal_amount() {
        return total_amount;
    }

    public void setTotal_amount(double total_amount) {
        this.total_amount = total_amount;
    }

    public Date getOrder_expected() {
        return order_expected;
    }

    public void setOrder_expected(Date order_expected) {
        this.order_expected = order_expected;
    }

    public Order(UUID order_id, Date order_date, UUID user_id, UUID itemID, String userName, boolean isDelivered, int stockOrdered, double total_amount, Date order_expected) {
        this.order_id = order_id;
        this.order_date = order_date;
        ItemID = itemID;
        this.user_id = user_id;
        UserName = userName;
        this.isDelivered = isDelivered;
        StockOrdered = stockOrdered;
        this.total_amount = total_amount;
        this.order_expected = order_expected;
    }

    public Order() {

    }
}
