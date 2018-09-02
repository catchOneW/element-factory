
var validatePass = (rule, value, callback) => {
    if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
};
let a = { required: true, message: '请输入密码', trigger: 'blur' }
let b = { min: 3, max: 8, message: '密码长度必须是3-8位', trigger: 'change' }
let c = { validator: validatePass, trigger: 'change' }