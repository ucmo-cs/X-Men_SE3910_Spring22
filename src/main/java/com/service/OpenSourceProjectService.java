package com.service;

import com.domain.OpenSourceProjects;
import com.repository.OpenSourcePrjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
public class OpenSourceProjectService {


    private final OpenSourcePrjectRepository openSourcePrjectRepository;

    @Transactional
    public OpenSourceProjects create(OpenSourceProjects openSourceProject){
        return openSourcePrjectRepository.save(openSourceProject);
    }
}
