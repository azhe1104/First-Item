<script setup>
import { ref } from 'vue'
import { artGetChannelsService, artDelChannelsService } from '../../api/article'
import { Delete, Edit } from '@element-plus/icons-vue'
import ChannelEdit from './components/ChannelEdit.vue'
const channelList = ref([])

const loading = ref(false)

// 通过ref绑定channel-edit 组件 使用其内部方法
const dialog = ref()

// 获取数据
const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  // channelList.value = []
  loading.value = false
}
getChannelList()

// 删除按钮
const onDelChannel = async (row) => {
  await ElMessageBox.confirm('你确定要删除该分类么', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  })
    .then(async () => {
      await artDelChannelsService(row.id)
      ElMessage.success('删除成功')
      getChannelList()
    })
    .catch(() => {})
}
// 编辑按钮
const onEditChannel = (row) => {
  dialog.value.open(row)
}
// 添加分类按钮
const onAddChannel = () => {
  dialog.value.open({})
}
// 父组件监听success事件，进行调用回显
const onSuccess = () => {
  getChannelList()
}
</script>

<template>
  <page-container title="文章分类">
    <template #extra>
      <el-button @click="onAddChannel">添加分类</el-button>
    </template>
    <!-- 内容 -->
    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column type="index" label="序号" width="100"></el-table-column>
      <el-table-column prop="cate_name" label="分类名称"></el-table-column>
      <el-table-column prop="cate_alias" label="分类别名"></el-table-column>
      <el-table-column label="操作" width="150">
        <!-- row 就是channelList的一项，$index 下标 -->
        <!-- 作用域插槽 #default="scope" 
          在外部获取组件内的数据
          把scope解构{ row, $index } -->
        <template #default="{ row, $index }">
          <el-button
            @click="onEditChannel(row, $index)"
            :icon="Edit"
            circle
            type="primary"
            plain="Primary"
          ></el-button>
          <el-button
            @click="onDelChannel(row, $index)"
            :icon="Delete"
            circle
            type="danger"
            plain="Danger"
          ></el-button>
        </template>
      </el-table-column>
      <!-- 没数据 -->
      <template #empty>
        <el-empty description="没有数据"></el-empty>
      </template>
    </el-table>

    <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
  </page-container>
</template>

<style lang="scss" scoped></style>
