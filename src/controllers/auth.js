import bcryptjs from "bcryptjs";
import { registerSchema, signinSchema } from "../schemas/auth";
import User from "../models/User";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    try {
        // lấy dữ liệu từ client gửi lên : req.body
        const { username, email, password, age, address } = req.body;
        // kiểm tra dữ liệu từ client gửi lên có đúng với schema không
        const { error } = registerSchema.validate(req.body, { abortEarly: false });
        if (error) {
            const messages = error.details.map(({ message }) => message);
            return res.status(400).json({
                messages,
            });
        }
        // nếu đúng thì kiểm xem email có tồn tại trong db chưa
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({
                messages: "Email đã tồn tại",
            });
        }

        // nếu chưa thì mã hóa password
        const hashPassword = await bcryptjs.hash(password, 10);
        // tạo mới user: User.create({ name, email, password: mã hóa, age, address})
        const user = await User.create({
            username,
            email,
            password: hashPassword,
            age,
            address,
        });
        const token = jwt.sign({ userId: user._id }, "123456", { expiresIn: "1h" });
        // trả về client thông tin user vừa tạo
        user.password = undefined;
        return res.status(201).json({
            messages: "Đăng ký thành công",
            user,
            token,
        });
    } catch (error) {
        return res.status(400).json({
            messages: error.message,
        });
    }
};

export const signin = async () => {
    // lấy dữ liệu từ client gửi lên : req.body
    const { email, password } = req.body;
    // kiểm tra dữ liệu từ client gửi lên có đúng với schema không
    const { error } = signinSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const messages = error.details.map((error) => error.message);
        return res.status(400).json({
            messages,
        });
    }

    const user = await User.findOne({ email });
    // nếu đúng thì kiểm xem email có tồn tại trong db chưa
    if (!user) {
        return res.status(400).json({
            messages: "Tài khoản không tồn tại",
        });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    // so sánh mật khẩu client gửi lên với mật khẩu user có khớp nhau không?
    if (!isMatch) {
        return res.status(400).json({
            messages: "Password không đúng",
        });
    }
    // nếu khớp thì tạo token và trả về client
    const token = await jwt.sign({ userId: user._id }, "123456");

    return res.status(200).json({
        message: "Đăng nhập thành công",
        user,
        token,
    });
};
