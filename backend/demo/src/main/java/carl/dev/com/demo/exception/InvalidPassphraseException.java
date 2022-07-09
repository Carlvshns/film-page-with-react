package carl.dev.com.demo.exception;

public class InvalidPassphraseException extends RuntimeException {

    public InvalidPassphraseException(String message) {
        super(message);
    }
}
