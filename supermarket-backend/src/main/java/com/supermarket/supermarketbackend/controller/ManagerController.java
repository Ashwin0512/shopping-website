package com.supermarket.supermarketbackend.controller;

import com.supermarket.supermarketbackend.model.Manager;
import com.supermarket.supermarketbackend.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ManagerController {
    @Autowired
    private ManagerRepository managerRepository;

    @PostMapping("/add/manager")
    Manager newManager(@RequestBody Manager newManager) throws NoSuchAlgorithmException {
        return  managerRepository.save(newManager);
    }

    @GetMapping("/managers")
    List<Manager> getAllManagers() {
        return managerRepository.findAll();
    }

    @GetMapping("manager/byEmail/{email}")
    Manager getByEmail(@PathVariable("email") String email) {
        return managerRepository.findByEmail(email);
    }
    @GetMapping("manager/{id}")
    Manager getManagerById(@PathVariable UUID id) throws UserPrincipalNotFoundException {
        return managerRepository.findById(id).orElseThrow(()->new UserPrincipalNotFoundException(id.toString()));
    }
    @PutMapping("/manager/{id}")
    Manager updateManager(@RequestBody Manager newManager, @PathVariable UUID id) throws UserPrincipalNotFoundException {
        return managerRepository.findById(id).map(manager -> {
            manager.setManager_name(newManager.getManager_name());
            manager.setManager_email(newManager.getManager_email());
            manager.setManager_phone(newManager.getManager_phone());
            manager.setManager_password(newManager.getManager_password());
            manager.setManager_address(newManager.getManager_address());
            return managerRepository.save(manager);
        }).orElseThrow(()->new UserPrincipalNotFoundException(id.toString()));
    }

    @DeleteMapping("manager/{id}")
    String deleteUser(@PathVariable UUID id) throws UserPrincipalNotFoundException {
        if(!managerRepository.existsById(id)) {
            throw new UserPrincipalNotFoundException(id.toString());
        }
        managerRepository.deleteById(id);
        return "User with id " + id + " has been deleted successfully.";
    }
}
