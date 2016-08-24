// app.js文件

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var hbs = require('hbs');

app.use(bodyParser.urlencoded({extended: true}));
// 加载数据模块
var blogEngine = require('./data');
 
app.set('view engine', 'html');

app.engine('html', hbs.__express);

//设置静态资源
app.use(express.static('static'));
 
app.get('/', function(req, res) {
   res.render('index',{title:"最近文章", entries:blogEngine.getBlogEntries()});
});
 
app.get('/about', function(req, res) {
   res.render('about', {title:"自我介绍"});
});
 
app.get('/article/:id', function(req, res) {
   var entry = blogEngine.getBlogEntry(req.params.id);
   res.render('article',{title:entry.title, blog:entry});
});
 
app.listen(3000);