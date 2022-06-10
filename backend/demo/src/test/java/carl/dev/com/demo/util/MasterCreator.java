package carl.dev.com.demo.util;

import carl.dev.com.demo.domain.Master;

public class MasterCreator {
    
    public static Master masterCreator(){
        Master master = new Master();
        master.setPassphrase("rock");
        return master;
    }
}
