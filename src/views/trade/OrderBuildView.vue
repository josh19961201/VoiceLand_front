
<template>
  <div class="container">
    <div class="inside" style="padding: 0 5rem;">
      <n-h1 class="pageTitle">
        填寫收件資料
      </n-h1>
      <n-button style="width: 150px; align-self: center;" @click="userUserDataFunc">
        載入會員資料
      </n-button>
      <n-divider />
      <n-form ref="formRef" :model="formData" :rules="rules">
        <n-grid :cols="12" :x-gap="48" :y-gap="24">
          <n-form-item-gi :span="6" label="收件人" path="name">
            <n-input v-model:value="formData.name" placeholder="請輸入真實姓名，以免影響收貨權益" />
          </n-form-item-gi>
          <n-form-item-gi :span="6" label="Eamil" path="email">
            <n-input v-model:value="formData.email" placeholder="請輸入電子信箱" />
          </n-form-item-gi>
          <n-form-item-gi :span="6" label="手機" path="mobilephone">
            <n-input v-model:value="formData.mobilephone" placeholder="請輸入手機" />
          </n-form-item-gi>
          <n-form-item-gi :span="6" label="收件地址" path="address">
            <n-input v-model:value="formData.address" placeholder="請輸入收件地址" />
          </n-form-item-gi>
        </n-grid>
      </n-form>
      <div class="btnGroup">
        <n-button @click="back">
          回購物車
        </n-button>
        <n-button :loading="loading" type="primary" @click="onCheckoutBtnClick">
          送出訂單
        </n-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { apiAuth } from '@/plugins/axios'
import { useDialog, useMessage } from 'naive-ui'
import validator from 'validator'

const dialog = useDialog()
const message = useMessage()
const router = useRouter()
const user = useUserStore()
const loading = ref(false)
const formRef = ref(false)
const { checkout } = user
const formData = reactive({})
const userData = reactive({})
const rules = {
  name: {
    required: true,
    validator (rule, value) {
      if (!value) {
        return new Error('請輸入姓名')
      }
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
  mobilephone: {
    required: true,
    validator (rule, value) {
      if (!value) {
        return new Error('請輸入Email')
      } else if (!!value && !(validator.isMobilePhone(value, 'zh-TW'))) {
        return new Error('手機格式錯誤')
      }
      return true
    },
    trigger: ['input', 'blur']
  },
  address: {
    required: true,
    trigger: ['input', 'blur']
  }
}

const back = async () => {
  router.push('/cart')
}
const onCheckoutBtnClick = async () => {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      loading.value = true
      try {
        await checkout()
        router.push('/ordercomplete')
      } catch (error) {
        dialog.error({
          title: '失敗',
          content: error?.response?.data?.message || '發生錯誤',
          positiveText: '確認'
        })
      }
      loading.value = false
    } else {
      message.error('請檢查資料是否完整')
    }
  })
}

const userUserDataFunc = () => {
  return Object.assign(formData, userData)
}
;
(async () => {
  try {
    const originalUser = await apiAuth.get('/users/me')
    Object.assign(userData, originalUser.data.result)
    console.log(userData)
  } catch (error) {
    dialog.error({
      title: '失敗',
      content: error?.response?.data?.message || '取得資料失敗',
      positiveText: '再試一次'
    })
  }
})()
</script>
<style scoped lang="scss">
.container{
  padding: 3rem;
  display: flex;
  justify-content: center;
  width: 100%;
  .inside{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 960px;
  }
  .btnGroup{
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }
}
</style>
