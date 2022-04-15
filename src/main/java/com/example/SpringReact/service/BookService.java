package com.example.SpringReact.service;

import com.example.SpringReact.domain.Book;
import com.example.SpringReact.domain.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.List;
import java.util.function.Supplier;

//function, algorithm, transaction

@RequiredArgsConstructor
@Service
public class BookService {

    private final BookRepository bookRepository;

    @Transactional
    public Book create(Book book){
        return bookRepository.save(book);
    }

    /*
    public Book findBook(Long id){
        return bookRepository.findById(id).orElseThrow(new Supplier<IllegalArgumentException>() {
            @Override
            public IllegalArgumentException get() {
                return new IllegalArgumentException("Check Id");
            }
        });
    }
    */
    @Transactional(readOnly = true)
    public Book findBook(Long id){
        return bookRepository.findById(id).orElseThrow(()->new IllegalArgumentException("Check Id"));
    }

    @Transactional(readOnly = true)
    public List<Book> findAll(){
        return bookRepository.findAll();
    }

    @Transactional
    public Book update(Long id, Book book){
        Book bookEntity = bookRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("check Id"));  //Persistence Context

        bookEntity.setTitle(book.getTitle());
        bookEntity.setAuthor(book.getAuthor());
        return null;
    }// When the transaction end, the persisted data to the database update the database (flush)

    @Transactional
    public String delete(Long id){
        bookRepository.deleteById(id);
        return "ok";
    }


}
