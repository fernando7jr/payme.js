const request = require('supertest');


describe('The api', () => {
    let app;

    before(done => {
        const port = 3033;
        app = require('../app');

        app.listen(port, err => {
            if (err) {
                return done(err);
            }
            done();
        });
    });

    it('should receive a message "OK" from the server', done => {
        request(app)
            .get('/')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /application\/json/)
            .expect(200, '"OK"', done);
    });
});
