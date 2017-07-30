/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://tejaswee:tejaswee@ds129003.mlab.com:29003/webice8';// change it with your db credentials

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var myobj = [
        {Id: '4af31b30f964a520b3ea21e3', Name: 'Flarsheim hall'},
        {Id: '4b019e70f964a520ff4322e3', Name: 'Haag hall'},
        {Id: '4b944769f964a520a37234e3', Name: 'Royal hall'},
        {Id: '4bbcc68fa0a0c9b696c61a0f', Name: 'Miller Nichols library'},
        {Id: '55008ea0498ef17172c53198', Name: 'Atterbury Success Center'},
        {Id: '58bef838eef5da0959f053f7', Name: 'School of Education'},
        {Id: '58c70a133e88355bb46c240d', Name: 'Administration Block'},
        {Id: '4abd956af964a5200c8b20e3', Name: 'kcRep'},
        {Id: '4adfb4aaf964a520de7c21e3', Name: 'Swinney Recreation Center'},
    ];
    db.collection("university").insertMany(myobj, function (err, res) {
        if (err) throw err;
        db.close();
    });
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.collection("university").find({}).toArray(function (err, result) {
        if (err) throw err;
        db.close();
        var fs = require('fs');
        var data = []
        for (i = 0; i < 10; i++) {
            var obj = {
                name: result[i].Name,
                id: result[i].Id

            }
            data.push(obj)
        }
        var newdata = [{
            "name": "University of Missouri-Kansas City",
            "parent": "VolkerCampus",
            "children": data
        }
        ]
        fs.writeFile("Restaurants.json", JSON.stringify(newdata), function (err) {
                if (err) throw err;
            }
        );
    });
});