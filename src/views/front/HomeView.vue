<template>
  <div class="home">
    <div class="carouselOut">
      <n-carousel effect="fade" dot-type="line" autoplay>
        <div v-for="(item) in pageData.banners" :key="item" class="imgContainer">
          <img class="carousel-img" :src="item">
        </div>
      </n-carousel>
    </div>
    <!-- about -->
    <div class="about">
      <div class="aboutInside">
        <div class="title ga1">
          <n-h3>
            <n-text type="warning">
              土地音造
            </n-text>
          </n-h3>
          <n-h3>VOICE LAND INC.</n-h3>
        </div>

        <n-divider />
        <n-p style="white-space: pre-line" class="ga1">
          {{ pageData.intro }}
        </n-p>
      </div>
    </div>
    <!-- show -->
    <div class="show">
      <n-h3 class="title ga2">
        <n-text>
          最新演出
        </n-text>
        <br>
        <n-text type="warning">
          LASTEST SHOW
        </n-text>
      </n-h3>
      <n-divider />
      <div class="content ga2">
        <n-h4>{{ newShow.title }}</n-h4>
        <img :src="newShow.image">
        <n-p>{{ newShow.date }}｜{{ newShow.artists }}</n-p>
      </div>
      <n-divider />
      <router-link to="/show">
        <n-button type="warning" dashed size="large" class="ga2">
          VIEW ALL SHOWS
        </n-button>
      </router-link>
    </div>
    <n-divider />
    <div class="shop">
      <n-h3 class="title ga3">
        <n-text>
          線上商城
        </n-text>
        <br>
        <n-text type="warning">
          ONLINE SHOP
        </n-text>
      </n-h3>
      <n-divider />
      <n-grid cols="3" :x-gap="64" class="ga3">
        <n-gi v-for="product in products" :key="product._id">
          <ProductCard v-bind="product" style="height: 100%;" />
        </n-gi>
      </n-grid>
      <n-divider />
      <router-link to="/shop" class="ga3">
        <n-button type="warning" dashed size="large">
          SHOP NOW！
        </n-button>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted } from 'vue'
import { apiAuth, api } from '@/plugins/axios'
import { useDialog } from 'naive-ui'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
// import { LogoFacebook, Ticket, InformationCircle } from '@vicons/ionicons5'

import dayjs from 'dayjs'

const dialog = useDialog()

const newShow = reactive({})
// const newWork = reactive({})
const products = reactive([])
const pageData = reactive({
  intro: '',
  banners: []
});

(async () => {
  try {
    // 抓banner和介紹
    const { data } = await apiAuth.get('/intro')
    pageData.intro = data.result[0].intro
    pageData.banners.push(...data.result[0].banners)

    // 抓最近的show
    const showsData = await apiAuth.get('/shows')
    for (const show of showsData.data.result) {
      show.artists = show.artists.join(' ／ ')
      show.date = dayjs(show.date.replace(/\./g, '-')).format('MMMM D, YYYY')
    }
    showsData.data.result.sort((a, b) => {
      const dateA = dayjs(a.date)
      const dateB = dayjs(b.date)
      if (dateA.isAfter(dateB)) {
        return -1
      } else if (dateB.isAfter(dateA)) {
        return 1
      }
      return 0
    })
    Object.assign(newShow, showsData.data.result[0])

    // const worksData = await apiAuth.get('/works')
    // for (const work of worksData.data.result) {
    //   work.date = dayjs(work.date.replace(/\./g, '-')).format('MMMM D, YYYY')
    // }
    // worksData.data.result.sort((a, b) => {
    //   const dateA = dayjs(a.date)
    //   const dateB = dayjs(b.date)
    //   if (dateA.isAfter(dateB)) {
    //     return -1
    //   } else if (dateB.isAfter(dateA)) {
    //     return 1
    //   }
    //   return 0
    // })
    // Object.assign(newWork, worksData.data.result[0])

    const productsData = await api.get('/products')
    // 隨機洗牌產品
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
      }
      return array
    }
    const randomItems = shuffle(productsData.data.result).slice(0, 3)
    products.push(...randomItems)
  } catch (error) {
    console.log(error)
    dialog.error({
      title: '載入失敗',
      content: error?.response?.data?.message || '發生錯誤',
      positiveText: '確認'
    })
  }
})()

gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  gsap.from('.ga1', {
    opacity: 0,
    scale: 0.9,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.ga1',
      start: 'top 80%'
    }
  })
})
onMounted(() => {
  gsap.from('.ga2', {
    opacity: 0,
    scale: 0.9,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.ga2',
      start: 'top 80%'
    }
  })
})
onMounted(() => {
  gsap.from('.ga3', {
    opacity: 0,
    scale: 0.9,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.ga3',
      start: 'top 80%'
    }
  })
})
onMounted(() => {
  gsap.from('.home', {
    opacity: 0,
    duration: 1
  })
})
</script>
<style scoped lang="scss">
.home{
  position: relative;
  top: -92px;
}
.carouselOut{
  width: 100vw;
  // height: calc(100vh - 102px);
  height: 100vh;
  .imgContainer{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .carousel-img{
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
}
.about{
  height: 100vh;
  // height: calc(100vh - 92px);
  padding: 0 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  * {
    font-weight: normal;
  }
  background: url(/images/material1.jpg) no-repeat center center;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .aboutInside{
    max-width: 960px;
  }
  .n-h3{
    font-size: 5rem;
    margin: 0;
    line-height: 1;
    font-weight: bolder;
    align-self: flex-start;
  }
  .n-p{
    font-size: 1rem;
    line-height: 2.2;
  }
}
.show{
  // height: calc(100vh - 92px);
  height: 100vh;
  padding: 0 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title{
    text-align: center;
    line-height: 1.2;
    margin: 0;
    .n-text:nth-child(1){
      font-size: 2.2rem;
    }
    .n-text:nth-child(3){
      font-size: 3.5rem;
      font-weight: bolder;
    }
  }

  .content{
    display: flex;
    flex-direction: column;
    align-items: center;
    .n-h4{
      font-size: 2rem;
      font-weight: lighter;
      text-align: center;
    }
    img{
        width: 70%;
        // max-width: 800px;
    }
    .n-p{
      font-size: 1.8rem;
      font-weight: lighter;
    }
  }
}
.shop{
  // height: calc(100vh - 92px);
  height: 100vh;
  // background: #FFF;
  .title{
    text-align: center;
    line-height: 1.2;
    margin: 0;
    .n-text:nth-child(1){
      font-size: 2.2rem;
    }
    .n-text:nth-child(3){
      font-size: 3.5rem;
      font-weight: bolder;
    }
  }
  padding: 0 15vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
