package com.example.SpringReact.controller;

import com.example.SpringReact.domain.OpenSourceProjects;
import com.example.SpringReact.domain.User;
import com.example.SpringReact.repository.OpenSourcePrjectRepository;
import com.example.SpringReact.service.OpenSourceProjectService;
import com.example.SpringReact.service.UserService;
import lombok.RequiredArgsConstructor;
import org.aspectj.apache.bcel.classfile.Module;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RequiredArgsConstructor
@RestController
public class OpenSourceController {


    @Autowired
    private final OpenSourceProjectService openSourceProjectService;

    @Autowired
    private final OpenSourcePrjectRepository openSourcePrjectRepository;

    @Autowired
    private final UserService userService;

    @CrossOrigin
    @RequestMapping(value="/opensource/{userID}", method=RequestMethod.POST)
    public ResponseEntity<?> save(@PathVariable String userID, @RequestBody OpenSourceProjects openSourceProject){

        System.out.println("Project " + openSourceProject.getProject());
        User requester = userService.findUser(userID);
        openSourceProject.setRequester(requester);

        return new ResponseEntity<>(openSourceProjectService.create(openSourceProject), HttpStatus.CREATED);

    }

    @CrossOrigin
    @GetMapping("/opensources")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(openSourceProjectService.findAll(), HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/opensources/{id}")
    public ResponseEntity<OpenSourceProjects> findProject(@PathVariable Long id){
        Optional<OpenSourceProjects> project = openSourcePrjectRepository.findById(id);

        if (!project.isPresent()){
            throw new UserNotFoundException(String.format("Project[%d] not found", id));
        }

        return new ResponseEntity(project.get(), HttpStatus.OK);
    }

    @CrossOrigin
    @PutMapping("/updtsources")
    public ResponseEntity<?> updateProject(@RequestBody OpenSourceProjects openSourceProject){
        return new ResponseEntity(openSourcePrjectRepository.save(openSourceProject), HttpStatus.CREATED);
    }

    @CrossOrigin
    @DeleteMapping("/removesource/{id}")
    public void delete(@PathVariable Long id) {
        System.out.println("delete " + id);
        openSourcePrjectRepository.deleteById(id);
    }





}


