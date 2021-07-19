import { LightningElement } from 'lwc';
import log from '@salesforce/apex/LoggerController.log';

export default class HelloWorld extends LightningElement {
    greeting = 'World';
    changeHandler(event) {
      this.greeting = event.target.value;
    }

    handleClick(event) {
        console.log('in click');
        log("hello from js");
    }
  }