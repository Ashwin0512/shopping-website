package com.supermarket.supermarketbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.UUID;

@Entity
@Table
public class Category {
    @Id
    @GeneratedValue
    private UUID cat_id;
    private String cat_name;
    private String cat_desc;
    private String cat_url;

    public UUID getCat_id() {
        return cat_id;
    }

    public void setCat_id(UUID cat_id) {
        this.cat_id = cat_id;
    }

    public String getCat_name() {
        return cat_name;
    }

    public void setCat_name(String cat_name) {
        this.cat_name = cat_name;
    }

    public String getCat_desc() {
        return cat_desc;
    }

    public void setCat_desc(String cat_desc) {
        this.cat_desc = cat_desc;
    }

    public String getCat_url() {
        return cat_url;
    }

    public void setCat_url(String cat_url) {
        this.cat_url = cat_url;
    }
}
