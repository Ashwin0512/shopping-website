package com.supermarket.supermarketbackend.controller;

import com.supermarket.supermarketbackend.model.Admin;
import com.supermarket.supermarketbackend.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/add/admin")
    Admin newAdmin(@RequestBody Admin newAdmin) throws NoSuchAlgorithmException {
        return  adminRepository.save(newAdmin);
    }

    @GetMapping("/admins")
    List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    @GetMapping("admin/byEmail/{email}")
    Admin getByEmail(@PathVariable("email") String email) {
        return adminRepository.findByEmail(email);
    }
    @GetMapping("admin/{id}")
    Admin getAdminById(@PathVariable UUID id) throws UserPrincipalNotFoundException {
        return adminRepository.findById(id).orElseThrow(()->new UserPrincipalNotFoundException(id.toString()));
    }
    @PutMapping("/admin/{id}")
    Admin updateAdmin(@RequestBody Admin newAdmin, @PathVariable UUID id) throws UserPrincipalNotFoundException {
        return adminRepository.findById(id).map(admin -> {
            admin.setAdmin_name(newAdmin.getAdmin_name());
            admin.setAdmin_email(newAdmin.getAdmin_email());
            admin.setAdmin_phone(newAdmin.getAdmin_phone());
            admin.setAdmin_password(newAdmin.getAdmin_password());
            admin.setAdmin_address(newAdmin.getAdmin_address());
            return adminRepository.save(admin);
        }).orElseThrow(()->new UserPrincipalNotFoundException(id.toString()));
    }

    @DeleteMapping("admin/{id}")
    String deleteUser(@PathVariable UUID id) throws UserPrincipalNotFoundException {
        if(!adminRepository.existsById(id)) {
            throw new UserPrincipalNotFoundException(id.toString());
        }
        adminRepository.deleteById(id);
        return "User with id " + id + " has been deleted successfully.";
    }
}

