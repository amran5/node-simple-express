const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
//body perse
app.use(express.json());
const port = 4000;

const friends = [
    { name: 'ohid', id: 0, email: 'ohid@gmail.com', phone: '0160000045' },
    { name: 'shahin', id: 1, email: 'shahin@gmail.com', phone: '0160000046' },
    { name: 'raju', id: 2, email: 'raju@gmail.com', phone: '0160000047' },
    { name: 'shakib', id: 3, email: 'shakib@gmail.com', phone: '0160000048' },
    { name: 'faruq', id: 4, email: 'faruq@gmail.com', phone: '0160000049' },
    { name: 'rasen', id: 5, email: 'rasen@gmail.com', phone: '0160000050' }
]

app.get('/', (req, res) => {
    res.send('my second node');
});

app.get('/user', (req, res) => {
    // search=any same name your data
    const search = req.query.search;
    if (search) {
        const searchResult = friends.filter(friend => friend.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(friends);
    };
});

// post.METHOD
app.post('/user', (req, res) => {
    const newUser = req.body;
    newUser.id = friends.length;
    friends.push(newUser);
    console.log('touching the data', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
});

// dynamic data
app.get('/user/:id', (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    const friend = friends[id];
    res.send(friend);
})
app.listen(port, () => {
    console.log('this is node port', port)
})