package com.service;

import com.domain.Account;
import com.domain.Login;
import com.domain.User;
import com.repository.AccountRepository;
import com.repository.UserRepository;
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
        Optional<Account> account = accountRepository.findById(login.getName());



        if (!account.isPresent()) {
            return false;
        }


        System.out.println("login pass " + login.getPassword());
        System.out.println("database pass " + account.get().getPassword());

        return login.getPassword().equals(account.get().getPassword());
    }

    @Transactional(readOnly = true)
    public User findUser(Long id){
        return userRepository.findById(id).orElseThrow(()->new IllegalArgumentException("Check Id"));
    }

}
