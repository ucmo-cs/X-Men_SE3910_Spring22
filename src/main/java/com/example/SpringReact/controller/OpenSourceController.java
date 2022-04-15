package com.example.SpringReact.controller;

import com.example.SpringReact.domain.Book;
import com.example.SpringReact.domain.OpenSourceProjects;
import com.example.SpringReact.domain.User;
import com.example.SpringReact.service.OpenSourceProjectService;
import com.example.SpringReact.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
public class OpenSourceController {


    private final OpenSourceProjectService openSourceProjectService;

    private final UserService userService;

    @CrossOrigin
    @PostMapping("/opensource")
    public ResponseEntity<?> save(@RequestBody OpenSourceProjects openSourceProject){

        System.out.println("Project " + openSourceProject.getProject());
        int user_id = 1;
        User requester = userService.findUser((long) user_id);
        openSourceProject.setRequester(requester);

        System.out.println("License " + openSourceProject.getLicense());
        System.out.println("DateRequested " + openSourceProject.getDaterequested());
        System.out.println("Date Approved " + openSourceProject.getDateapproved());


        return new ResponseEntity<>(openSourceProjectService.create(openSourceProject), HttpStatus.CREATED);

    }

}


