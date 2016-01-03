'use strict';

const express = require('express'),
	  bodyParser = require('body-parser'),	
	  app = express();

let lastID = 3;

let db = new Set([
	{ id: 1, name: 'Frank', email: 'frank@mail.com', rating: 1, group: false },
	{ id: 2, name: 'Bill', email: 'bill@mail.com', rating: 2, group: true },
	{ id: 3, name: 'Jim', email: 'jim@mail.com', rating: 1, group: true }
])

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
})

app.get('/users', (req, res) => {
	const entities = Array.from(db);
	res.json({ entities });
});

app.post('/users', (req, res) => {
	let user = req.body;
	user.id = ++lastID;
	db.add(user);

	res.json(user);
});

app.put('/users', (req, res) => {
	const id = req.body.id;

	let modified = null;

	db = new Set(Array.from(db).map(u => {
		if(u.id !== id) return u;

		modified = Object.assign(u, req.body);
		return modified;
	}));

	res.json(modified);
});

app.delete('/users/:id', (req, res) => {
	const id = req.params.id;

	let removed = null;

	db = new Set(Array.from(db).filter(u => {
		if(u.id == id) {
			removed = u;
			return false;
		}

		return u;
	}));

	res.json(removed);
});

app.listen(7000, () => console.log('server started'));


