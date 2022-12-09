package com.supermarket.supermarketbackend.controller;

import com.supermarket.supermarketbackend.model.Login;
import com.supermarket.supermarketbackend.model.User;
import com.supermarket.supermarketbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add/user")
    User newUser(@RequestBody User newUser)  {
        return  userRepository.save(newUser);
    }

    @PostMapping("/user/login")
    boolean userLogin(@RequestBody Login newLogin) {
        User user=getByEmail(newLogin.email);
        if(user==null){
            return false;
        }
        System.out.println(newLogin.password.equals(user.getUser_password()));
        return newLogin.password.equals(user.getUser_password());
    }

//    @GetMapping("user/isLoggedIn")
//    boolean isUserLoggedIn() {
//        return userLogin()
//    }

//    @RequestMapping("/login")
//    public boolean findUserByPassword(@RequestParam("email") String email, @RequestParam("password") String password) {
//        System.out.println(email);
//        System.out.println(password);
//
//        return true;
//        if(userLogin.getUser_password() == getByEmail(userLogin.getUser_email()).getUser_password()) {
//            System.out.println(true);
//            return true;
//        }
//        return false;
//    }

//    @PostMapping("/login")
//    boolean userLogin(@RequestBody Login newLogin) {
//        User user=getByEmail(newLogin.email);
//        if(user==null){
//            return false;
//        }
//        if(user!=null){
//            if(newLogin.password.equals(user.getUser_password())){
//                return true;
//            }
//        }
//        return false;
//    }

//    public static byte[] getSHA(String input) throws NoSuchAlgorithmException
//    {
//        MessageDigest md = MessageDigest.getInstance("SHA-256");
//        return md.digest(input.getBytes(StandardCharsets.UTF_8));
//    }
//
//    public static String toHexString(byte[] hash)
//    {
//        BigInteger number = new BigInteger(1, hash);
//
//        StringBuilder hexString = new StringBuilder(number.toString(16));
//
//        while (hexString.length() < 64)
//        {
//            hexString.insert(0, '0');
//        }
//
//        return hexString.toString();
//    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("user/byEmail/{email}")
    User getByEmail(@PathVariable("email") String email) {
        return userRepository.findByEmail(email);
    }
    @GetMapping("user/{id}")
    User getUserById(@PathVariable UUID id) throws UserPrincipalNotFoundException {
        return userRepository.findById(id).orElseThrow(()->new UserPrincipalNotFoundException(id.toString()));
    }
    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable UUID id) throws UserPrincipalNotFoundException {
        return userRepository.findById(id).map(user -> {
            user.setUser_name(newUser.getUser_name());
            user.setUser_email(newUser.getUser_email());
            user.setUser_phone(newUser.getUser_phone());
            user.setUser_password(newUser.getUser_password());
            user.setUser_address(newUser.getUser_address());
            user.setWallet_balance((newUser.getWallet_balance()));
            return userRepository.save(user);
        }).orElseThrow(()->new UserPrincipalNotFoundException(id.toString()));
    }

    @DeleteMapping("user/{id}")
    String deleteUser(@PathVariable UUID id) throws UserPrincipalNotFoundException {
        if(!userRepository.existsById(id)) {
            throw new UserPrincipalNotFoundException(id.toString());
        }
        userRepository.deleteById(id);
        return "User with id " + id + " has been deleted successfully.";
    }

}