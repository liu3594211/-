<template>
  <div class="login">
    <ul class="login__btn">
      <li v-for="(item,index) in logins" :key='item' @click='loginCut(index)' :class="{pitch:(pitchLogin==index)}">{{item}}</li>

    </ul>
    <div class="el-forms">
      <el-form :model="ruleForm" status-icon :rules="rules" size='mini' ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="email">
          <label>邮箱</label>
          <el-input type="email" v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <label>密码</label>
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password" v-if='pwd'>
          <label>重复密码</label>
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="age">
          <label>验证码</label>
          <br>
          <el-row :gutter="20">
            <el-col :span="18">
              <el-input v-model.number="ruleForm.age"></el-input>
            </el-col>
            <el-col :span="5">
              <el-button type="primary">验证码</el-button>
            </el-col>
          </el-row>

        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login__btn__submit" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>

    </div>

  </div>
</template>

<script>
import { stripscript } from '@/utils/validate.js'
import { ref, reactive, toRefs } from '@vue/composition-api'
export default {

  setup (props, context) {
    //控制显示与隐藏
    const pitchLogin = ref(0)
    const pwd = ref(false) //注册
    const logins = reactive(['登录', '注册'])
    const ruleForm = reactive({      email: '',
      password: '',
      age: ''
    })
    let submitForm = ((formName) => {
      context.refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    })
    let checkAge = ((rule, value, callback) => {
      if (!value) {
        return callback(new Error('验证码不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入验证码'));
        } else {
          callback();
        }
      }, 1000);
    });
    let validatePass = ((rule, value, callback) => {
      const pasd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (!pasd.test(value)) {
        callback(new Error('请输入密码正确的密码'));
      } else {
        context.refs.ruleForm.validateField('checkPass');
        callback();
      }
    });
    let validatemail = ((rule, value, callback) => {
      const emailrule = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
      if (value === '') {
        callback(new Error('请输入邮箱'));
      } else if (!emailrule.test(value)) {
        callback(new Error('请输入正确的邮箱'));
      } else {
        callback();
      }
    });
    const rules = reactive({
      email: [
        { validator: validatemail, trigger: 'blur' },
      ],
      password: [
        { validator: validatePass, trigger: 'blur' }
      ],
      age: [
        { validator: checkAge, trigger: 'blur' }
      ]
    })
    //选择切换样式
    const loginCut = ((index) => {
      console.log('pwd', pwd);
      //切换选择
      pitchLogin.value = index
      //切换登录注册
      pwd.value = !pwd.value
    })
    return {
      pitchLogin,
      ruleForm,
      submitForm,
      loginCut,
      pwd,
      logins,
      rules,
      submitForm
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  .login__btn {
    width: 500px;
    height: 50px;
    margin: 0 auto;
    li {
      width: 50%;
      height: 50px;
      float: left;
      line-height: 50px;
      text-align: center;
    }
  }
  .el-forms {
    width: 500px;
    margin: 0 auto;
    label {
      display: block;
      float: left;
    }
  }
  .login__btn__submit {
    float: left;
  }
}
.pitch {
  color: red;
}
</style>
