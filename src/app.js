import express from "express";
import productRouter from './routers/product.router';
const app = express();
app.use(express.json());

app.use('/api/', productRouter);

// restful API

app.listen(8080, () => {
    console.log("Started");
});

export const viteNodeApp = app;
