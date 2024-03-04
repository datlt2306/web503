// export const viteNodeApp = app;
// import http from 'http';
import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    const data = [
        { id: 1, name: "Product A"},
        { id: 2, name: "Product B"}
    ];
    res.json(data);
});
app.listen(8080, () => {
    console.log('conntect success!')
});

// B1: npm i vite vite-plugin-node -D
// B2: tạo file vite.config.js ở root -> copy code của thầy
// B3: chỉnh sửa file package.json -> copy code của thầy
// B4: chỉnh sửa file app.js -> export const viteNodeApp = app; ở cuối file
// B5: npm run dev


// Cài đặt express: npm i express --save