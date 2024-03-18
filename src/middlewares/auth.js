import { verify } from "jsonwebtoken";

export const checkAuth = async (req, res, next) => {
    console.log(req.body);
    const token = req.headers.authorization.split(" ")[1];
    const tokenVerified = verify(token, "123", function (err, decoded) {
        console.log(decoded);
        if (err) {
            if (err.name == "TokenExpiredError") {
                console.log("TokenExpiredError");
            } else if (err.name == "JsonWebTokenError") {
                console.log("JsonWebTokenError");
            }
        }
    });
};

// fetch('http://localhost:3000/auth/signin', {
//     headers: {
//         "Content-Type": "application/json",
//         authorization: "Bearer " + token,
//     }
// })
