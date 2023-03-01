<template>
  <div class="pageContent">
    <n-card title="登入 ／ 註冊">
      <n-tabs default-value="signin" size="large" justify-content="space-evenly" type="segment" animated>
        <n-tab-pane name="signin" tab="登入">
          <n-form ref="signinFormRef" :model="signinForm" :rules="signinRules" :show-require-mark="false">
            <n-form-item-row label="帳號" path="account">
              <n-input v-model:value="signinForm.account" placeholder="" @keydown.enter.prevent />
            </n-form-item-row>
            <n-form-item-row label="密碼" path="password">
              <n-input v-model:value="signinForm.password" type="password" placeholder="" @keydown.enter="signin" />
            </n-form-item-row>
          </n-form>
          <n-button type="primary" block secondary strong :loading="signinBtnLoading" @click="signin">
            登入
          </n-button>
        </n-tab-pane>
        <n-tab-pane name="signup" tab="註冊">
          <n-form ref="signupFormRef" :model="signupForm" :rules="signupRules">
            <n-form-item-row label="帳號" path="account">
              <n-input v-model:value="signupForm.account" placeholder="" @keydown.enter.prevent />
            </n-form-item-row>
            <n-form-item-row label="電子信箱" path="email">
              <n-input v-model:value="signupForm.email" placeholder="" @keydown.enter.prevent />
            </n-form-item-row>
            <n-form-item-row label="密碼" path="password">
              <n-input v-model:value="signupForm.password" type="password" placeholder="" @keydown.enter.prevent />
            </n-form-item-row>
            <n-form-item-row label="確認密碼" path="passwordConfirm">
              <n-input v-model:value="signupForm.passwordConfirm" type="password" :disabled="!signupForm.password" placeholder="" @keydown.enter.prevent />
            </n-form-item-row>
            <n-button type="primary" block secondary strong :loading="signupBtnLoading" @click="signup">
              註冊
            </n-button>
          </n-form>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import validator from 'validator'
import { api } from '@/plugins/axios'
import { useMessage, useDialog } from 'naive-ui'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()

const dialog = useDialog()
const message = useMessage()

// 註冊
const signupFormRef = ref(null)
const signupBtnLoading = ref(false)
const signupForm = ref({
  account: '',
  email: '',
  password: '',
  passwordConfirm: ''
})

const signupRules = {
  account: {
    required: true,
    validator (rule, value) {
      if (!value) {
        return new Error('請輸入帳號')
      } else if (!(value.length >= 4 && value.length <= 20)) {
        return new Error('帳號必須為 4 ~ 20 個字')
      } else if (!/^[A-Za-z0-9]+$/.test(value)) {
        return new Error('帳號僅能為大寫、小寫英文字母及數字')
      }
      return true
    },
    trigger: ['input', 'blur']
  },
  email: {
    required: true,
    validator (rule, value) {
      if (!value) {
        return new Error('請輸入Email')
      } else if (!(validator.isEmail(value))) {
        return new Error('Email格式錯誤')
      }
      return true
    },
    trigger: ['input', 'blur']
  },
  password: {
    required: true,
    validator (rule, value) {
      if (!value) {
        return new Error('請輸入密碼')
      } else if (!(value.length >= 4 && value.length <= 20)) {
        return new Error('密碼必須為 4 ~ 20 個字')
      } else if (!/^[A-Za-z0-9]+$/.test(value)) {
        return new Error('密碼僅能為大寫、小寫英文字母及數字')
      }
      return true
    },
    trigger: ['input', 'blur']
  },
  passwordConfirm: [
    {
      required: true,
      validator (rule, value) {
        if (!value) {
          return new Error('請重新輸入密碼')
        } else if (!(value === signupForm.value.password)) {
          return new Error('兩次密碼不一致')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ]
}

const signup = (e) => {
  e.preventDefault()
  signupFormRef.value?.validate(async (errors) => {
    if (!errors) {
      signupBtnLoading.value = true
      try {
        await api.post('/users', signupForm.value)
        await dialog.success({
          title: '註冊成功',
          content: '您現在是Voice Land的會員',
          positiveText: '確認'
        })
        router.push('/')
      } catch (error) {
        await dialog.error({
          title: '註冊失敗',
          content: error?.response?.data?.message || '發生錯誤',
          positiveText: '確認'
        })
        console.log(error)
      }
      signupBtnLoading.value = false
    } else {
      message.error('請檢查資料是否正確')
    }
  })
}

// 登入
const signinBtnLoading = ref(false)
const user = useUserStore()
const signinFormRef = ref(null)

const signinForm = ref({
  account: '',
  password: ''
})

const signinRules = {
  account: {
    required: true,
    validator (rule, value) {
      if (!value) {
        return new Error('請輸入帳號')
      } else if (!(value.length >= 4 && value.length <= 20)) {
        return new Error('帳號必須為 4 ~ 20 個字')
      } else if (!/^[A-Za-z0-9]+$/.test(value)) {
        return new Error('帳號僅能為大寫、小寫英文字母及數字')
      }
      return true
    },
    trigger: ['input', 'blur']
  },
  password: {
    required: true,
    validator (rule, value) {
      if (!value) {
        return new Error('請輸入密碼')
      } else if (!(value.length >= 4 && value.length <= 20)) {
        return new Error('密碼必須為 4 ~ 20 個字')
      } else if (!/^[A-Za-z0-9]+$/.test(value)) {
        return new Error('密碼僅能為大寫、小寫英文字母及數字')
      }
      return true
    },
    trigger: ['input', 'blur']
  }
}

const signin = (e) => {
  e.preventDefault()
  signinFormRef.value?.validate(async (errors) => {
    signinBtnLoading.value = true
    const result = await user.login(signinForm.value)
    if (!errors) {
      try {
        if (result.length > 0) {
          await dialog.error({
            title: '登入失敗',
            content: result,
            positiveText: '再試一次'
          })
        } else {
          await dialog.success({
            title: '登入成功',
            content: '點擊確認回到首頁',
            positiveText: '確認'
          })
          router.push('/')
        }
      } catch (error) {
        await dialog.error({
          title: '登入失敗',
          content: error?.response?.data?.message || '發生錯誤',
          positiveText: '確認'
        })
        console.log(error)
      }
    } else {
      message.error('請檢查資料是否正確')
    }
    signinBtnLoading.value = false
  })
}
</script>

<style scoped lang="scss">
.pageContent{
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 5vh;
  .n-card{
    max-width: 800px;
  }
}
</style>
