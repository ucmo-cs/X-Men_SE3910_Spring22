package com.example.SpringReact.repository;

import com.example.SpringReact.domain.OpenSourceProjects;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OpenSourcePrjectRepository extends JpaRepository<OpenSourceProjects,Long> {
}
