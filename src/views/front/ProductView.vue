
<template>
  <div class="pageContent">
    <n-grid cols="12" item-responsive responsive="screen">
      <n-grid-item span="12 s:6 m:6" style="display: flex; justify-content: center; ">
        <div class="carouselOut">
          <n-carousel show-arrow :space-between="20" draggable>
            <n-image v-for="image in product.images" :key="image" :src="image" class="carousel-img" object-fit="contain" />
          </n-carousel>
        </div>
      </n-grid-item>
      <n-grid-item span="12 s:5 m:5" class="info" style="margin-left: 5rem;">
        <n-h1>{{ product.name }}</n-h1>
        <n-h3>NT${{ product.price }}</n-h3>
        <n-form ref="addRef" :model="addForm" :rules="addRules" :show-require-mark="false">
          <div class="description">
            <n-h3>商品介紹</n-h3>
            <n-p style="white-space: pre-line; line-height: 2;">
              {{ product.description }}
            </n-p>
          </div>
          <div class="foot">
            <n-form-item label="數量" path="quantity">
              <n-input-number v-model:value="addForm.quantity" />
            </n-form-item>
            <n-form-item>
              <n-button size="medium" type="primary" @click="submitCart">
                加入購物車
              </n-button>
            </n-form-item>
          </div>
        </n-form>
      </n-grid-item>
    </n-grid>
    <n-divider style="margin: 5rem;" />
    <div class="sell">
      <n-h3 style="font-size: 2rem; margin-bottom: 3rem;">
        你可能會喜歡...
      </n-h3>
      <n-grid cols="3" :x-gap="64">
        <n-gi v-for="i in products" :key="i._id">
          <ProductCard v-bind="i" />
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { api } from '@/plugins/axios'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import { useDialog, useMessage } from 'naive-ui'
const dialog = useDialog()
const message = useMessage()

const route = useRoute()
const router = useRouter()

const user = useUserStore()
const { editCart } = user

const addRef = ref(null)
const addForm = ref({
  quantity: 1
})
const products = reactive([])

const addRules = {
  quantity: {
    type: 'number',
    required: true,
    validator (rule, value) {
      if (!value || !/^[1-9]\d*$/.test(value)) {
        return new Error('請輸入正確的數量')
      }
      return true
    }
  }
}

const product = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  images: [],
  sell: true,
  category: ''
})

const submitCart = () => {
  addRef.value?.validate(async (errors) => {
    if (!errors) {
      try {
        const result = await editCart({ _id: product._id, quantity: addForm.value.quantity })
        if (result.length === 0) {
          dialog.success({
            title: '成功',
            content: '您新增了 ' + addForm.value.quantity + ' 個 ' + product.name + ' 到購物車',
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
        dialog.error({
          title: '加入購物車失敗',
          content: error?.response?.data?.message || '發生錯誤',
          positiveText: '確認'
        })
      }
    } else {
      message.error('請輸入正確的數量')
    }
  })
}

(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.description = data.result.description
    product.images = data.result.images
    product.sell = data.result.sell
    product.category = data.result.category

    document.title = 'Voice Land - 線上商城 | ' + product.name
    if (!product.sell) {
      dialog.error({
        title: '錯誤',
        content: '商品未上架',
        positiveText: '確認'
      })
      router.go(-1)
    }
    const productsData = await api.get('/products')
    // 隨機洗牌產品
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
      }
      return array
    }
    const randomItems = shuffle(productsData.data.result).slice(0, 3)
    products.push(...randomItems)
  } catch (error) {
    dialog.error({
      title: '錯誤',
      content: '取得商品失敗',
      positiveText: '再試一次'
    })
    router.go(-1)
  }
})()

</script>
<style scoped lang="scss">
.pageContent{
  padding:5rem;

}
.carouselOut{
  width: 35vw;
  height: 35vw;
  max-width: 420px;
  max-height: 420px;
  @media(max-width: 600px) {
    width: 75vw;
    height: 75vw;
  }
}
.carousel-img{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.description{
  margin: 3rem 0;
}

.info{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.foot{
  display: flex;
  & *{
    margin-right: 1rem;
  }
}
.sell{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .n-grid{
    max-width: 1000px;
  }
}
</style>
