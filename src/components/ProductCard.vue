
<template>
  <n-card>
    <template #header>
      <router-link :to="'shop/products/'+_id" #="{ navigate, href }" custom>
        <n-a :href="href" @click="navigate">
          {{ name }}
        </n-a>
      </router-link>
    </template>
    <template #cover>
      <img :src="images[0]">
    </template>
    <template #default>
      <n-p>
        NT${{ price }}
      </n-p>
    </template>
    <template #footer>
      <n-button @click="addProduct({_id, quantity: 1})">
        <template #icon>
          <n-icon>
            <CartOutline />
          </n-icon>
        </template>
        加入購物車
      </n-button>
    </template>
  </n-card>
</template>
<script setup>
import { useUserStore } from '@/stores/user'
import { CartOutline } from '@vicons/ionicons5'
import { useDialog } from 'naive-ui'
import router from '@/plugins/router'
const dialog = useDialog()

defineProps({
  /* eslint-disable */
  _id: {
    type: String,
    default: ''
  },
  /* eslint-enable */
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  },
  images: {
    type: Array,
    /* eslint-disable */
    default: []
    /* eslint-enable */
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: ''
  }
})

const user = useUserStore()
const { editCart } = user

const addProduct = async (object) => {
  const result = await editCart(object)
  try {
    if (result.length === 0) {
      dialog.success({
        title: '成功',
        content: '商品已加入購物車',
        positiveText: '確認'
      })
    } else if (result === -1) {
      dialog.error({
        title: '錯誤',
        content: '請登入帳號',
        positiveText: '確認'
      })
      router.push('/login')
    } else {
      dialog.error({
        title: '加入購物車失敗',
        content: result,
        positiveText: '確認'
      })
    }
  } catch (error) {
    await dialog.error({
      title: '加入購物車失敗',
      content: error?.response?.data?.message || '發生錯誤',
      positiveText: '確認'
    })
  }
}

</script>
<style scoped lang="scss">
.n-a{
  color: #FFF;
  text-decoration: none;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
