package com.repository;

import com.domain.OpenSourceProjects;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OpenSourcePrjectRepository extends JpaRepository<OpenSourceProjects,Long> {
}
