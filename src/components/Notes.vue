<template>
  <div class="note">
    <div class="header">
      <h2 v-if="note.title.length < 15">{{ note.title }}</h2>
      <h2 v-else>{{ note.title.slice(0, 15) }}...</h2>
      <img
        src="@/assets/read_more_black_24dp.svg"
        alt=""
        v-on:click="getNote(note._id)"
      />
      <!-- <img src="@/assets/delete_black_24dp.svg" alt=""> -->
    </div>
    <div class="content" v-for="(task, index) in note.content" :key="index">
      <p v-if="index < 2 && task.length <= 20">{{ task }}</p>
      <p v-else-if="index < 2">{{ task.slice(0, 20) }}...</p>
      <!-- <div class="buttons" v-if="index < 2">
        <img src="@/assets/edit_black_24dp.svg" alt="" v-on:click="created()" />
        <img src="@/assets/delete_black_24dp.svg" alt="" 
        />
      </div> -->
    </div>
    <div class="add-content" style="" v-if="note.content.length > 2">
      <!-- <p style="color: white;">...</p>
      <p v-if="note.content.length > 2">...</p> -->
      <img
        src="@/assets/more_horiz_black_24dp.svg"
        alt=""
      />
    </div>

    <img
      style="
        <!-- position: absolute;
        bottom: 1rem;
        right: 1rem; -->
        width: 2rem;
        background-color: rgb(255, 0, 0, 0.2);
        padding: 0.5rem;
        border-radius: 50%;
        cursor: pointer;
      "
      src="@/assets/delete_white_24dp.svg"
      alt=""
      v-on:click="deleteNote(note._id)"
    />
  </div>
</template>

<script>
export default {
  name: "Notes",
  props: {
    index: Number,
    key: String,
    note: {
      _id: String,
      title: String,
      content: Array,
    },
  },
  methods: {
    getNote(id) {
      this.$router.push({ path: `/notes/${id}` });
    },
    deleteNote(id) {
      this.$store.dispatch('deleteNotes', id);
    },
  },
};
</script>

<style scoped lang="scss">
.note {
  // border: 1px solid white;
  padding: 1rem;
  border-radius: 1rem;
  background-color: rgb(255, 255, 255, 0.3);

  position: relative;
}

.header {
  display: flex;
  justify-content: space-between;
  margin: -0.5rem 0.5rem;
  padding: 1rem 0;
}

.header img {
  width: 3rem;
  cursor: pointer;
  transition: 0.25s;
  margin-right: 0.5rem;
}

.header img:hover {
  transform: scale(1.25);
}

.header h2 {
  text-transform: uppercase;
  margin: auto;
  margin-left: 0rem;
  font-weight: 600;
  padding: 0 1rem;
  background-color: rgba(255, 255, 0, 0.4);
  color: rgba(0, 0, 0, 0.8);
  font-family: "Indie Flower", cursive;
}

.content {
  background-color: rgb(255, 255, 255, 0.5);
  box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.3);
  margin: 1rem 0;

  display: flex;
  justify-content: space-between;
  overflow: hidden;

  // max-height: 5rem;
}

.content:hover img {
  // display: flex;
  visibility: visible;
  transform: translateX(0rem);
}

.content img {
  width: 0.8rem;
}

.content p {
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin: auto;
  margin-left: 0;
  margin-bottom: -0.5rem;
  font-family: "Indie Flower", cursive;
}

.buttons img:hover {
  // border: 3px solid rgba(255, 255, 0, 0.4);
  background-color: rgba(255, 255, 0, 0.4);
}

.buttons img {
  width: 1.5rem;
  // padding: 0 0.5rem;
  padding: 1rem 1em 1rem 1rem;
  margin: 0 0 -0.3rem 0;
  // display:none;
  visibility: hidden;
  transform: translateX(5rem);
  background-color: rgb(0, 0, 0, 0.1);
  border: 3px solid rgb(0, 0, 0, 0);
  transition: 0.5s;
  cursor: pointer;
}

.add-content {
  // background-color: transparent;
  // border: none;
  // color: rgb(255, 255, 255, 0.5);

  // font-size: 2.5rem;
  // padding: 0;
  // margin: -0.5rem 0;
  // color: rgb(0, 0, 0, 0.7);
  text-align: center;
  // width: 3rem;
  // margin: auto;
  // background-color: rgb(255, 255, 255, 0.5);
  // box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.3), -5px -5px 5px rgb(255, 255, 255, 0.1);
  // border-radius: 1rem;
  // background-color: rgb(255, 255, 255, 0.5);
  // overflow: hidden;
}

.add-content img {
  // cursor: pointer;
  width: 2.5rem;
  margin-top: -2rem;
}

// .add-content img:hover {
//   transform: scale(1.25);
// }

// .add-content p:hover {
//   box-shadow: -5px -5px 5px rgb(0, 0, 0, 0.3), 5px 5px 5px rgb(255, 255, 255, 0.1);;

// }

// .content
</style>