package com.supermarket.supermarketbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@EnableAutoConfiguration
public class SupermarketBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SupermarketBackendApplication.class, args);
	}
}