export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi cmnr",
        });
    }
};

export const getProductById = async (req, res) => {
    try {
        const response = await fetch(
            `https://6110f09bc38a0900171f0ed0.mockapi.io/products/${req.params.id}`
        );
        const data = await response.json();
        // trả về client
        res.json(data);
    } catch (error) {
        res.status(400).json({
            message: "Lỗi cmnr",
        });
    }
};
export const addProduct = async (req, res) => {
    try {
        const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req.body),
        });
        const data = await response.json();
        // trả về client
        res.json(data);
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const response = await fetch(
            `https://6110f09bc38a0900171f0ed0.mockapi.io/products/${req.params.id}`,
            {
                method: "DELETE",
            }
        );
        const data = await response.json();
        // trả về client
        res.json(data);
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const response = await fetch(
            `https://6110f09bc38a0900171f0ed0.mockapi.io/products/${req.params.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req.body),
            }
        );
        const data = await response.json();
        // trả về client
        res.json(data);
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};
