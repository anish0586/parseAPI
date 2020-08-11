describe('Task API Routes', function() {
    // This function will run before every test
    beforeEach(function(done) {      
      done();
    });

    // Testing the v1 parse endpoint
    describe('POST /api/v1/parse', function() {
        it('Success: JOHN MICHAEL 9994567', function(done) {
            request.post('/api/v1/parse')
                .send({ "data": "JOHN0000MICHAEL0009994567" })
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.firstName).to.eql('JOHN0000');
                    expect(res.body.lastName).to.eql('MICHAEL000');
                    expect(res.body.clientId).to.eql('9994567');
                    done(err);
                });
        });

        it('Success: ANISH AKHAURI 12394567', function(done) {
            request.post('/api/v1/parse')
                .send({ "data": "ANISH00000000AKHAURI0012394567" })
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.firstName).to.eql('ANISH00000000');
                    expect(res.body.lastName).to.eql('AKHAURI00');
                    expect(res.body.clientId).to.eql('12394567');
                    done(err);
                });
        });

        it('Success: ANISH AKHAURI 143323', function(done) {
            request.post('/api/v1/parse')
                .send({ "data": "ANISH0AKHAURI0143323" })
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.firstName).to.eql('ANISH0');
                    expect(res.body.lastName).to.eql('AKHAURI0');
                    expect(res.body.clientId).to.eql('143323');
                    done(err);
                });
        });

        it('Failure: payload missing', function(done) {
            request.post('/api/v1/parse')
                .send({ })
                .expect(400)
                .end(function(err, res) {
                    expect(res.text).to.eql('payload missing');
                    expect(res.body.firstName).to.eql(undefined);
                    expect(res.body.lastName).to.eql(undefined);
                    expect(res.body.clientId).to.eql(undefined);
                    done(err);
                });
        });
    });

    // Testing the v2 parse endpoint
    describe('POST /api/v2/parse', function() {
        it('Success: JOHN MICHAEL 9994567', function(done) {
            request.post('/api/v2/parse')
                .send({ "data": "JOHN0000MICHAEL0009994567" })
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.firstName).to.eql('JOHN');
                    expect(res.body.lastName).to.eql('MICHAEL');
                    expect(res.body.clientId).to.eql('999-4567');
                    done(err);
                });
        });

        it('Success: ANISH AKHAURI 12394567', function(done) {
            request.post('/api/v2/parse')
                .send({ "data": "ANISH00000000AKHAURI0012394567" })
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.firstName).to.eql('ANISH');
                    expect(res.body.lastName).to.eql('AKHAURI');
                    expect(res.body.clientId).to.eql('123-94567');
                    done(err);
                });
        });

        it('Success: ANISH AKHAURI 143323', function(done) {
            request.post('/api/v2/parse')
                .send({ "data": "ANISH0AKHAURI0143323" })
                .expect(200)
                .end(function(err, res) {
                    expect(res.body.firstName).to.eql('ANISH');
                    expect(res.body.lastName).to.eql('AKHAURI');
                    expect(res.body.clientId).to.eql('143-323');
                    done(err);
                });
        });

        it('Failure: payload missing', function(done) {
            request.post('/api/v2/parse')
                .send({ })
                .expect(400)
                .end(function(err, res) {
                    expect(res.text).to.eql('payload missing');
                    expect(res.body.firstName).to.eql(undefined);
                    expect(res.body.lastName).to.eql(undefined);
                    expect(res.body.clientId).to.eql(undefined);
                    done(err);
                });
        });
    });

    afterEach(function(done) {      
        done();
      });
  });