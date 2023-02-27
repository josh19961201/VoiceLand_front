<template>
  <n-layout>
    <n-layout-header>
      <n-grid cols="12" item-responsive responsive="screen">
        <n-grid-item id="logo" span="1">
          <router-link to="/#">
            <img src="/logo_bw.png">
          </router-link>
        </n-grid-item>
        <n-grid-item id="menu" span="10">
          <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
        </n-grid-item>
        <n-grid-item span="1">
          <router-link v-if="!isLogin" to="/login">
            <n-popover trigger="hover">
              <template #trigger>
                <n-button text>
                  <n-icon size="16">
                    <LogInOutline />
                  </n-icon>
                </n-button>
              </template>
              <span>登入</span>
            </n-popover>
          </router-link>
          <router-link to="/cart">
            <n-popover trigger="hover">
              <template #trigger>
                <n-button v-if="isLogin" text>
                  <n-icon size="16">
                    <CartOutline />
                  </n-icon>
                </n-button>
              </template>
              <span>購物車</span>
            </n-popover>
          </router-link>
          <router-link to="/user">
            <n-popover trigger="hover">
              <template #trigger>
                <n-button v-if="isLogin" text>
                  <n-icon size="16">
                    <PersonOutline />
                  </n-icon>
                </n-button>
              </template>
              <span>會員中心</span>
            </n-popover>
          </router-link>
          <router-link to="/admin">
            <n-popover trigger="hover">
              <template #trigger>
                <n-button v-if="isLogin && isAdmin" text>
                  <n-icon size="16">
                    <SettingsOutline />
                  </n-icon>
                </n-button>
              </template>
              <span>後台管理</span>
            </n-popover>
          </router-link>
          <n-popover trigger="hover">
            <template #trigger>
              <n-button v-if="isLogin" text @click="userLogout">
                <n-icon size="16">
                  <LogOutOutline />
                </n-icon>
              </n-button>
            </template>
            <span>登出</span>
          </n-popover>
        </n-grid-item>
      </n-grid>
    </n-layout-header>
    <n-layout-content style="min-height:calc(100vh - 92px)">
      <div class="spaceTop" />
      <router-view />
    </n-layout-content>
    <n-layout-footer>
      <n-space justify="space-around" class="footer">
        <img src="/logo_bw.png">
        <n-p>© 2023 Voice Land INC. Since2023 All Rights Reserved</n-p>
        <n-p>Design by Josh Zhong </n-p>
      </n-space>
    </n-layout-footer>
  </n-layout>
</template>

<script setup>
import { h, ref } from 'vue'
import { LogInOutline, LogOutOutline, CartOutline, PersonOutline, SettingsOutline } from '@vicons/ionicons5'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useDialog, NPopover } from 'naive-ui'

const dialog = useDialog()

// 菜單
const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/'
        },
        { default: () => 'Home' }
      ),
    key: 'home'

  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/show'
        },
        { default: () => 'Show' }
      ),
    key: 'show'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/work'
        },
        { default: () => 'Work' }
      ),
    key: 'work'
  },
  {
    label: 'Artists',
    key: 'artists',

    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/artists/sabrinaband'
            },
            { default: () => 'Sabrina Band' }
          ),
        key: 'sabrinaband'
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/artists/coastalkanpai'
            },
            { default: () => 'Coastal Kanpai' }
          ),
        key: 'coastalkanpai'
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/artists/yellowflower'
            },
            { default: () => 'Yellow Flower' }
          ),
        key: 'yellowflower'
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: '/artists/fayehong'
            },
            { default: () => 'Faye Hong' }
          ),
        key: 'fayehong'
      }
    ]
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: '/shop'
        },
        { default: () => 'Shop' }
      ),
    key: 'shop'
  }
]
const activeKey = ref(null)

// 會員按鈕
const user = useUserStore()
const { isLogin, isAdmin } = storeToRefs(user)
const { logout } = user

const userLogout = async () => {
  try {
    await logout()
    dialog.success({
      title: '登出成功',
      content: '您已登出',
      positiveText: '確認'
    })
  } catch (error) {
    dialog.error({
      title: '登出失敗',
      content: error?.response?.data?.message || '發生錯誤',
      positiveText: '再試一次'
    })
  }
}

</script>
<style scoped lang="scss">
  .n-layout-header{
    position: fixed;
    z-index: 1000;
    background: #0008;
    padding: 1rem 5rem ;
  .n-grid{
    *,& *{
      display: flex;
      align-items: center;
      z-index: 1000;
    }
    #logo{
      min-width: 60px;
      height: 60px;
      img{
        width: 60px;
      }
    }
    #menu{
      justify-content: center;
      .n-menu{
        width: 100%;
        max-width: 800px;
        padding:0 30px;
        justify-content: space-evenly;
      }
    }
  }
}

  .spaceTop{
    height: 92px;
    z-index:-1000
  }
  .footer{
    height: 6rem;
    align-items: center;
    img{
      width: 60px;
      margin-top: 5px;
    }
  }

</style>
