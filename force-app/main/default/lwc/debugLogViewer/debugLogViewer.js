import { LightningElement, track } from 'lwc';
import { subscribe, onError } from 'lightning/empApi';

const channelName = '/event/SFLog__e';

export default class DebugLogViewer extends LightningElement {
    @track logs = [];

    connectedCallback() {
        this.registerErrorListener();
        this.launchSubscription();
    }

    launchSubscription() {
        const messageCallback = (response) => {
            console.log(JSON.stringify(response, null, 4));
            const payload = response.data.payload;
            const logEntry = {
                id: response.data.event.replayId,
                username: payload.UserName__c,
                timestamp: payload.CreatedDate,
                message: payload.Message__c,
                payload: payload.DataPayload__c ? JSON.parse(payload.DataPayload__c) : null
            };
            this.logs.push(logEntry);
        };

        subscribe(channelName, -1, messageCallback).then(response => {
            //console.log('Successfully subscribed to: ', JSON.stringify(response, null, 4));
        });
    }

    registerErrorListener() {
        onError(error => {
            console.error('Received error from server: ', JSON.stringify(error, null, 4));
        });
    }
}