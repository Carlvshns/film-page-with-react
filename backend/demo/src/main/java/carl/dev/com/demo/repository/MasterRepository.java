package carl.dev.com.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import carl.dev.com.demo.domain.Master;

public interface MasterRepository extends JpaRepository<Master, Long>{
    
    Master findByPassphrase(String passphrase);
}
