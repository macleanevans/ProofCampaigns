var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../src/server.js');
var should = chai.should();
var assert = chai.assert;

chai.use(chaiHttp);

describe('Login Route', function(){
    it('Should send back message -- No user exists with this username -- when sent no username or password ', function (done) {
        chai.request(server)
            .post('/login')
            .send({})
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('success');
                res.body.should.have.property('data');
                res.body.should.have.property('errors');
                assert.equal(res.body.errors[0].message, "No user exists with this username.")
                done();
            });
    });
    it('Should send back message -- The password is incorrect. -- when sent no username or password ', function (done) {
        chai.request(server)
            .post('/login')
            .send({username: "user_1", password: "wrong"})
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('success');
                res.body.should.have.property('data');
                res.body.should.have.property('errors');
                assert.equal(res.body.errors[0].message, "The password is incorrect.")
                done();
            });
    });
    it('Return a jwt token when sent the correct username and password', function (done) {
        chai.request(server)
            .post('/login')
            .send({ username: "user_2", password: "test" })
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('success');
                assert.equal(res.body.success, true)
                res.body.should.have.property('data');
                assert.isDefined(res.body.data.token);
                done();
            });
    });
})

const user = {username: "user_2", password: "test"};
const newCampaignList = [{ "name": "Software", "imageName": "Software.jpg", "description": "Users in Software" }, { "name": "smb", "imageName": "smb.jpg", "description": "Users in Company Size 100 - 200" }]

describe('Update Campaign List Route', function(){
    it("Should update the mongo use with a new list of collections", function (done) {
        chai.request(server)
            .put('/updateCampaignList')
            .send({user, newCampaignList})
            .end(function (err, res) {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('success');
                assert.equal(res.body.success, true);
                res.body.should.have.property('data');
                assert.equal(res.body.data.campaigns.length, 2);
                done();
            });
    });
})
