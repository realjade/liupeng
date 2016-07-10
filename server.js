#!/usr/bin/env node
var app = require('./app')

console.log('服务已经启动....端口：3333');

// listen
app.listen(3333);