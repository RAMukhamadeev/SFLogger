public class L {
    // TODO: fix hardcoded username ...
    public static Boolean d(String message) {
        SFLog__e logEntry = new SFLog__e(
            UserName__c = 'Ruslan Mukhamadeev',
            Message__c = message
        );
        return publishEvent(logEntry);
    }
    
    public static Boolean d(String message, Object payload) {
        SFLog__e logEntry = new SFLog__e(
            UserName__c = 'Ruslan Mukhamadeev',
            Message__c = message,
            DataPayload__c = JSON.serialize(payload)
        );
        return publishEvent(logEntry);
    }
    
    private static Boolean publishEvent(SFLog__e logEntry) {
        Database.SaveResult sr = EventBus.publish(logEntry);
        Boolean res = sr.isSuccess();
		if (!sr.isSuccess()) {
            for(Database.Error err : sr.getErrors()) {
                System.debug('Error returned: ' + err.getStatusCode() + ' - ' + err.getMessage());
            }
		}
        return res;
    }
}