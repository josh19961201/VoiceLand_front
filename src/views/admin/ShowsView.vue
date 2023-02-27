<template>
  <n-h1 class="pageTitle">
    演出管理
  </n-h1>
  <n-button @click="openDialog(-1)">
    新增演出
  </n-button>
  <n-modal v-model:show="form.dialog" preset="dialog" title="Dialog" negative-text="取消" positive-text="送出" :mask-closable="false" :on-negative-click="closeForm" :on-positive-click="submitForm" :closable="false" :loading="loading">
    <template #header>
      <div>{{ form._id.length > 0 ? '編輯演出' : '新增演出' }}</div>
    </template>
    <n-card>
      <n-form ref="fromRef" :rules="rules" :model="form">
        <n-grid :cols="12" :x-gap="12">
          <n-form-item-gi :span="10" label="演出名稱" path="title">
            <n-input v-model:value="form.title" placeholder="請輸入活動名稱" />
          </n-form-item-gi>
          <n-form-item-gi :span="2" label="公開" path="display">
            <n-switch v-model:value="form.display" />
          </n-form-item-gi>
          <n-form-item-gi :span="6" label="演出日期" path="date">
            <n-date-picker
              v-model:formatted-value="form.date"
              value-format="yyyy.MM.dd"
              type="date"
              clearable
            />
          </n-form-item-gi>
          <n-form-item-gi :span="6" label="圖片" path="image">
            <n-upload
              v-model:value="form.image" list-type="image-card" accept=".jpg,.jpeg,.png,.gif,.bmp,.tiff,.svg,.webp"
              :default-file-list="originalImage" :max="1" @change="handleChange"
            >
              上傳圖片
            </n-upload>
          </n-form-item-gi>
          <n-form-item-gi :span="12" label="演出者" path="artists">
            <n-select v-model:value="form.artists" :options="artists" multiple :show-checkmark="false" />
          </n-form-item-gi>
          <n-form-item-gi :span="12" label="演出資訊" path="description">
            <n-input
              v-model:value="form.description" type="textarea" :autosize="{ minRows: 3,maxRows: 5 } " placeholder="說說這場演出有多酷！"
            />
          </n-form-item-gi>
          <n-form-item-gi :span="12" label="外部連結" path="links">
            <n-dynamic-input v-model:value="form.links" :on-create="creatLink">
              <template #create-button-default>
                加入外部連結
              </template>
              <template #default="{ value }">
                <n-select v-model:value="value.linkType" :options="linksType" />
                <n-input v-model:value="value.link" type="text" placeholder="請輸入連結" />
              </template>
            </n-dynamic-input>
          </n-form-item-gi>
        </n-grid>
      </n-form>
    </n-card>
  </n-modal>
  <n-divider />
  <n-data-table :columns="columns" :data="shows" />
</template>

<script setup>
import { ref, reactive, h } from 'vue'
import { apiAuth } from '@/plugins/axios'
import dayjs from 'dayjs'

import { useMessage, useDialog, NButton, NP } from 'naive-ui'

const message = useMessage()
const dialog = useDialog()
const loading = ref(false)

const originalImage = ref([])
const rules = {
  image: {
    required: true,
    message: '請上傳圖片'
  },
  title: {
    required: true,
    message: '這一欄忘了填',
    trigger: ['input', 'blur']
  },
  date: { },
  description: {
    required: true,
    message: '這一欄忘了填',
    trigger: ['input', 'blur']

  },
  artists: {
    required: true,
    message: '請選擇演出者'
  }
}
const artists = [
  {
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
  }]
const linksType = [
  {
    label: 'Facebook',
    value: 'fb'
  }, {
    label: 'Information',
    value: 'info'
  }, {
    label: 'Ticket',
    value: 'ticket'
  }
]
const creatLink = () => {
  return {
    linkType: '',
    link: ''
  }
}
const fromRef = ref(null)
const shows = reactive([])
const form = reactive({
  _id: '',
  image: [],
  title: '',
  date: dayjs().format('YYYY.MM.DD'),
  description: '',
  display: false,
  artists: [],
  links: [],
  dialog: false,
  idx: -1
})

