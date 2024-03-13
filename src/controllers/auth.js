import { signupSchema } from '../schemas/auth'
import User from '../models/User.model';
export const signup = async (req, res) => {
    console.log(req.body);
    // lấy dữ liệu từ client
    // validate
    const {error} =  signupSchema.validate(req.body, {abortEarly: false});
    // nếu có lỗi thì trả về client
    if(error){
        const errors = error.details.map(({message}) => message);
        return res.status(400).json({
            errors
        })
    }

    // kiểm tra xem email có tồn tại trong db không?

    const existUser = await User.findOne({email: req.body.email })
    console.log('existUser', existUser);
    // nếu có thì trả về message client
    if(existUser){
        return res.status(400).json({
            messages: "Email đã tồn tại"
        })
    }
    
    // tạo user và trả về client

    const user = await User.create(req.body);
    return res.status(201).json({
        user
    })
}