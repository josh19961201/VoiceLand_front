
<template>
  <n-config-provider :theme-overrides="themeOverrides" :theme="darkTheme">
    <!-- <n-theme-editor style="display: none;"> -->
    <n-message-provider>
      <n-dialog-provider>
        <router-view />
        <n-back-top :right="100" />
      </n-dialog-provider>
    </n-message-provider>
    <!-- </n-theme-editor> -->
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider, darkTheme } from 'naive-ui'

const themeOverrides = {
  common: {
    primaryColor: '#F2C97DFF',
    primaryColorHover: '#F5D599FF',
    primaryColorPressed: '#E6C260FF',
    primaryColorSuppl: '#F08A00FF',
    bodyColor: '#0D0E0BFF',
    tagColor: 'rgba(51, 51, 51, 1)',
    modalColor: '#11120FFF',
    cardColor: 'rgba(26, 28, 24, 1)',
    tableColor: 'rgba(26, 28, 24, 1)',
    successColor: '#70C0E8FF',
    successColorHover: '#8ACBECFF',
    successColorPressed: '#66AFD3FF',
    popoverColor: '#4C4E48FF',
    successColorSuppl: '#3889C5FF'
  },
  Layout: {
    color: '#0D0E0BFF',
    colorEmbedded: '#0D0E0BFF'
  }

}

</script>

<style>
.pageTitle{
  text-align: center;
}
</style>