const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.image = []
    form.title = ''
    form.date = dayjs().format('YYYY.MM.DD')
    form.description = ''
    form.display = false
    form.artists = []
    form.links = []
    form.dialog = false
    form.idx = -1
  } else {
    form._id = shows[idx]._id
    // form.image = shows[idx].image
    form.title = shows[idx].title
    form.date = shows[idx].date
    form.description = shows[idx].description
    form.display = shows[idx].display
    form.artists = shows[idx].artists
    form.links = shows[idx].links
    form.dialog = shows[idx].dialog
    form.idx = idx

    originalImage.value.push({
      id: '001',
      name: 'image',
      status: 'finished',
      url: shows[idx].image
    })

    form.image = originalImage.value
  }
  form.dialog = true
}

const handleChange = (options) => {
  form.image = options.fileList?.[0]?.file
}
const closeForm = () => {
  originalImage.value = []
  form.dialog = false
}

const submitForm = async () => {
  fromRef.value?.validate(async (errors) => {
    if (!errors) {
      // fd.append(key, value)
      const fd = new FormData()
      if (form.image[0]?.url) { form.image = form.image[0].url }
      fd.append('image', form.image)
      fd.append('title', form.title)
      fd.append('date', form.date)
      fd.append('description', form.description)
      fd.append('display', form.display)
      // fd.append('artists', form.artists)
      for (const i of form.artists) {
        fd.append('artists', i)
      }
      // fd.append('links', form.links)
      form.links = form.links.map((i) => {
        const linkType = i.linkType
        const link = i.link
        return { linkType, link }
      })
      for (const i of form.links) {
        fd.append('linksType', Object.entries(i)[0][1])
        fd.append('linksValue', Object.entries(i)[1][1])
      }

      try {
        if (form._id.length === 0) {
          const { data } = await apiAuth.post('/shows', fd)
          shows.push(data.result)
          dialog.success({
            title: '新增成功',
            content: '演出活動新增成功',
            positiveText: '確認'
          })
          closeForm()
        } else {
          const { data } = await apiAuth.patch('/shows/' + form._id, fd)
          shows[form.idx] = data.result
          dialog.success({
            title: '編輯成功',
            content: '演出資訊編輯成功',
            positiveText: '確認'
          })
          closeForm()
        }
        form.dialog = false
      } catch (error) {
        dialog.error({
          title: '新增失敗',
          content: error?.response?.data?.message || '發生錯誤',
          positiveText: '確認'
        })
        console.log(error)
      }
      loading.value = false
    } else {
      message.error('請檢查資料是否完整')
    }
  })
  // 避免觸發預設dialog
  return false
}

// 演出列表
(async () => {
  try {
    const { data } = await apiAuth.get('/shows/all')
    shows.push(...data.result)
  } catch (error) {
    dialog.error({
      title: '載入失敗',
      content: error?.response?.data?.message || '發生錯誤',
      positiveText: '確認'
    })
  }
})()

const createColumns = ({ edit }) => {
  return [
    {
      title: '演出名稱',
      key: 'title'
    },
    {
      title: '日期',
      key: 'date'
    },
    {
      title: '演出者',
      key: 'artists',
      render (row, idx) {
        return h(
          NP,
          {
          },
          {
            default: () => {
              return row.artists.join('、')
            }
          }
        )
      }
    },
    {
      title: '',
      key: 'edit',
      render (row, idx) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => edit(row, idx)
          },
          { default: () => '編輯' }
        )
      }
    }
  ]
}
const columns = createColumns({
  edit (row, idx) {
    openDialog(idx)
  }
})

</script>
<style scoped lang="scss">
.n-base-select-option__check{
    display:none
}
</style>
