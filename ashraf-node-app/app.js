const express = require('express');
var axios = require('axios');
const app = express();
const ejs = require('ejs');
const port = 3000;
app.use(express.urlencoded({ extended: true })); // this line is required to use res.body for the post method
app.set('view engine', 'ejs');
const got = require('got');


app.get('/list', async (req, res) => {
    const response = await got('https://pokeapi.co/api/v2/pokemon?limit=15').json();
    const res_results = response.results;
    const img_urls = [];
    for (let index = 0; index < res_results.length; index++) {
        const temp = await got(`${res_results[index].url}`).json();
        img_urls[res_results[index].name]=temp.sprites.other["official-artwork"].front_default
    }
    let data = { 'pageTitle': 'List Pokemons page', 'pageHeder': 'hello' ,"res_results":res_results,img_urls:img_urls};
    res.render('ListPokemons', data); // open index file that is in views folder
});

app.get(`/details`,async (req,res)=>{
    pokeName=req.query.name;
    const response = await got(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`).json();
    const img_url = response.sprites.other["official-artwork"].front_default
    const poke_abilities = response.abilities;
    const poke_moves = response.moves;
    let data = { 'pageTitle': 'details page', "img_url":img_url,"poke_abilities":poke_abilities, "pokeName":pokeName,"poke_moves":poke_moves};
    res.render('details', data); // open index file that is in views folder
});

app.get('/about-me', (req, res) => {
    let data = { 'pageTitle': 'About me'};
    res.render('about-me',data);
});
app.get('/Tasks', async (req,res)=>{
    const response = await got('http://127.0.0.1:8000/api/Tasks').json();
    let data = { 'pageTitle': 'List of Tasks', 'Tasks':response};
    res.render('Tasks',data)
});
app.get('/',(req,res)=>{
    let data = { 'pageTitle': 'Home page'};
    res.render('home',data)
});
app.use((req,res)=>{
    res.status(404).redirect('/');
});

app.listen(port, function () {
            
    console.log(`server is started on port ${port}`);
    console.log(`http:127.0.0.1:${port}`);
});