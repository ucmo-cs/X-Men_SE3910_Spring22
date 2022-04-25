package com.example.SpringReact.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {

    @Id
    private String name;

    private String firstname;

    private String lastname;

    private String joinDate;

    private String password;

    private Boolean approver;

}
