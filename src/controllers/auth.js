import bcryptjs from "bcryptjs";
import { registerSchema } from "../schemas/auth";
import User from "../models/User";

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
        // trả về client thông tin user vừa tạo
        user.password = undefined;
        return res.status(201).json({
            messages: "Đăng ký thành công",
            user,
        });
    } catch (error) {
        return res.status(400).json({
            messages: error.message,
        });
    }
};
