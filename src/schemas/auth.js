import Joi from 'joi';

export const signupSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().required().email().messages({
        "string.email": "Không đúng định dạng email",
        "string.empty": "Không được để trống email",
        "string.required": "Email là bắt buộc"
    }),
    password: Joi.string().required().min(6).messages({
        "string.empty": "Không được để trống password",
        "string.required": "Password là bắt buộc",
        "string.min": "Ít nhất {#limit} ký tự"
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        "any.only": "Mật không khớp",
        "string.empty": "Confirm password không được để trống",
        "string.required": "Bắt buộc phải nhật"
    })
})