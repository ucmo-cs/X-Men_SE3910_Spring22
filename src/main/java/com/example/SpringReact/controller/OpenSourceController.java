package com.example.SpringReact.controller;

import com.example.SpringReact.domain.Book;
import com.example.SpringReact.domain.OpenSourceProjects;
import com.example.SpringReact.domain.User;
import com.example.SpringReact.service.OpenSourceProjectService;
import com.example.SpringReact.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
public class OpenSourceController {


    private final OpenSourceProjectService openSourceProjectService;

    private final UserService userService;

    @CrossOrigin
    @PostMapping("/opensource")
    public ResponseEntity<?> save(@RequestBody OpenSourceProjects openSourceProject){

        System.out.println("Project " + openSourceProject.getProject());
        String user_nmae = "test@gmail.com";
        User requester = userService.findUser(user_nmae);
        openSourceProject.setRequester(requester);

        System.out.println("License " + openSourceProject.getLicense());
        System.out.println("DateRequested " + openSourceProject.getDaterequested());
        System.out.println("Date Approved " + openSourceProject.getDateapproved());

        return new ResponseEntity<>(openSourceProjectService.create(openSourceProject), HttpStatus.CREATED);

    }


    @CrossOrigin
    @GetMapping("/opensources")
    public ResponseEntity<?> findAll(){

        System.out.println("findAll : ");
        return new ResponseEntity<>(openSourceProjectService.findAll(), HttpStatus.OK);

    }





}


