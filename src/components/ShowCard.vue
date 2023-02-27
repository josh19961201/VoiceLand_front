
<template>
  <n-grid cols="12" item-responsive responsive="screen">
    <n-gi span="5">
      <n-space justify="center">
        <img :src="image" style="width: 35vw;">
      </n-space>
    </n-gi>
    <n-gi span="7">
      <n-space justify="start" align="start" style="height: 100%; margin-left: 3rem;">
        <n-grid cols="12" x-gap="36">
          <n-gi span="12">
            <n-h2 style="font-size: 1.8rem; font-weight: normal;">
              {{ title }}
            </n-h2>
          </n-gi>
          <n-gi span="3" class="content">
            <n-h4>{{ date }}</n-h4>
            <n-h4 style="white-space: pre-line; margin: 1rem 0;">
              {{ artists }}
            </n-h4>
            <span v-for="i in links" :key="i._id">
              <n-icon size="30" style="margin-right: .5rem;">
                <n-a :href="i.link">
                  <LogoFacebook v-if="i.linkType==='fb'" />
                  <Ticket v-else-if="i.linkType==='ticket'" />
                  <InformationCircle v-else />
                </n-a>
              </n-icon>
            </span>
          </n-gi>
          <n-gi span="9">
            <n-p style="white-space: pre-line;  font-weight: lighter; line-height: 2;">
              {{ description }}
            </n-p>
          </n-gi>
        </n-grid>
      </n-space>
    </n-gi>
  </n-grid>
</template>
<script setup>
import { LogoFacebook, Ticket, InformationCircle } from '@vicons/ionicons5'

defineProps({
  /* eslint-disable */
  title:{
    type: String,
    default: ''
  },
  _id: {
    type: String,
    default: ''
  },
  artists: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  display: {
    type: Boolean,
    default: false
  },
  links: {
    type: Array,
    default: []
  }
  /* eslint-enable */
})

</script>
<style scoped lang="scss">
.content{
  & *, *{
    font-weight: lighter;
  }
}
</style>
