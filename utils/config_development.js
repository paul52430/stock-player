var config ={
	port:5080,
	db_mongo: {
		cookie_secret: "STOCK",
		url: 'mongodb://localhost/user'
	},
	db_mysql: {
		connectionLimit: 150,
		host: "localhost",
		port: "3306",
		user: 'jisu3',
		password: '12225502',
		database: 'stock_user'
	}
}

module.exports = config;