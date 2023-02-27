
<template>
  <n-theme-editor>
    <!-- <n-config-provider :theme-overrides="themeOverrides"> -->
    <n-config-provider :theme-overrides="themeOverrides" :theme="darkTheme">
      <n-message-provider>
        <n-dialog-provider>
          <router-view />
        </n-dialog-provider>
      </n-message-provider>
    </n-config-provider>
  </n-theme-editor>
</template>

<script setup>
import { NConfigProvider, NThemeEditor, darkTheme } from 'naive-ui'

// const themeOverrides = {
//   common: {
//     infoColor: '#5171A5FF',
//     infoColorHover: '#42597EFF',
//     infoColorPressed: '#224277FF',
//     infoColorSuppl: '#5A739CFF',
//     textColorBase: '#21221BFF',
//     warningColor: '#E18216FF',
//     warningColorHover: '#BC6C11FF',
//     warningColorPressed: '#EB7D00FF',
//     warningColorSuppl: '#C86A00FF',
//     errorColorSuppl: '#B74D39FF',
//     errorColorPressed: '#893727FF',
//     errorColorHover: '#A35D50FF',
//     errorColor: '#A94F3EFF'
//   }
// }

</script>

<style>
.pageTitle{
  text-align: center;
}
</style>
