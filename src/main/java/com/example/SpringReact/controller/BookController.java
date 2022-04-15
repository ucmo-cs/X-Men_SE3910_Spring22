package com.example.SpringReact.controller;

import com.example.SpringReact.domain.Book;
import com.example.SpringReact.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class BookController {


    private final BookService bookService;
    /*
    @GetMapping("/")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<String>("ok", HttpStatus.OK);
    }
    */

    /* ResponseEntity
    ResponseEntity represents the whole HTTP response: status code, headers, and body.
    As a result, we can use it to fully configure the HTTP response.
    */

    /* @RequestBody
    Annotation indicating a method parameter should be bound to the body of the web request.
    */

    /* @RequestBody
    @PathVariable annotation can be used to handle template variables in the request URI mapping
    */

    @CrossOrigin
    @PostMapping("/book")
    public ResponseEntity<?> save(@RequestBody Book book){

        System.out.println("title " + book.getTitle());
        System.out.println("author " + book.getTitle());
        return new ResponseEntity<>(bookService.create(book), HttpStatus.CREATED);
    
    }

    @CrossOrigin
    @GetMapping("/book")
    public ResponseEntity<?> findAll(){
        return new ResponseEntity<>(bookService.findAll(), HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/book/{id}")
    public ResponseEntity<?> findAll(@PathVariable Long id){
        return new ResponseEntity<>(bookService.findBook(id), HttpStatus.OK);
    }
    @CrossOrigin
    @PutMapping("/book/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Book book){
        return new ResponseEntity<>(bookService.update(id, book), HttpStatus.OK);
    }
    @CrossOrigin
    @DeleteMapping("/book/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id, @RequestBody Book book){
        return new ResponseEntity<>(bookService.delete(id), HttpStatus.OK);
    }

}
