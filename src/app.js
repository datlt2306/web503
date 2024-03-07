import express from 'express';

const app = express();

// middleware
app.use(express.json());


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
        res.status(500).json({message: error.message});
    }
});
// Chi tiết sản phẩm
app.get('/api/products/:id', async (req, res) => {
    try {
        // fake connect database
        const response = await fetch(`http://localhost:3000/products/${req.params.id}`);
        const data = await response.json();
        // tra ve client
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// thêm sản phẩm
app.post('/api/products', async (req, res) => {
    try {
        // fake connect database
        const response = await fetch(`http://localhost:3000/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        // tra ve client
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
// Xóa sản phẩm
app.delete('/api/products/:id', async (req, res) => {
    try {
        // fake connect database
        const response = await fetch(`http://localhost:3000/products/${req.params.id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        // tra ve client
        res.status(200).json({
            message: "Xóa sản phẩm thành công",
            data
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.put('/api/products/:id', async (req, res) => {
    try {
        // fake connect database
        const response = await fetch(`http://localhost:3000/products/${req.params.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        // tra ve client
        res.status(200).json({
            message: "Cập nhật sản phẩm thành công",
            data
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});
app.listen(8080);

export const viteNodeApp = app;
