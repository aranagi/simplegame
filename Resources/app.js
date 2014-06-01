
//initialize
//スコア保存用DBを用意する
var scoreDB = Ti.Database.open('scoreDB');
scoreDB.execute('CREATE TABLE IF NOT EXISTS SCORE (ID INTEGER PRIMARY KEY AUTOINCREMENT, SCORE INTEGER)');
//TODO:プレイヤー名も保存したい
//'CREATE TABLE IF NOT EXISTS SCORE (ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT, SCORE INTEGER)'

var main = require('main');
var window = main.window;

window.open();
