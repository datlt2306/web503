// B1: npm i vite vite-plugin-node -D
// B2: tạo file vite.config.js ở root -> copy code của thầy
// B3: chỉnh sửa file package.json -> copy code của thầy
// B4: chỉnh sửa file app.js -> export const viteNodeApp = app; ở cuối file
// B5: npm run dev

// Cài đặt express: npm i express --save

import express from 'express';

const app = express();

app.use(express.json())

app.get(`/api/products`, async(req, res) => {
    try {
        const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`);
        const data = await response.json();
        res.json(data);    
    } catch (error) {
        res.status(400).json({
            message: "Lỗi cmnr"
        })
    }
    
})
app.get(`/api/products/:id`, async (req, res) => {
    try {
        const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${req.params.id}`);
        const data = await response.json();
        // trả về client
        res.json(data);    
    } catch (error) {
        res.status(400).json({
            message: "Lỗi cmnr"
        })
    }
});
app.post(`/api/products`, async(req, res) => {
    try {
        const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body),
        });
        const data = await response.json();
        // trả về client
        res.json(data);    
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})
app.delete(`/api/products/:id`, async (req, res) => {
    try {
        const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${req.params.id}`, {
            method: "DELETE",
        });
        const data = await response.json();
        // trả về client
        res.json(data);    
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})
app.put(`/api/products/:id`, async (req, res) => {
    try {
        const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${req.params.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body),
        });
        const data = await response.json();
        // trả về client
        res.json(data);    
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
})
// restful API

app.listen(8080, () => {
    console.log('Started')
})

export const viteNodeApp = app;