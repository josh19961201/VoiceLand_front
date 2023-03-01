<template>
  <div class="container">
    <div class="inside">
      <n-h1 class="pageTitle">
        購物車
      </n-h1>
      <n-divider />
      <n-data-table :columns="tableColumns" :data="tableData" />
      <n-h3 style="align-self: flex-end;">
        結帳金額：${{ totalPrice }}
      </n-h3>
      <router-link to="/orderbuild" style="align-self: flex-end;">
        <n-button :disabled="!canCheckout" type="primary">
          前往結帳
        </n-button>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { reactive, computed, h, onMounted } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useUserStore } from '@/stores/user'
import { RouterLink } from 'vue-router'
import { useDialog, NButton } from 'naive-ui'
import { gsap } from 'gsap'

const dialog = useDialog()

const user = useUserStore()
const { editCart } = user

const updateCart = async (idx, quantity) => {
  await editCart({ _id: tableData[idx].p_id, quantity })
  tableData[idx].quantity += quantity
  if (tableData[idx].quantity <= 0) {
    tableData.splice(idx, 1)
  }
}

const totalPrice = computed(() => {
  return tableData.reduce((total, current) => {
    return total + (current.quantity * current.price)
  }, 0)
})

const canCheckout = computed(() => {
  return tableData.length > 0 && !tableData.some(product => {
    return !product.sell
  })
});

(async () => {
  try {
    const { data } = await apiAuth.get('/users/cart')
    // console.log(data.result)
    for (const i of data.result) {
      tableData.push({
        _id: i._id,
        p_id: i.p_id._id,
        category: i.p_id.category,
        description: i.description,
        images: i.p_id.images,
        name: i.p_id.name,
        price: i.p_id.price,
        sell: i.p_id.sell,
        quantity: i.quantity,
        key: i._id
      })
    }
    // console.log(tableData)
  } catch (error) {
    dialog.error({
      title: '失敗',
      content: error?.response?.data?.message || '取得購物車失敗',
      positiveText: '再試一次'
    })
  }
})()
const tableData = reactive([])
const tableColumns = reactive([
  {
    title: '',
    key: 'image',
    render (row, idx) {
      return h(
        'img',
        {
          src: tableData[idx].images[0],
          height: 80
        }
      )
    }
  },
  {
    title: '商品',
    key: 'name',
    render (row, idx) {
      return h(
        RouterLink,
        {
          to: 'shop/products/' + tableData[idx].p_id,
          style: 'color: #FFF; text-decoration: none;'
        },
        { default: () => tableData[idx].name }
      )
    }
  },
  {
    title: '單價',
    key: 'price'
  },
  {
    title: '',
    key: '-',
    render (row, idx) {
      return h(
        NButton,
        {
          strong: true,
          tertiary: true,
          size: 'small',
          onClick: () => updateCart(idx, -1)
        },
        { default: () => '-' }
      )
    }
  },
  {
    title: '數量',
    key: 'quantity'
  },
  {
    title: '',
    key: '+',
    render (row, idx) {
      return h(
        NButton,
        {
          strong: true,
          tertiary: true,
          size: 'small',
          onClick: () => updateCart(idx, 1)
        },
        { default: () => '+' }
      )
    }
  },
  {
    title: '小計',
    key: 'productTotalPrice',
    render (row, idx) {
      return h(
        'p',
        {
        },
        { default: () => row.price * row.quantity }
      )
    }
  },
  {
    title: '',
    key: 'delete',
    render (row, idx) {
      return h(
        NButton,
        {
          strong: true,
          tertiary: true,
          size: 'small',
          onClick: () => updateCart(idx, tableData[idx].quantity * -1)
        },
        { default: () => '刪除' }
      )
    }
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

}

</style>
