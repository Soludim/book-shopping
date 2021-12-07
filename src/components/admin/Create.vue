<template>
  <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
    <div class="panel panel-default">
      <div class="panel-heading">
        <div class="panel-title">{{this.createMode ? 'CREATE ' : 'EDIT '}} BOOK</div>
      </div>
      <div class="panel-body">
        <form>
          <div class="row">
            <div class="col-lg-1">Title</div>
            <div class="col-lg-11">
              <input class="form-control" type="text" v-model="title" />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-1">Author</div>
            <div class="col-lg-11">
              <input class="form-control" type="text" v-model="author" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-1">Image Url</div>
            <div class="col-lg-11">
              <input class="form-control" type="text" v-model="coverImage" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-1">Price</div>
            <div class="col-lg-5">
              <input class="form-control" min="0" type="number" v-model="price" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-1">Quantity</div>
            <div class="col-lg-5">
              <input class="form-control" min="1" type="number" v-model="quantity" />
            </div>
          </div>

          <div class="row">
            <div class="pull-right">
              <button
                class="btn btn-primary"
                :disabled="done"
                @click.prevent="save"
              >{{this.createMode ? 'SAVE ' : 'UPDATE '}}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["book"],
  data() {
    return {
      title: this.book ? this.book.title : "",
      author: this.book ? this.book.author : "",
      coverImage: this.book ? this.book.coverImage : "",
      price: this.book ? this.book.price : "",
      quantity: this.book ? this.book.quantity : "",
      createMode: this.book ? false : true,
    };
  },
  computed: {
    bookCount() {
      return this.$store.getters.books.length;
    },
    done() {
      //Validate form
      if (this.title && this.author && this.price && this.quantity) {
        return false;
      }
      return true;
    },
  },
  methods: {
    save() {
      if (this.createMode) {
        let book = {
          id: this.bookCount + 1,
          title: this.title,
          author: this.author,
          coverImage: this.coverImage,
          price: this.price,
          quantity: this.quantity,
        };
        this.$store.dispatch("addBook", book);
        this.$http.put('https://solu-bookshop.firebaseio.com/data/books.json', this.$store.getters.books);
        this.$router.push("/admin");
      } else {
        let book = {
          id: this.book.id,
          title: this.title,
          author: this.author,
          coverImage: this.coverImage,
          price: this.price,
          quantity: this.quantity,
        };
        this.$store.dispatch("editBook", book);
        this.$http.put('https://solu-bookshop.firebaseio.com/data/books.json', this.$store.getters.books);
        this.$router.push("/admin");
      }
    },
  },
};
</script>
<style scoped>
.row {
  padding: 8px;
}
</style>