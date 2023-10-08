<script setup>
import { ref } from 'vue'
import { userUpdatePasswordService } from '@/api/user'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
const formRef = ref()
const pwdForm = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
})

const validateNewPassword = (rule, value, callback) => {
  if (value === pwdForm.value.old_pwd) {
    callback(new Error('新密码不能和原密码一样'))
  } else {
    callback()
  }
}
const validateConfirmPassword = (rule, value, callback) => {
  if (value !== pwdForm.value.new_pwd) {
    callback(new Error('确认密码和新密码不一致'))
  } else {
    callback()
  }
}

// 校验规则
const rules = {
  old_pwd: [
    { required: true, message: '请输入原密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度在 6 到 15 个字符', trigger: 'blur' }
  ],
  new_pwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度在 6 到 15 个字符', trigger: 'blur' },
    { validator: validateNewPassword, trigger: 'blur' }
  ],
  re_pwd: [
    { required: true, message: '请再次输入新密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度在 6 到 15 个字符', trigger: 'blur' },
    { validator: validateConfirmPassword, trigger: 'blur' }
  ]
}

const userStore = useUserStore()
const router = useRouter()
const submitForm = async () => {
  formRef.value.validate()
  await userUpdatePasswordService(pwdForm.value)
  ElMessage.success('修改成功')

  // 密码修改成功后，要退出重新登录
  // 1. 清空本地存储的 token 和 个人信息
  userStore.setToken('')
  userStore.setUser({})
  // 2. 拦截到登录
  router.push('/login')
}
const resetForm = () => {
  formRef.value.resetFields()
}
</script>

<template>
  <page-container title="修改密码">
    <el-row>
      <el-col :span="12">
        <!-- 表单 -->
        <el-form
          :model="pwdForm"
          :rules="rules"
          ref="formRef"
          label-width="100px"
          size="large"
        >
          <el-form-item label="原密码" prop="old_pwd">
            <el-input
              v-model="pwdForm.old_pwd"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="new_pwd">
            <el-input
              v-model="pwdForm.new_pwd"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="re_pwd">
            <el-input
              v-model="pwdForm.re_pwd"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">修改密码</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </page-container>
</template>
