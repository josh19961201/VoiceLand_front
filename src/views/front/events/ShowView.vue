<template>
  <div class="container">
    <div class="header">
      <n-h1 prefix="bar">
        <n-text>
          演出資訊
        </n-text>
      </n-h1>
      <n-select v-model:value="artistsFilter" :options="artistsOptions" placeholder="請選擇演出者" :show-checkmark="false" style="width:300px;" />
    </div>
    <n-divider />
    <div v-for="show in pageShows" :key="show._id">
      <ShowCard v-bind="show" />
      <n-divider />
    </div>
  </div>
</template>
<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { apiAuth } from '@/plugins/axios'
import ShowCard from '@/components/ShowCard.vue'
import dayjs from 'dayjs'
import { gsap } from 'gsap'

import { useDialog } from 'naive-ui'

const dialog = useDialog()

const shows = reactive([]);

(async () => {
  try {
    const { data } = await apiAuth.get('/shows')
    shows.push(...data.result)
    for (const show of shows) {
      show.artists = show.artists.join('\r\n')
      show.date = dayjs(show.date.replace(/\./g, '-')).format('MMMM D, YYYY')
    }
    console.log(shows[4])

    shows.sort((a, b) => {
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
const artistsOptions = ([
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
const artistsFilter = ref('All')
const pageShows = computed(() => {
  if (artistsFilter.value === 'All') { return shows } else {
    return shows.filter((show) => {
      return show.artists.includes(artistsFilter.value)
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
