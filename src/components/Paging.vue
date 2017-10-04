<template>
  <div id="app" v-cloak>
  <input type="text" v-model="searchKey">
  <ul>
      <li v-for="user in paginatedUsers">{{ user.name }}</li>
  </ul>

  <ul>
      <li v-for="pageNumber in totalPages" v-if="Math.abs(pageNumber - currentPage) < 3 || pageNumber == totalPages - 1 || pageNumber == 0">
      <a href="#/paging" @click="setPage(pageNumber)"  :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages - 1 && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 0 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }}</a>
      </li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'Tom' },
        { id: 2, name: 'Kate' },
        { id: 3, name: 'Jack' },
        { id: 4, name: 'Jill' },
        { id: 4, name: 'bill' },
        { id: 4, name: 'aill' },
        { id: 4, name: 'cill' },
        { id: 4, name: 'dill' },
        { id: 4, name: 'eill' },
        { id: 4, name: 'cill' },
        { id: 4, name: 'dill' },
        { id: 4, name: 'eill' },
        { id: 4, name: 'cill' },
        { id: 4, name: 'dill' },
        { id: 4, name: 'eill' },
        { id: 4, name: 'cill' },
        { id: 4, name: 'dill' },
        { id: 4, name: 'eill' },
        { id: 4, name: 'cill' },
        { id: 4, name: 'dill' },
        { id: 4, name: 'eill' },
      ],
      searchKey: '',
      currentPage: 0,
      itemsPerPage: 2,
      resultCount: 0,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.usersFilteredBySearchKey.length / this.itemsPerPage);
    },
    usersFilteredBySearchKey() {
      const result = this.users.filter((item) => {
        if (item.name.toLowerCase().indexOf(this.searchKey) !== -1) {
          return true;
        }
        return false;
      });
      return result;
    },
    paginatedUsers() {
      if (this.currentPage >= this.totalPages) {
        this.currentPage = this.totalPages - 1;
      }
      const index = this.currentPage * this.itemsPerPage;
      return this.usersFilteredBySearchKey.slice(index, index + this.itemsPerPage);
    },
  },
  methods: {
    setPage(pageNumber) {
      this.currentPage = pageNumber - 1;
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
