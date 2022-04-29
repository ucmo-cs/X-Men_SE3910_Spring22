package com.example.SpringReact.repository;

import com.example.SpringReact.domain.OpenSourceProjects;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OpenSourcePrjectRepository extends JpaRepository<OpenSourceProjects,Long> {
}
