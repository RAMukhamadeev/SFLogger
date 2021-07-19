public without sharing class Logger {
    /*
    public String message = null;
    public String tags  = null;
    public Object payload  = null;
    public String logLevel = 'Info';

    public Logger() {
    }

    public void save() {
        Log__c log = getLog();
        insert log;

        SFLog__e event = getEventFromLog(log);
        publishEvent(event);
    }

    public Logger setMessage(String message) {
        this.message = message;

        return this;
    }

    public Logger setTags(String tags) {
        this.tags = tags;

        return this;
    }

    public Logger setLogLevel(String logLevel) {
        this.logLevel = logLevel;

        return this;
    }

    public Logger setPayload(Object payload) {
        this.payload = payload;

        return this;
    }

    private Log__c getLog() 
    {
        Log__c log = new Log__c(LogLevel__c = this.logLevel);
        if (this.message != null) {
            log.Message__c = this.message;
        }
        if (this.tags  != null) {
            log.Tags__c = this.tags;
        }
        if (this.payload  != null) {
            log.Payload__c = JSON.serialize(this.payload);
        }

        return log;
    }

    private SFLog__e getEventFromLog(Log__c log) {
        SFLog__e event = new SFLog__e(
            DataPayload__c = log.Payload__c,
            Message__c = log.Message__c,
            Tags__c = log.Tags__c,
            UserName__c = getUserNameById(UserInfo.getUserId())
        );


        return event;
    }

    private Boolean publishEvent(SFLog__e event) {
        Database.SaveResult sr = EventBus.publish(event);
        Boolean res = sr.isSuccess();
		if (!sr.isSuccess()) {
            for(Database.Error err : sr.getErrors()) {
                System.debug('Error returned: ' + err.getStatusCode() + ' - ' + err.getMessage());
            }
		}
        return res;
    }

    private String getUserNameById(Id userId) {
        User user = [SELECT Id, Username FROM User WHERE Id = :userId];
        return user.Username;
    }
    */
}
