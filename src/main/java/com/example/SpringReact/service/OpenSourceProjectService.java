package com.example.SpringReact.service;


import com.example.SpringReact.domain.Book;
import com.example.SpringReact.domain.BookRepository;
import com.example.SpringReact.domain.OpenSourceProjects;
import com.example.SpringReact.repository.OpenSourcePrjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
public class OpenSourceProjectService {


    private final OpenSourcePrjectRepository openSourcePrjectRepository;

    @Transactional
    public OpenSourceProjects create(OpenSourceProjects openSourceProject){
        return openSourcePrjectRepository.save(openSourceProject);
    }


    @Transactional(readOnly = true)
    public List<OpenSourceProjects> findAll(){
        return openSourcePrjectRepository.findAll();
    }




}
