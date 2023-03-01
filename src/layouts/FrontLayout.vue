<template>
  <n-layout>
    <n-layout-header>
      <n-grid cols="12" item-responsive responsive="screen">
        <n-grid-item id="logo" span="1">
          <router-link to="/#">
            <!-- <img src="/logo_bw.png"> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498 221.59">
              <g id="bb94798b-6741-4a78-9a01-c04cd61f68cb" data-name="fZnc5q.tif"><path d="M499,348H1V126.41H499ZM164.22,290.76l0,.95h81l.08.84-31.73,10.84.1.4,76.39-9.61,0-.53-14.68-7.18.11-1,83-11.15,0-.55-58.8-3.8,0-1.05,103.7-11.62,0-.57L344.16,246l.06-1.16,106.14-10.78v-.77c-13.25,0-26.51.09-39.75,0-19.43-.16-38.86-.46-58.29-.73-6.26-.08-12.52-.25-18.79-.35a4.63,4.63,0,0,1-4.34-2.17c-.61-.94-2.32-1.16-3.53-1.73s-2.78-.86-3.51-1.8c-2.09-2.7-3.7-5.75-5.75-8.47a8.22,8.22,0,0,0-3.61-2.69c-2.79-1-5.73-1.58-8.61-2.29-4-1-8.28-.94-11.24-4.64-.77-1-2.56-1.23-3.94-1.63-2-.58-4-.89-6-1.48-3.47-1-6.87-2.28-10.35-3.25-1.63-.46-3.41-.37-5.07-.77-2.78-.66-5.51-1.51-8.26-2.29-3.09-.88-6.41-1.33-9.17-2.82-2.06-1.11-3.49-3-6.17-1.66-.54.28-1.42,0-2.12-.16a12.31,12.31,0,0,0-8.69.92,8.23,8.23,0,0,1-4.34,1.3,97.52,97.52,0,0,0-13.7-.93,4.76,4.76,0,0,0-4.64,2.59,11.55,11.55,0,0,1-3.43,3.16c-1.26.82-2.88,1.1-4.17,1.91-2.1,1.34-3.87,3.65-6.12,4.24-6.46,1.67-9.12,6.28-10.62,12-1.45,5.5-7.63,10.38-13.31,10.29-7.8-.12-15.61-.36-23.41-.41-9-.05-18-.29-26.93.15-15.84.78-31.66,2-47.5,3-10.48.67-21,1.21-31.45,1.81l0,.38,102.62,8.45,0,1.21L94.85,255.07c28.69,2.42,57.35,4.12,86,6.32l0,1.06-60,8v.45l92.47,7.75.08,1.06Z" transform="translate(-1 -126.41)" style="fill:#0000" />
                <path d="M164.22,290.76l49.07-11.05-.08-1.06-92.47-7.75v-.45l60-8,0-1.06c-28.61-2.2-57.27-3.9-86-6.32l51.28-10.56,0-1.21L43.49,234.85l0-.38c10.48-.6,21-1.14,31.45-1.81,15.84-1,31.66-2.27,47.5-3,9-.44,17.95-.2,26.93-.15,7.8,0,15.61.29,23.41.41,5.68.09,11.86-4.79,13.31-10.29,1.5-5.76,4.16-10.37,10.62-12,2.25-.59,4-2.9,6.12-4.24,1.29-.81,2.91-1.09,4.17-1.91a11.55,11.55,0,0,0,3.43-3.16,4.76,4.76,0,0,1,4.64-2.59,97.52,97.52,0,0,1,13.7.93,8.23,8.23,0,0,0,4.34-1.3,12.31,12.31,0,0,1,8.69-.92c.7.15,1.58.44,2.12.16,2.68-1.37,4.11.55,6.17,1.66,2.76,1.49,6.08,1.94,9.17,2.82,2.75.78,5.48,1.63,8.26,2.29,1.66.4,3.44.31,5.07.77,3.48,1,6.88,2.22,10.35,3.25,2,.59,4,.9,6,1.48,1.38.4,3.17.65,3.94,1.63,3,3.7,7.27,3.67,11.24,4.64,2.88.71,5.82,1.3,8.61,2.29a8.22,8.22,0,0,1,3.61,2.69c2.05,2.72,3.66,5.77,5.75,8.47.73.94,2.31,1.23,3.51,1.8s2.92.79,3.53,1.73a4.63,4.63,0,0,0,4.34,2.17c6.27.1,12.53.27,18.79.35,19.43.27,38.86.57,58.29.73,13.24.11,26.5,0,39.75,0v.77L344.22,244.85l-.06,1.16,59.18,10.74,0,.57-103.7,11.62,0,1.05,58.8,3.8,0,.55-83,11.15-.11,1,14.68,7.18,0,.53-76.39,9.61-.1-.4,31.73-10.84-.08-.84h-81Z" transform="translate(-1 -126.41)" style="fill:#FFF" />
              </g>
            </svg>
          </router-link>
        </n-grid-item>
        <n-grid-item id="menu" span="10">
          <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
        </n-grid-item>
        <n-grid-item span="1" class="rightBtn">
          <router-link v-if="!isLogin" to="/login">
            <n-popover trigger="hover">
              <template #trigger>
                <n-button text>
                  <n-icon size="20">
                    <LogInOutline />
                  </n-icon>
                </n-button>
              </template>
              <span>登入</span>
            </n-popover>
          </router-link>
          <router-link v-if="isLogin" to="/cart">
            <n-popover trigger="hover">
              <template #trigger>
                <n-button text>
                  <n-icon size="20">
                    <CartOutline />
                  </n-icon>
                </n-button>
              </template>
              <span>購物車</span>
            </n-popover>
          </router-link>
          <router-link v-if="isLogin" to="/user">
            <n-popover trigger="hover">
              <template #trigger>
                <n-button text>
                  <n-icon size="20">
                    <PersonOutline />
                  </n-icon>
                </n-button>
              </template>
              <span>會員中心</span>
            </n-popover>
          </router-link>
          <router-link v-if="isLogin && isAdmin" to="/admin">
            <n-popover trigger="hover">
              <template #trigger>
                <n-button text>
                  <n-icon size="20">
                    <SettingsOutline />
                  </n-icon>
                </n-button>
              </template>
              <span>後台管理</span>
            </n-popover>
          </router-link>
          <n-popover v-if="isLogin" trigger="hover">
            <template #trigger>
              <n-button text @click="userLogout">
                <n-icon size="20">
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
        <!-- <img src="/logo_bw.png"> -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498 221.59">
          <g id="bb94798b-6741-4a78-9a01-c04cd61f68cb" data-name="fZnc5q.tif"><path d="M499,348H1V126.41H499ZM164.22,290.76l0,.95h81l.08.84-31.73,10.84.1.4,76.39-9.61,0-.53-14.68-7.18.11-1,83-11.15,0-.55-58.8-3.8,0-1.05,103.7-11.62,0-.57L344.16,246l.06-1.16,106.14-10.78v-.77c-13.25,0-26.51.09-39.75,0-19.43-.16-38.86-.46-58.29-.73-6.26-.08-12.52-.25-18.79-.35a4.63,4.63,0,0,1-4.34-2.17c-.61-.94-2.32-1.16-3.53-1.73s-2.78-.86-3.51-1.8c-2.09-2.7-3.7-5.75-5.75-8.47a8.22,8.22,0,0,0-3.61-2.69c-2.79-1-5.73-1.58-8.61-2.29-4-1-8.28-.94-11.24-4.64-.77-1-2.56-1.23-3.94-1.63-2-.58-4-.89-6-1.48-3.47-1-6.87-2.28-10.35-3.25-1.63-.46-3.41-.37-5.07-.77-2.78-.66-5.51-1.51-8.26-2.29-3.09-.88-6.41-1.33-9.17-2.82-2.06-1.11-3.49-3-6.17-1.66-.54.28-1.42,0-2.12-.16a12.31,12.31,0,0,0-8.69.92,8.23,8.23,0,0,1-4.34,1.3,97.52,97.52,0,0,0-13.7-.93,4.76,4.76,0,0,0-4.64,2.59,11.55,11.55,0,0,1-3.43,3.16c-1.26.82-2.88,1.1-4.17,1.91-2.1,1.34-3.87,3.65-6.12,4.24-6.46,1.67-9.12,6.28-10.62,12-1.45,5.5-7.63,10.38-13.31,10.29-7.8-.12-15.61-.36-23.41-.41-9-.05-18-.29-26.93.15-15.84.78-31.66,2-47.5,3-10.48.67-21,1.21-31.45,1.81l0,.38,102.62,8.45,0,1.21L94.85,255.07c28.69,2.42,57.35,4.12,86,6.32l0,1.06-60,8v.45l92.47,7.75.08,1.06Z" transform="translate(-1 -126.41)" style="fill:#0000" />
            <path d="M164.22,290.76l49.07-11.05-.08-1.06-92.47-7.75v-.45l60-8,0-1.06c-28.61-2.2-57.27-3.9-86-6.32l51.28-10.56,0-1.21L43.49,234.85l0-.38c10.48-.6,21-1.14,31.45-1.81,15.84-1,31.66-2.27,47.5-3,9-.44,17.95-.2,26.93-.15,7.8,0,15.61.29,23.41.41,5.68.09,11.86-4.79,13.31-10.29,1.5-5.76,4.16-10.37,10.62-12,2.25-.59,4-2.9,6.12-4.24,1.29-.81,2.91-1.09,4.17-1.91a11.55,11.55,0,0,0,3.43-3.16,4.76,4.76,0,0,1,4.64-2.59,97.52,97.52,0,0,1,13.7.93,8.23,8.23,0,0,0,4.34-1.3,12.31,12.31,0,0,1,8.69-.92c.7.15,1.58.44,2.12.16,2.68-1.37,4.11.55,6.17,1.66,2.76,1.49,6.08,1.94,9.17,2.82,2.75.78,5.48,1.63,8.26,2.29,1.66.4,3.44.31,5.07.77,3.48,1,6.88,2.22,10.35,3.25,2,.59,4,.9,6,1.48,1.38.4,3.17.65,3.94,1.63,3,3.7,7.27,3.67,11.24,4.64,2.88.71,5.82,1.3,8.61,2.29a8.22,8.22,0,0,1,3.61,2.69c2.05,2.72,3.66,5.77,5.75,8.47.73.94,2.31,1.23,3.51,1.8s2.92.79,3.53,1.73a4.63,4.63,0,0,0,4.34,2.17c6.27.1,12.53.27,18.79.35,19.43.27,38.86.57,58.29.73,13.24.11,26.5,0,39.75,0v.77L344.22,244.85l-.06,1.16,59.18,10.74,0,.57-103.7,11.62,0,1.05,58.8,3.8,0,.55-83,11.15-.11,1,14.68,7.18,0,.53-76.39,9.61-.1-.4,31.73-10.84-.08-.84h-81Z" transform="translate(-1 -126.41)" style="fill:#FFF" />
          </g>
        </svg>
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
  // {
  //   label: 'Artists',
  //   key: 'artists',

  //   children: [
  //     {
  //       label: () =>
  //         h(
  //           RouterLink,
  //           {
  //             to: '/artists/sabrinaband'
  //           },
  //           { default: () => 'Sabrina Band' }
  //         ),
  //       key: 'sabrinaband'
  //     },
  //     {
  //       label: () =>
  //         h(
  //           RouterLink,
  //           {
  //             to: '/artists/coastalkanpai'
  //           },
  //           { default: () => 'Coastal Kanpai' }
  //         ),
  //       key: 'coastalkanpai'
  //     },
  //     {
  //       label: () =>
  //         h(
  //           RouterLink,
  //           {
  //             to: '/artists/yellowflower'
  //           },
  //           { default: () => 'Yellow Flower' }
  //         ),
  //       key: 'yellowflower'
  //     },
  //     {
  //       label: () =>
  //         h(
  //           RouterLink,
  //           {
  //             to: '/artists/fayehong'
  //           },
  //           { default: () => 'Faye Hong' }
  //         ),
  //       key: 'fayehong'
  //     }
  //   ]
  // },
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
      min-width: 100px;
      padding-left: 5rem;
      svg{
        width: 100px;
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
    svg{
      width: 100px;
    }
  }
.rightBtn *{
  margin: 0 .05rem;
}
</style>
