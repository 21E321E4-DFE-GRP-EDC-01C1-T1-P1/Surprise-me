<template>
  <div class="create flex justify-center">
    <Create/>
    <List/>
  </div>
</template>
<script>
import Create from '@/components/Events/Create.vue'
import List from '@/components/Events/List.vue'

export default {
  name: 'Events',
  components: {
    Create,
    List
  }
}
</script>
<style >
</style>