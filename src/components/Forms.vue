<template>
  <div id="app" v-cloak>
  <input type="text" v-model="searchKey" @input="setPage(pageNumber + 1)">
    <p><b>Total Data {{countarticle}}</b></p>

  <ul>
      <li v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0">
      <a href="#/forms" v-on:click="setPage(pageNumber)"  :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
      </li>
  </ul>
  <br/>
  <table class="table table-striped">
    <tr v-for="(user, index) in paginatedUsers" :key="index">
      <td>{{ index + 1 }}</td>
      <td>{{ user.snippet }}</td>
    </tr>
  </table>
  
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      searchKey: '',
      currentPage: 0,
      itemsPerPage: 10,
      resultCount: 0,
      countarticle: 0,
      pageNumber: 0,
    };
  },
  mounted() {
    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=254dec44ebd8455ca44eb8d8215b5eb3', {
      params: {
        page: 1,
      },
    })
    .then((response) => {
      console.log(response.data.response.docs);
      this.users = response.data.response.docs;
      this.countarticle = response.data.response.meta.hits;
    }).catch((err) => {
      console.log(err);
    });
  },
  computed: {
    totalPages() {
      // return Math.ceil(this.countarticle / this.itemsPerPage);
      return Math.ceil(200 / this.itemsPerPage);
    },
    paginatedUsers() {
      return this.users;
    },
  },
  methods: {
    setPage(pageNumber) {
      const searchString = this.searchKey;
      this.currentPage = pageNumber - 1;
      if (searchString !== '') {
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=254dec44ebd8455ca44eb8d8215b5eb3', {
          params: {
            q: searchString,
            page: pageNumber,
          },
        })
        .then((response) => {
          console.log(response.data.response);
          this.users = response.data.response.docs;
          this.countarticle = response.data.response.meta.hits;
        }).catch();
      } else {
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=254dec44ebd8455ca44eb8d8215b5eb3', {
          params: {
            page: pageNumber,
          },
        })
        .then((response) => {
          console.log(response.data.response);
          this.users = response.data.response.docs;
          this.countarticle = response.data.response.meta.hits;
        }).catch();
      }
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages - 1;
      }
      return this.users;
    },
  },
};
</script>

<style>
a {
  color: #999;
}
.current {
  color: red;
}
ul {
  padding: 0;
  list-style-type: none;
}
li {
  display: inline;
  margin: 5px 5px;
}

a.first::after {
  content:'...'
}

a.last::before {
  content:'...'
}

</style>
