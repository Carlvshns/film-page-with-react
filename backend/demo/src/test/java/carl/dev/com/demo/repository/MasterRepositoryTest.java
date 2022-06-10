package carl.dev.com.demo.repository;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import carl.dev.com.demo.domain.Master;
import carl.dev.com.demo.util.MasterCreator;

@DataJpaTest
@DisplayName("Tests for Master Repository")
public class MasterRepositoryTest {

    @Autowired
    private MasterRepository masterRepository;

    @Test
    @DisplayName("FindByPassphrase return Master when Sucessful")
    void findByPassphrase_ReturnsMaster_WhenSucessful(){
        Master masterToBeSaved = MasterCreator.masterCreator();
        
        this.masterRepository.save(masterToBeSaved);

        Master master = this.masterRepository.findByPassphrase(masterToBeSaved.getPassphrase());

        Assertions.assertEquals("rock", master.getPassphrase());
    }
}
