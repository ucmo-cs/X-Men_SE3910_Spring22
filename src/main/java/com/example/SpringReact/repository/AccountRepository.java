package com.example.SpringReact.repository;

import com.example.SpringReact.domain.Account;
import com.example.SpringReact.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account,String> {
}
