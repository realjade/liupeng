var logger = require('koa-logger');
var session = require('koa-generic-session');
var redisStore = require('koa-redis');
var mount = require('koa-mount');
var serve = require('koa-static')
var koa = require('koa')
var views = require('koa-views');
var ua   = require('mobile-agent');
var config = require('./config');
var app = koa();

// middleware
app.use(logger());

app.keys = ['iwfe'];

app.use(views(`${__dirname}/view`, {
    extension: 'jade'
}));

app.use(mount('/static', serve('static')));

app.use(function *(next) {
    this.locals = {}

    this.set({
        'Pragma': 'No-cache',
        'Cache-Control': 'no-cache'
    })
    var agent = ua(this.get('User-Agent'));

    this.locals.agent = agent;
    this.locals.staticUrl = config.staticUrl;

    yield next;
});

var router = require('./router');

app.use(router.routes());

app.use(function *(next) {

});

app.on('error', function(err){
    console.log('sent error %s to the cloud', err.message);
    console.log(err);
});

module.exports = app;
