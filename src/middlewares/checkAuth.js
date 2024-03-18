import jwt from "jsonwebtoken";
export const checkAuth = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, "12346", (error, decoded) => {
        if (error.name === "TokenExpiredError") {
            console.log("Token hết hạn");
        } else if (error.name === "JsonWebTokenError") {
            console.log("Token không hợp lệ");
        }
        console.log("decoded", decoded);
    });
    // next();
};
