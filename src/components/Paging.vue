<template>
  <form id="main" v-cloak>
    <v-paginator resource_url="resource_url" @update="updateResource"></v-paginator>
    <ul>
      <li v-for="animal in animals">
        {{ animal.name }}
      </li>
    </ul>
  </form>
</template>

<script>
// import axios from 'axios';
import VuePaginator from 'vuejs-paginator';

export default {
  data() {
    return {
      animals: [],
      resource_url: 'http://hootlex.github.io/vuejs-paginator/samples/animals1.json',
    };
  },
  components: {
    VPaginator: VuePaginator,
  },
  methods: {
    updateResource(data) {
      this.animals = data;
    },
  },
};
</script>