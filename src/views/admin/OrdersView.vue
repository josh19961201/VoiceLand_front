
<template>
  <n-h1 class="pageTitle">
    訂單管理
  </n-h1>
  <n-divider />
  <n-data-table
    size="large"
    :columns="ordersColumns"
    :data="ordersData"
    default-expand-all
  />
</template>
<script setup>
import { reactive, h } from 'vue'
import { apiAuth } from '@/plugins/axios'
import { useDialog, NDataTable } from 'naive-ui'

const dialog = useDialog()
const ordersData = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/orders/all')
    ordersData.push(...data.result.map((order, idx) => {
      order.totalPrice = '$' + order.products.reduce((total, current) => total + current.p_id.price * current.quantity, 0)
      order.key = idx + 1
      order.date = new Date(order.date).toLocaleDateString()
      order.user = order.u_id.account
      return order
    }))
  } catch (error) {
    console.log(error)
    dialog.error({
      title: '失敗',
      content: error?.response?.data?.message || '取得訂單失敗',
      positiveText: '再試一次'
    })
  }
})()

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
    title: '訂購人',
    key: 'user'
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
</script>
<style scoped>

</style>
