package carl.dev.com.demo.service;

import org.springframework.stereotype.Service;

import carl.dev.com.demo.domain.Master;
import carl.dev.com.demo.repository.MasterRepository;

@Service
public class MasterService {
    
    private MasterRepository masterRepository;

    public MasterService(MasterRepository masterRepository) {
        this.masterRepository = masterRepository;
    }

    public String findByPassphraseAndReturnPassphraseString(String pass){
        Master master = masterRepository.findByPassphrase(pass);
        return master.getPassphrase();
    }
}
