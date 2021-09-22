const express = require ('express');

const app = express();

app.use((req,res)=>{
	const name = req.param('name')

	res.send('Hello '+name);
});

app.post((req,res)=>{
	res.send('Nous sommes à Paris');
});

app.get((req,res)=>req)
module.exports = app; 