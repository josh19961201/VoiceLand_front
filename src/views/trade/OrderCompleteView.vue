
<template>
  <div class="container">
    <div class="inside">
      <n-result status="success" title="購買成功">
        <!-- <template #default>
          <n-data-table
            size="large"
            :columns="ordersColumns"
            :data="orderData"
            default-expand-all
          />
        </template> -->
        <template #footer>
          <div class="btnGroup">
            <router-link to="/user">
              <n-button>
                會員中心
              </n-button>
            </router-link>
            <router-link to="/">
              <n-button type="primary">
                回首頁
              </n-button>
            </router-link>
          </div>
        </template>
      </n-result>
    </div>
  </div>
</template>
<script setup>
// import { reactive } from 'vue'
// import { apiAuth } from '@/plugins/axios'
// import { useDialog, NDataTable } from 'naive-ui'

// const dialog = useDialog()

// const orderData = reactive({});

// (async () => {
//   try {
//     const { data } = await apiAuth.get('/orders')
//     console.log(data.result)
//   } catch (error) {
//     dialog.error({
//       title: '失敗',
//       content: error?.response?.data?.message || '取得資料失敗',
//       positiveText: '再試一次'
//     })
//   }
// })()
</script>

<style scoped lang=scss>
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
  .btnGroup{
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    & *{
      margin: .5rem;
    }
  }

</style>
