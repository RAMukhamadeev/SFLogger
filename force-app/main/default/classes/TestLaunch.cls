public class TestLaunch {
    public TestLaunch() {
        //L.log('Hello World');
        L.log('Hello World', [SELECT Id, Name FROM Account LIMIT 3]);
    }
}
