import User from "../models/User";
import { signInSchema, signUpSchema } from "../schemas/auth";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
    // Nhận dữ liệu từ client gửi lên req.body
    const { name, email, password, confirmPassword } = req.body;
    // kiểm tra dữ liệu nhận được sử dụng Schema đã có sẵn

    const { error } = signUpSchema.validate(req.body, { abortEarly: false });

    // Nếu dữ liệu không hợp lệ, trả về thông báo cho client
    if (error) {
        const errors = error.details.map((err) => err.message);
        return res.status(400).json({
            messages: errors,
        });
    }
    // Nếu dữ liệu hợp lệ, kiểm tra xem email có tồn tại trong DB hay không? nếu không thì trả thông báo
    const existUser = await User.findOne({ email });
    if (existUser) {
        return res.status(400).json({
            message: "Email đã tồn tại",
        });
    }
    // Tạo user mới từ thông tin client gửi lên
    const hashedPassword = await bcryptjs.hash(password, 10);
    const isFirstAccount = (await User.countDocuments()) === 0;
    const role = isFirstAccount ? "admin" : "user";
    const user = await User.create({ ...req.body, password: hashedPassword, role });

    // Trả về client dữ liệu là user đã tạo
    return res.status(201).json({
        user,
    });
};
export const signin = async (req, res) => {
    try {
        // Nhận dữ liệu từ client gửi lên req.body
        const { email, password } = req.body;
        // kiểm tra dữ liệu có hợp lệ không?
        const { error } = signInSchema.validate(req.body, { abortEarly: false });
        // Nếu dữ liệu không hợp lệ, trả về thông báo cho client
        if (error) {
            const messages = error.details.map((error) => error.message);
            return res.status(400).json({
                messages,
            });
        }
        // kiểm tra xem user có tồn tại trong hệ thống không?
        const user = await User.findOne({ email });
        console.log("user", user);
        // Nếu không tồn tại, trả về thông báo cho client
        if (!user) {
            return res.status(400).json({
                message: "Email không tồn tại",
            });
        }
        // kiểm tra xem mật khẩu có đúng không?
        const isMatch = bcryptjs.compare(password, user.password);
        console.log(isMatch);
        // Nếu mật khẩu không đúng, trả về thông báo cho client
        if (!isMatch) {
            return res.status(400).json({
                message: "Mật khẩu không đúng!",
            });
        }
        // Tạo token và trả về cho client để client có thể gửi token này trong các request sau

        const token = jwt.sign({ id: user._id }, "123456", { expiresIn: "1h" });
        res.cookie("token", token, { httpOnly: true });
        user.password = undefined;
        return res.status(200).json({
            message: "Đăng nhập thành công!",
            user,
            token,
        });
    } catch (error) {
        return res.status(400).json({
            error: error.message,
        });
    }
};
export const signout = async (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({
        message: "Đăng xuất thành công!",
    });
};
