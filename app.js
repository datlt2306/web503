// import http from "http";
// const app = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.end(`<h1>Welcome to the home page</h1>`);
//     } else if (req.url === "/api/products") {
//         const data = [
//             { id: 1, name: "Product A" },
//             { id: 2, name: "Product B" },
//             { id: 3, name: "Product C" },
//         ];
//         res.end(JSON.stringify(data));
//     }
//     console.log("Server is running...");
// });

import express from "express";

const app = express();
app.get(`/api/products`, (req, res) => {
    const data = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
        { id: 3, name: "Product C" },
    ];
    res.end(JSON.stringify(data));
});
app.listen(3000, () => {
    console.log(`Server is running on port 3000...`);
});

/**
 * B1: npm init -y
 * B2: npm i express --save
 * B3: thêm type: "module" vào file package.json
 */
