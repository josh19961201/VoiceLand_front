<template>
  <div class="container">
    <div class="header">
      <n-h1 prefix="bar">
        <n-text>
          作品發佈
        </n-text>
      </n-h1>
      <n-select v-model:value="artistFilter" :options="artistOptions" placeholder="請選擇演出者" :work-checkmark="false" style="width:300px;" />
    </div>
    <n-divider style="margin-bottom: 0;" />
    <n-icon size="30" />
    <div v-for="work in pageShows" :key="work._id">
      <WorkCard v-bind="work" />
      <n-divider />
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { apiAuth } from '@/plugins/axios'
import WorkCard from '@/components/WorkCard.vue'
import dayjs from 'dayjs'
import { gsap } from 'gsap'

import { useDialog } from 'naive-ui'

const dialog = useDialog()

const works = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/works')
    works.push(...data.result)
    for (const work of works) {
      work.date = dayjs(work.date.replace(/\./g, '-')).format('MMMM D, YYYY')
    }
    works.sort((a, b) => {
      const dateA = dayjs(a.date)
      const dateB = dayjs(b.date)

      if (dateA.isAfter(dateB)) {
        return -1
      } else if (dateB.isAfter(dateA)) {
        return 1
      }

      return 0
    })
  } catch (error) {
    dialog.error({
      title: '載入失敗',
      content: error?.response?.data?.message || '發生錯誤',
      positiveText: '確認'
    })
  }
})()
const artistOptions = ([
  {
    label: 'All',
    value: 'All'
  }, {
    label: 'Sabrina Band',
    value: 'Sabrina Band'
  }, {
    label: 'Coastal Kanpai',
    value: 'Coastal Kanpai'
  }, {
    label: 'Yellow Flower',
    value: 'Yellow Flower'
  }, {
    label: 'Faye Hong',
    value: 'Faye Hong'
  }])
const artistFilter = ref('All')
const pageShows = computed(() => {
  if (artistFilter.value === 'All') { return works } else {
    return works.filter((work) => {
      return work.artist.includes(artistFilter.value)
    })
  }
})
onMounted(() => {
  gsap.from('.container', {
    opacity: 0,
    duration: 1
  })
})
</script>
<style scoped lang=scss>
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
</style>
