import express from 'express';

const app = express();
// router
// path -> endpoint
// restful API
app.get('/api/products', async(req, res) => {
    try {
        // fake connect database
        const response = await fetch(`http://localhost:3000/products`);
        const data = await response.json();
        // tra ve client
        res.json(data);
    } catch (error) {
        
    }
    
});
app.get('/api/products', (req, res) => {
    res.json([
        {id: 1, name: "Product A"}
    ])
});
app.post('/api/products', (req, res) => {
    res.json([
        {id: 1, name: "Product A"}
    ])
});
app.put('/api/products', (req, res) => {
    res.json([
        {id: 1, name: "Product A"}
    ])
});
app.delete('/api/products', (req, res) => {
    res.json([
        {id: 1, name: "Product A"}
    ])
});
app.listen(8080);

export const viteNodeApp = app;
