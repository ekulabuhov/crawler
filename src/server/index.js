var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

var url = 'https://techcrunch.com/';

app.get('/listTolkbacks', (req, res) => {
  request(url, (error, response, html) => {
    if (!error) {
      var $ = cheerio.load(html);

      var articles = $('.river-block .post-title a');

      var response = articles.map((index, article) => {
        return {
          title: $(article).text(),
          url: $(article).attr('href')
        }
      }).get();

      res.json(response);
    }
  })
})

app.listen(8081);
console.log('http://localhost:8081/listTolkbacks');

app.use(express.static('./'))
app.use(express.static('./src/client'))