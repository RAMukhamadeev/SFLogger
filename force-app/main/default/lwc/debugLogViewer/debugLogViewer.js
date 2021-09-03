import { LightningElement, track } from 'lwc';
import { subscribe, onError } from 'lightning/empApi';

const channelName = '/event/SFLog__e';

export default class DebugLogViewer extends LightningElement {
    @track logs = [];

    connectedCallback() {
        // debug only
        let log = JSON.parse('{"id":37749936,"username":"Ruslan Mukhamadeev","timestamp":"2021-07-20T23:31:58Z","message":"Hello World","payload":[{"attributes":{"type":"Account","url":"/services/data/v52.0/sobjects/Account/0010Y00000EI63cQAD"},"Id":"0010Y00000EI63cQAD","Name":"GenePoint"},{"attributes":{"type":"Account","url":"/services/data/v52.0/sobjects/Account/0010Y00000EI63aQAD"},"Id":"0010Y00000EI63aQAD","Name":"United Oil & Gas, UK"},{"attributes":{"type":"Account","url":"/services/data/v52.0/sobjects/Account/0010Y00000EI63bQAD"},"Id":"0010Y00000EI63bQAD","Name":"United Oil & Gas, Singapore"}]}');
        if (log.payload) {
            for (let i = 0; i < log.payload.length; i++) {
                delete log.payload[i].attributes;
            }
            log.payload = JSON.stringify(log.payload, null, 2);
        } 
        this.logs.push(log);

        const log2 = JSON.parse('{"id":37749937,"username":"Ruslan Mukhamadeev","timestamp":"2021-07-20T23:31:58Z","message":"Hello World","payload":[{"attributes":{"type":"Account","url":"/services/data/v52.0/sobjects/Account/0010Y00000EI63cQAD"},"Id":"0010Y00000EI63cQAD","Name":"GenePoint"},{"attributes":{"type":"Account","url":"/services/data/v52.0/sobjects/Account/0010Y00000EI63aQAD"},"Id":"0010Y00000EI63aQAD","Name":"United Oil & Gas, UK"},{"attributes":{"type":"Account","url":"/services/data/v52.0/sobjects/Account/0010Y00000EI63bQAD"},"Id":"0010Y00000EI63bQAD","Name":"United Oil & Gas, Singapore"}]}');
        if (log2.payload) {
            log2.payload = JSON.stringify(log2.payload, null, 2);
        } 
        this.logs.push(log2);

        const log3 = JSON.parse('{"id":37749937,"username":"Ruslan Mukhamadeev","timestamp":"2021-07-20T23:31:58Z","message":"Hello World","payload":[{"attributes":{"type":"Account","url":"/services/data/v52.0/sobjects/Account/0010Y00000EI63cQAD"},"Id":"0010Y00000EI63cQAD","Name":"GenePoint"},{"attributes":{"type":"Account","url":"/services/data/v52.0/sobjects/Account/0010Y00000EI63aQAD"},"Id":"0010Y00000EI63aQAD","Name":"United Oil & Gas, UK"},{"attributes":{"type":"Account","url":"/services/data/v52.0/sobjects/Account/0010Y00000EI63bQAD"},"Id":"0010Y00000EI63bQAD","Name":"United Oil & Gas, Singapore"}]}');
        if (log3.payload) {
            log3.payload = JSON.stringify(log3.payload, null, 2);
        } 
        this.logs.push(log3);

        this.registerErrorListener();
        this.launchSubscription();
    }

    launchSubscription() {
        const messageCallback = (response) => {
            const payload = response.data.payload;
            const logEntry = {
                id: response.data.event.replayId,
                username: payload.UserName__c,
                timestamp: payload.CreatedDate,
                message: payload.Message__c,
                payload: payload.DataPayload__c ? JSON.parse(payload.DataPayload__c) : null
            };

            if (logEntry.payload) {
                logEntry.payload = JSON.stringify(logEntry.payload, null, 2);
            } 
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