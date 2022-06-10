package carl.dev.com.demo.service;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.BDDMockito;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import carl.dev.com.demo.domain.Master;
import carl.dev.com.demo.repository.MasterRepository;
import carl.dev.com.demo.util.MasterCreator;

@ExtendWith(SpringExtension.class)
public class MasterServiceTest {

    @InjectMocks
    private MasterService masterService;
    @Mock
    private MasterRepository masterRepositoryMock;

    @BeforeEach
    void setUp(){
        BDDMockito.when(masterRepositoryMock.findByPassphrase(ArgumentMatchers.anyString()))
        .thenReturn(MasterCreator.masterCreator());
    }

    @Test
    @DisplayName("findByPassphrase returns string when sucessful")
    void findByPassphrase_ReturnsString_WhenSucessful() {
        Master expectedMaster = MasterCreator.masterCreator();
        String master = masterService.findByPassphraseAndReturnPassphraseString(expectedMaster.getPassphrase());

        Assertions.assertNotNull(master);

        Assertions.assertEquals(expectedMaster.getPassphrase(), master);

    }
}
