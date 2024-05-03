# Unit testing

Unit testing involves testing your application’s code and logic, which includes anything that your application can do on its own without having to rely on external services or data.

# Integration testing

Integration testing involves testing your application as it connects with services inside or outside of the application. This could include connecting different parts of your application or connecting two different applications in a larger umbrella project.

As part of integration testing, we can also perform tests on the Data Access Object (DAO) to confirm that data is flowing properly.

# Mocha?

Mocha is a test runner that enables you to exercise your Node.js code. Mocha works well with any Node.js project and follows the basic Jasmine syntax, which is similar to the following code borrowed from the Mocha getting started docs:

```
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

With Mocha, you can also include the use of assertion libraries like assert, expect, and others. Mocha also has many features within the test runner itself.

# Chai and Chai HTTP?

Chai offers an assertion library for Node.js that includes basic assertions that you can use to verify behavior; some of the more popular ones include should, expect, and assert.

You can use these in your tests to evaluate the conditions of the code you’re testing, for example, the following code borrowed from Chai’s homepage:

chai.should();

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
tea.should.have.property('flavors')
  .with.lengthOf(3);

Chai-HTTP is a plugin that offers a full-fledged test runner that will actually run your application and test its endpoints directly:

```
describe('GET /films-list', () => {
  it('should return a list of films when called', done => {
    chai
      .request(app)
      .get('/films-list')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.deep.equal(starwarsFilmListMock);
        done();
      });
  });
});
```

With Chai HTTP, the test runner starts your application, calls the requested endpoint, and then brings it down all in one command. This is really powerful, helping to perform integration tests on your application.