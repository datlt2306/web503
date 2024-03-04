// export const viteNodeApp = app;
import http from 'http';
const server = http.createServer((req, res) => {
    console.log(req)
    if(req.url === '/'){
        res.end('Home Page');
    } else if(req.url === '/api/products'){
        const data = [
            { id: 1, name: "Product A"},
            { id: 2, name: "Product B"},
            { id: 3, name: "Product C"},
        ]
        res.end(JSON.stringify(data));
    }
});

server.listen(8080, () => {
    console.log('conntect success!')
});

// B1: npm i vite vite-plugin-node -D
// B2: tạo file vite.config.js ở root -> copy code của thầy
// B3: chỉnh sửa file package.json -> copy code của thầy
// B4: chỉnh sửa file app.js -> export const viteNodeApp = app; ở cuối file
// B5: npm run dev
