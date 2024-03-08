export const getProducts = async(req, res) => {
    try {
        // fake connect database
        const response = await fetch(`http://localhost:3000/products`);
        const data = await response.json();
        // tra ve client
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const getProductById =  async (req, res) => {
    try {
        // fake connect database
        const response = await fetch(`http://localhost:3000/products/${req.params.id}`);
        const data = await response.json();
        // tra ve client
        res.json(data);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const addProduct =  async (req, res) => {
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
}
export const removeProduct = async (req, res) => {
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
}
export const updateProduct =  async (req, res) => {
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
}