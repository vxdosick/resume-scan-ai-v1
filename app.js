const express = require('express');
const app = express();
const path = require('path');
const promptRoutes = require('./routes/promptRoutes');
const errorRoutes = require('./routes/errorRoutes');
const PORT = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/send-prompt', promptRoutes);
app.use('/error', errorRoutes);

app.get('/', (req, res) => {
    res.render('index', {title: "ResumeScanAi"});
})

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})