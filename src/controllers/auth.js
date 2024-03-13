import User from "../models/User";
import { signUpSchema } from "../schemas/auth";
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

    const user = await User.create(req.body);

    // Trả về client dữ liệu là user đã tạo
    return res.status(201).json({
        user,
    });
};
