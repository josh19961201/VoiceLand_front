
<template>
  <div class="container">
    <div class="inside">
      <n-h1 class="pageTitle">
        會員中心
      </n-h1>
      <n-divider />
      <n-h3>Hello {{ userData.account }}！</n-h3>
      <n-tabs type="segment">
        <n-tab-pane name="chap1" tab="會員資料">
          <n-form ref="formRef" :model="userData" :rules="rules">
            <n-grid :cols="12" :x-gap="24">
              <n-form-item-gi :span="6" label="Name" path="name">
                <n-input v-model:value="userData.name" placeholder="請輸入真實姓名，以免影響收貨權益" />
              </n-form-item-gi>
              <n-form-item-gi :span="6" label="Eamil" path="email">
                <n-input v-model:value="userData.email" placeholder="請輸入電子信箱" />
              </n-form-item-gi>
              <n-form-item-gi :span="6" label="Phone" path="mobilephone">
                <n-input v-model:value="userData.mobilephone" placeholder="請輸入手機" />
              </n-form-item-gi>
              <n-form-item-gi :span="6" label="Address" path="address">
                <n-input v-model:value="userData.address" placeholder="請輸入地址" />
              </n-form-item-gi>
            </n-grid>
          </n-form>
          <div class="btnGroup">
            <n-button @click="cancel">
              取消
            </n-button>
            <n-button :loading="loading" type="primary" @click="submit">
              修改
            </n-button>
          </div>
        </n-tab-pane>
        <n-tab-pane name="chap2" tab="歷史訂單">
          <n-data-table
            size="large"
            :columns="ordersColumns"
            :data="ordersData"
            default-expand-all
          />
        </n-tab-pane>
        <n-tab-pane name="chap3" tab="修改密碼">
          <n-form ref="passwordmRef" :model="passwordData" :rules="PasswordRules">
            <n-grid :cols="12" :x-gap="24">
              <n-form-item-gi :span="12" label="Password" path="originalPassword">
                <n-input v-model:value="passwordData.originalPassword" type="password" placeholder="請輸入原密碼" />
              </n-form-item-gi>
              <n-form-item-gi :span="12" label="New Password" path="newPassword">
                <n-input v-model:value="passwordData.newPassword" type="password" placeholder="請輸入新密碼" />
              </n-form-item-gi>
              <n-form-item-gi :span="12" label="Confirm New Password" path="passwordConfirm">
                <n-input v-model:value="passwordData.passwordConfirm" type="password" placeholder="請再次輸入新密碼" />
              </n-form-item-gi>
            </n-grid>
          </n-form>
          <div class="btnGroup">
            <n-button @click="cancel">
              取消
            </n-button>
            <n-button :loading="loading" type="primary" @click="changePassword">
              修改
            </n-button>
          </div>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, h, onMounted } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useDialog, useMessage, NDataTable } from 'naive-ui'
import validator from 'validator'
import { gsap } from 'gsap'

const dialog = useDialog()
const message = useMessage()
const ordersData = reactive([])
const userData = reactive({
  name: '',
  email: '',
  mobilephone: '',
  address: ''
})
const passwordData = reactive({
  originalPassword: '',
  newPassword: '',
  passwordConfirm: ''
})
const formRef = ref(null)
const passwordmRef = ref(null)
const loading = ref(false);

(async () => {
  try {
    const originalUser = await apiAuth.get('/users/me')
    Object.assign(userData, originalUser.data.result)
    const { data } = await apiAuth.get('/orders')
    ordersData.push(...data.result.map((order, idx) => {
      order.totalPrice = '$' + order.products.reduce((total, current) => total + current.p_id.price * current.quantity, 0)
      order.key = idx + 1
      order.date = new Date(order.date).toLocaleDateString()
      return order
    }))
  } catch (error) {
    dialog.error({
      title: '失敗',
      content: error?.response?.data?.message || '取得資料失敗',
      positiveText: '再試一次'
    })
  }
})()

const rules = {
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
    validator (rule, value) {
      if (!!value && !(validator.isMobilePhone(value, 'zh-TW'))) {
        return new Error('手機格式錯誤')
      }
      return true
    },
    trigger: ['input', 'blur']
  }
}
const PasswordRules = {
  originalPassword: {
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
  newPassword: {
    required: true,
    validator (rule, value) {
      if (!!value && !/^[A-Za-z0-9]+$/.test(value)) {
        return new Error('密碼僅能為大寫、小寫英文字母及數字')
      } else if (!!value && !(value.length >= 4 && value.length <= 20)) {
        return new Error('密碼必須為 4 ~ 20 個字')
      }
      return true
    },
    trigger: ['input', 'blur']
  },
  passwordConfirm: {
    required: true,
    validator (rule, value) {
      if (!!userData.newPassword && value !== userData.newPassword) {
        return new Error('兩次密碼不一致')
      }
      return true
    },
    trigger: ['input', 'blur']
  }
}
const cancel = async () => {
  const originalUser = await apiAuth.get('/users/me')
  Object.assign(userData, originalUser.data.result)
  Object.assign(passwordData, {
    originalPassword: '',
    newPassword: '',
    passwordConfirm: ''
  })
}
const changePassword = async () => {
  passwordmRef.value?.validate(async (errors) => {
    if (!errors) {
      loading.value = true
      // fd.append(key, value)
      try {
        await apiAuth.patch('/users/password/' + userData._id, passwordData)
        dialog.success({
          title: '成功',
          content: '密碼修改成功',
          positiveText: '確認'
        })
        Object.assign(passwordData, {
          originalPassword: '',
          newPassword: '',
          passwordConfirm: ''
        })
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
const submit = async () => {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      loading.value = true
      // fd.append(key, value)
      try {
        await apiAuth.patch('/users/' + userData._id, userData)
        dialog.success({
          title: '成功',
          content: '會員資料修改成功',
          positiveText: '確認'
        })
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

const ordersColumns = reactive([
  {
    type: 'expand',
    renderExpand: (rowData) => {
      const info = []
      for (const i of rowData.products) {
        info.push({
          name: i.p_id.name,
          price: i.p_id.price,
          quantity: i.quantity,
          productsTotalPrice: i.p_id.price * i.quantity
        })
      }
      return h(
        NDataTable,
        {
          size: 'small',
          columns: [
            {
              title: '商品名稱',
              key: 'name'
            },
            {
              title: '單價',
              key: 'price'
            },
            {
              title: '數量',
              key: 'quantity'
            },
            {
              title: '商品金額',
              key: 'productsTotalPrice'
            }
          ],
          data: info
        },
        {}
      )
    }
  },
  {
    title: '訂單編號',
    key: '_id'
  },

  {
    title: '日期',
    key: 'date'
  },
  {
    title: '訂單金額',
    key: 'totalPrice'
  }
])
onMounted(() => {
  gsap.from('.container', {
    opacity: 0,
    duration: 1
  })
})
</script>
<style scoped lang="scss">
.container{
  padding: 3rem 3rem 10rem;
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
    justify-content: end;
    margin-top: 3rem;
    & *{
      margin-left: 1rem;
    }
  }

}
</style>
