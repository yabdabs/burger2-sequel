var connection = require("./connection.js")


var orm = {
	selectAll: function(table, cb){
		var queryString= "SELECT * FROM ??";
		connection.query(queryString, [table], function(err, result){
			if(err) throw err;
			console.log(result);
			cb(result);
		});
	},
	insertBurger: function(table, col1, burgerName, cb){
		var queryString= "INSERT INTO ??(??) VALUES(?)";
		connection.query(queryString, [table, col1, burgerName], function(err, result){
			if(err) throw err;
			console.log(result);

			cb(result);
		});
	},
	updateBurger: function(table, col1, col2, col2Val , cb){
		console.log(table, col1, col2, col2Val);
		var queryString = "UPDATE ?? SET ?? = TRUE WHERE ?? = ?";
		console.log(queryString);
		connection.query(queryString, [table, col1, col2, col2Val], function(err, result){
			console.log(queryString);
			if(err) throw err;
			console.log(result);

			cb(result);
		})
	}
}


module.exports= orm;	