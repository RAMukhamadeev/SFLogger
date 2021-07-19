public with sharing class LoggerController {

    @AuraEnabled
    public static void log(String message) {
        try {
            Logger logger = new Logger();
            logger.setMessage(message).save();
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}