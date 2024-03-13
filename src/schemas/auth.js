import Joi from "joi";

export const signUpSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email().required().messages({
        "string.email": "Không đúng định dạng email",
        "string.empty": "Email không được để trống",
        "any.required": "Email là bắt buộc",
    }),
    password: Joi.string().min(6).required().messages({
        "string.min": "Mật khẩu phải có ít nhất {#limit} ký tự",
        "string.empty": "Mật khẩu không được để trống",
        "any.required": "Mật khẩu là bắt buộc",
    }),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
        "any.only": "Mật khẩu không khớp",
        "string.empty": "Mật khẩu không được để trống",
        "any.required": "Mật khẩu là bắt buộc",
    }),
});
