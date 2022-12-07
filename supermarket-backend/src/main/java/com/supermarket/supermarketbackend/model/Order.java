//package com.supermarket.supermarketbackend.model;
//
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//
//import java.util.Date;
//import java.util.Map;
//import java.util.UUID;
//
//@Entity
//@Table
//public class Order {
//    @Id
//    private UUID order_id;
//    private Date order_date;
//    private Map<UUID,Integer> Items;
//    private int total_amount;
//    private String Payment_Mode;
//    private Date order_expected;
//
//    public UUID getOrder_id() {
//        return order_id;
//    }
//
//    public void setOrder_id(UUID order_id) {
//        this.order_id = order_id;
//    }
//
//    public Date getOrder_date() {
//        return order_date;
//    }
//
//    public void setOrder_date(Date order_date) {
//        this.order_date = order_date;
//    }
//
//    public Map<UUID, Integer> getItems() {
//        return Items;
//    }
//
//    public void setItems(Map<UUID, Integer> items) {
//        Items = items;
//    }
//
//    public int getTotal_amount() {
//        return total_amount;
//    }
//
//    public void setTotal_amount(int total_amount) {
//        this.total_amount = total_amount;
//    }
//
//    public String getPayment_Mode() {
//        return Payment_Mode;
//    }
//
//    public void setPayment_Mode(String payment_Mode) {
//        Payment_Mode = payment_Mode;
//    }
//
//    public Date getOrder_expected() {
//        return order_expected;
//    }
//
//    public void setOrder_expected(Date order_expected) {
//        this.order_expected = order_expected;
//    }
//
//    public Order(UUID order_id, Date order_date, Map<UUID, Integer> items, int total_amount, String payment_Mode, Date order_expected) {
//        this.order_id = order_id;
//        this.order_date = order_date;
//        Items = items;
//        this.total_amount = total_amount;
//        Payment_Mode = payment_Mode;
//        this.order_expected = order_expected;
//    }
//
//    public Order(){
//
//    }
//}
