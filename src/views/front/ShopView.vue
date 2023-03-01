
<template>
  <div class="container">
    <div class="header">
      <n-h1 prefix="bar">
        <n-text>
          線上商城
        </n-text>
      </n-h1>
      <n-select v-model:value="productsFilter" :options="productsOptions" placeholder="請選擇商品分類" :show-checkmark="false" style="width:300px;" />
    </div>
    <n-divider />
    <div class="content">
      <n-grid cols="1 512:2 992:3 1280:4" :x-gap="64" :y-gap="64">
        <n-gi v-for="product in pageProducts" :key="product._id">
          <ProductCard v-bind="product" style="height: 100%;" />
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from 'vue'
import { api } from '@/plugins/axios'
import { useDialog } from 'naive-ui'
import ProductCard from '@/components/ProductCard.vue'

const dialog = useDialog()

const products = reactive([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    products.push(...data.result)
  } catch (error) {
    dialog.error({
      title: '商品載入失敗',
      content: error?.response?.data?.message || '發生錯誤',
      positiveText: '確認'
    })
  }
})()
const productsOptions = ([
  {
    label: 'All',
    value: 'All'
  }, {
    label: 'Clothing',
    value: 'clothing'
  }, {
    label: 'Rechords',
    value: 'rechords'
  }, {
    label: 'Accessories',
    value: 'accessories'
  }])
const productsFilter = ref('All')
const pageProducts = computed(() => {
  if (productsFilter.value === 'All') { return products } else {
    return products.filter((product) => {
      return product.category.includes(productsFilter.value)
    })
  }
})
</script>
<style scoped lang="scss">
.container {
  padding: 3rem 5rem;
}
.header{
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 0 2rem;
  .n-h1{
    margin: 0;
    font-size: 3rem;
    line-height: 1;
    .n-text{
      font-weight: bolder;
    }
  }
}
.content{
  padding: 2rem;
  // @media(min-width:768px){
  //   padding: 2rem;
  // }
  @media(min-width:992px){
    padding: 3rem;
  }
}
</style>
