package com.example.SpringReact.service;

import com.example.SpringReact.domain.Book;
import com.example.SpringReact.domain.BookRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class BookServiceTest {

    @Autowired BookRepository bookRepository;
    @Autowired BookService bookService;

    @Test
    void create() {

        Book book = new Book();
        book.setTitle("Harry Potter");
        book.setTitle("J.K.Rolling");
        bookService.create(book);

        System.out.println(book.getTitle());
        System.out.println(book.getId());
        Book result = bookService.findBook(book.getId());
        assertEquals(book, result);

    }

    @Test
    void findBook() {
    }

    @Test
    void findAll() {
    }
}