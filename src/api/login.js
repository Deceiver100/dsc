import ajax from "./api.js"

export const loginuser = (user_name, login_password, captcha) => ajax("http://192.168.0.113:3000/api/v1/users/login", { user_name, login_password, captcha }, "post")