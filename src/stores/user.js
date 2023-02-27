import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { api, apiAuth } from '@/plugins/axios'
import router from '@/plugins/router'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const account = ref('')
  const email = ref('')
  const cart = ref(0)
  const role = ref(0)

  const isLogin = computed(() => {
    return token.value.length > 0
  })
  const isAdmin = computed(() => {
    return role.value === 1
  })
  const avatar = computed(() => {
    return `https://source.boringavatars.com/ring/256/${account.value}?colors=FB6900,F63700,004853,007E80,00B9BD`
  })

  const login = async (form) => {
    try {
      const { data } = await api.post('/users/login', form)
      token.value = data.result.token
      account.value = data.result.account
      email.value = data.result.email
      cart.value = data.result.cart
      role.value = data.result.role
      // 如果沒有錯誤就回傳空值，外層用有沒有值來判斷是否錯誤，空值為成功，錯誤就傳錯誤的值
      return ''
    } catch (error) {
      return error?.response?.data?.message || '發生錯誤'
    }
  }

  const logout = async () => {
    try {
      await apiAuth.delete('/users/logout')
      token.value = ''
      account.value = ''
      role.value = 0
      cart.value = 0
      router.push('/')
    } catch (error) {
      console.log(error)
      token.value = ''
      account.value = ''
      role.value = 0
      cart.value = 0
      router.push('/')
    }
  }

  const getUser = async () => {
    if (token.value.length === 0) return
    try {
      const { data } = await apiAuth.get('/users/me')
      account.value = data.result.account
      email.value = data.result.email
      cart.value = data.result.cart
      role.value = data.result.role
    } catch (error) {
      console.log(error)
      logout()
    }
  }

  const editCart = async ({ _id, quantity }) => {
    // return 未登入=-1、成功=''、失敗=error
    if (token.value.length === 0) {
      return -1
    }
    try {
      const { data } = await apiAuth.post('/users/cart', { p_id: _id, quantity: parseInt(quantity) })
      cart.value = data.result

      return ''
    } catch (error) {
      return error?.response?.data?.message || '發生錯誤'
    }
  }

  const checkout = async () => {
    try {
      await apiAuth.post('/orders')
      cart.value = 0

      return '1'
    } catch (error) {
      return error?.response?.data?.message || '發生錯誤'
    }
  }

  return {
    token,
    account,
    email,
    cart,
    role,
    login,
    logout,
    getUser,
    isLogin,
    isAdmin,
    avatar,
    editCart,
    checkout
  }
}, {
  persist: {
    key: 'VoiceLand',
    paths: ['token']
  }
})
