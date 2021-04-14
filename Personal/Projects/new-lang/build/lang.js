"use strict";
var fs = require("fs");
var returnIt = "";
var setLimit = 1;
for (var i = 0; i < setLimit; i++) {
    // Verbs
    var randomVerb = function (words) {
        var readME = fs.readFileSync("dictionary/verbs.txt", "utf8");
        var wordArr = readME.split(", ");
        words = words > wordArr.length ? wordArr.length : words;
        var randWords = [];
        for (var i_1 = 0; i_1 < words; i_1++) {
            var newRandom = void 0;
            do {
                var rand = Math.floor(Math.random() * wordArr.length);
                newRandom = wordArr[rand];
            } while (randWords.includes(newRandom));
            randWords.push(newRandom);
        }
        return randWords.join(", ");
    };
    // Nouns
    var randomNoun = function (words) {
        var readME = fs.readFileSync("dictionary/nouns.txt", "utf8");
        var wordArr = readME.split(", ");
        words = words > wordArr.length ? wordArr.length : words;
        var randWords = [];
        for (var i_2 = 0; i_2 < words; i_2++) {
            var newRandom = void 0;
            do {
                var rand = Math.floor(Math.random() * wordArr.length);
                newRandom = wordArr[rand];
            } while (randWords.includes(newRandom));
            randWords.push(newRandom);
        }
        return randWords.join(", ");
    };
    // Articles
    var randomArt = function (words) {
        var readME = fs.readFileSync("dictionary/articles.txt", "utf8");
        var wordArr = readME.split(", ");
        words = words > wordArr.length ? wordArr.length : words;
        var randWords = [];
        for (var i_3 = 0; i_3 < words; i_3++) {
            var newRandom = void 0;
            do {
                var rand = Math.floor(Math.random() * wordArr.length);
                newRandom = wordArr[rand];
            } while (randWords.includes(newRandom));
            randWords.push(newRandom);
        }
        return randWords.join(", ");
    };
    // Articles 2
    var randomArt2 = function (words) {
        var readME = fs.readFileSync("dictionary/art2.txt", "utf8");
        var wordArr = readME.split(", ");
        words = words > wordArr.length ? wordArr.length : words;
        var randWords = [];
        for (var i_4 = 0; i_4 < words; i_4++) {
            var newRandom = void 0;
            do {
                var rand = Math.floor(Math.random() * wordArr.length);
                newRandom = wordArr[rand];
            } while (randWords.includes(newRandom));
            randWords.push(newRandom);
        }
        return randWords.join(", ");
    };
    // Adjectives
    var randomAdj = function (words) {
        var readME = fs.readFileSync("dictionary/adjectives.txt", "utf8");
        var wordArr = readME.split(", ");
        words = words > wordArr.length ? wordArr.length : words;
        var randWords = [];
        for (var i_5 = 0; i_5 < words; i_5++) {
            var newRandom = void 0;
            do {
                var rand = Math.floor(Math.random() * wordArr.length);
                newRandom = wordArr[rand];
            } while (randWords.includes(newRandom));
            randWords.push(newRandom);
        }
        return randWords.join(", ");
    };
    function combineIt() {
        var nounPhrase = randomArt2(1) + " " + randomAdj(1) + " " + randomNoun(1) + " ";
        var verbPhrase = randomVerb(1) +
            " " +
            randomArt(1) +
            " " +
            randomAdj(1) +
            " " +
            randomNoun(1) +
            ". ";
        return nounPhrase + verbPhrase;
    }
    returnIt = returnIt + combineIt();
}
returnIt = returnIt + ".";
console.log(returnIt);
