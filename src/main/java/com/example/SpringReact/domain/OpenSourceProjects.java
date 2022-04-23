package com.example.SpringReact.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OpenSourceProjects {
// (project, requester, license, state, date
//requested, date approved,

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    @Column(name="project_id")
    private Long project_id;

    private String project;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User requester;

    private String dateapproved;

    private String daterequested;

    private String description;

    private String license;

    private String state;

    private String status;

    private String url;

}
