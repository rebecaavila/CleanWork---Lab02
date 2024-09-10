const router = require('express').Router();

router.get('/about', (req, res) => {
    res.sendFile('about.html', { root: path.join(__dirname, 'static') });
});

router.get('/contact', (req, res) => {
    res.sendFile('contact.html', { root: path.join(__dirname, 'static') });
});

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'static') });
});

router.get('/services', (req, res) => {
    res.sendFile('services.html', { root: path.join(__dirname, 'static') });
});

router.get('/services-detail', (req, res) => {
    res.sendFile('services-detail.html', { root: path.join(__dirname, 'static') });
});

module.exports = router;
