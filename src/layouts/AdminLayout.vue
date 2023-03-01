<template>
  <n-space vertical class="container">
    <n-layout has-sider>
      <n-layout-sider
        collapse-mode="width"
        :width="240"
        bordered
        content-style="padding-top: 3rem;"
      >
        <n-list>
          <n-menu
            v-model:value="activeKey"
            :options="menuOptions"
          />
        </n-list>
      </n-layout-sider>
      <n-layout-content
        content-style="padding: 3rem;"
      >
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-space>
</template>

<script setup>
import { h, ref } from 'vue'
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { BagOutline, DocumentTextOutline, HomeOutline, MegaphoneOutline, MusicalNotesOutline } from '@vicons/ionicons5'

// import { storeToRefs } from 'pinia'
// import { useUserStore } from '@/stores/user'
// const user = useUserStore()
// const { account } = storeToRefs(user)

const activeKey = ref(null)

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/admin'
        },
        { default: () => '首頁管理' }
      ),
    key: 'admin-home',
    icon: renderIcon(HomeOutline)
  }, {
    label: () =>
      h(
        RouterLink,
        {
          to: '/admin/shows'
        },
        { default: () => '演出管理' }
      ),
    key: 'admin-shows',
    icon: renderIcon(MegaphoneOutline)
  }, {
    label: () =>
      h(
        RouterLink,
        {
          to: '/admin/works'
        },
        { default: () => '作品管理' }
      ),
    key: 'admin-works',
    icon: renderIcon(MusicalNotesOutline)
  }, {
    label: () =>
      h(
        RouterLink,
        {
          to: '/admin/products'
        },
        { default: () => '商品管理' }
      ),
    key: 'admin-products',
    icon: renderIcon(BagOutline)
  }, {
    label: () =>
      h(
        RouterLink,
        {
          to: '/admin/orders'
        },
        { default: () => '訂單管理' }
      ),
    key: 'admin-orders',
    icon: renderIcon(DocumentTextOutline)
  }
  // , {
  //   label: () =>
  //     h(
  //       RouterLink,
  //       {
  //         to: '/admin/users'
  //       },
  //       { default: () => '會員管理' }
  //     ),
  //   key: 'admin-users',
  //   icon: renderIcon(PersonOutline)
  // }
]
</script>
<style scoped lang="scss">
.container,.n-layout,.n-layout-scroll-container {
  min-height: calc( 100vh - 92px - 96px );
}
</style>
