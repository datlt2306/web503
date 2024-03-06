// B1: npm i vite vite-plugin-node -D
// B2: tạo file vite.config.js ở root -> copy code của thầy
// B3: chỉnh sửa file package.json -> copy code của thầy
// B4: chỉnh sửa file app.js -> export const viteNodeApp = app; ở cuối file
// B5: npm run dev

// Cài đặt express: npm i express --save

import express from 'express';

const app = express();

app.use(express.json())

app.get(`/api/products`, (req, res) => {
    res.json([{id: 1, name: "Product A"}])
})
app.get(`/api/users`, (req, res) => {
    res.json([{id: 1, name: "Product A"}])
})
app.get(`/api/categories`, (req, res) => {
    res.json([{id: 1, name: "Product A"}])
})
app.get(`/api/products/:id`, (req, res) => {
    console.log(req.params)
});
app.post(`/api/products`, (req, res) => {
    console.log(req.body)
})
app.delete(`/api/products/:id`, (req, res) => {
    console.log(req.body)
})
app.put(`/api/products/:id`, (req, res) => {
    console.log(req.body)
})
// restful API

app.listen(8080, () => {
    console.log('Started')
})

export const viteNodeApp = app;