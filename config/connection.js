var mysql = require("mysql");

var source = {
	localhost: {
		host: "localhost",
		user: "root",
		password: "password",
		database: "burgers_db"
	}
};

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
  });
 

connection.connect(function (err) {
	if (err) {
		console.error("Connection error: " + err.stack);
		return;
	}
	console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;