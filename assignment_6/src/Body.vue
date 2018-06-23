<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <server-list></server-list>
    </div>
    <div class="col-xs-12 col-sm-6">
      <p>Server Details are currently not updated</p>
    </div>
  </div>
</template>

<script>
  import Servers from './ServerList.vue'
  export default {
    components: {
      'server-list': Servers
    }
  }
</script>
