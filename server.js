const express = require('express');
const app = express();
const path = require('path');
const PORT = 3056;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
