package carl.dev.com.demo.service;

import carl.dev.com.demo.domain.Master;
import carl.dev.com.demo.repository.MasterRepository;

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
