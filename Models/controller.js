const sql2 = require('../sql2');

exports.getAll = function(table,callback) {
    var req = "SELECT * FROM "+ table;
        sql2.query(req, function(err,rows){
            if(err){
                console.log('Error ya pas de table de ce nom');
            }
            callback(rows)
        })
}