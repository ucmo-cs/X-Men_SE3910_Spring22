package com.example.SpringReact.service;

import com.example.SpringReact.domain.Account;
import com.example.SpringReact.domain.Book;
import com.example.SpringReact.domain.Login;
import com.example.SpringReact.domain.User;
import com.example.SpringReact.repository.AccountRepository;
import com.example.SpringReact.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AccountRepository accountRepository;

    public boolean validateUserLogin(Login login) {
       Optional<User> user = userRepository.findById(login.getName());



        if (!user.isPresent()) {
            return false;
        }


        System.out.println("login pass " + login.getPassword());
        System.out.println("database pass " + user.get().getPassword());

        return login.getPassword().equals(user.get().getPassword());
    }

    @Transactional(readOnly = true)
    public User findUser(String name){
        return userRepository.findById(name).orElseThrow(()->new IllegalArgumentException("Check Id"));
    }

}
