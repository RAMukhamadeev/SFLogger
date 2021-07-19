public class TestLaunch {
    public TestLaunch() {
        //L.log('Hello World 123123123');
        L.log('Hello World', new Map<Id, Account>([SELECT Id, Name FROM Account LIMIT 3]));
    }
}
