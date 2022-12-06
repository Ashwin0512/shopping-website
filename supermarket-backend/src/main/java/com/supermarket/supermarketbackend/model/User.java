package com.supermarket.supermarketbackend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table
public class User {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private UUID id;
    @Column
    private String name;

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User(@JsonProperty("id") UUID id, @JsonProperty("name") String name) {
        this.id = id;
        this.name = name;
    }
    public User() {
        this.id = null;
        this.name = null;
    }
}
