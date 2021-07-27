<template>
  <div class="message" v-if="message">
    <p>{{ message }}</p>
    <button class="closemessage" v-on:click="closeDiv('.message')">X</button>
  </div>
  <div class="error" v-if="error">
    <p>{{ error }}</p>
    <button class="closemessage" v-on:click="closeDiv('.error')">X</button>
  </div>
  <div id="note">
    <div class="header">
      <h2>{{ note.title }}</h2>
      <div class="buttonadddel">
        <img class="edit" src="@/assets/edit_black_24dp.svg" alt="" v-on:click="editNote(note._id)"/>
        <img class="delete" src="@/assets/delete_black_24dp.svg" alt="" v-on:click="deleteNote(note._id)"/>
      </div>
    </div>
    <div class="content">
      <div class="task" v-for="(task, index) in note.content" :key="index">
        <p>{{ task }}</p>
        <!-- <div class="buttons">
          <img src="@/assets/edit_black_24dp.svg" alt="" />
          <img src="@/assets/delete_black_24dp.svg" alt="" />
        </div> -->
      </div>
    </div>
    <!-- <div class="add-content2">
        <img src="@/assets/add_black_24dp.svg" alt="" />
    </div> -->
  </div>
</template>

<script>
// import Note from "@/components/Note.vue";

export default {
  name: "Note",
  computed: {
    note() {
      let id = this.$route.params.id;
      let notes = this.$store.state.notes;
      let note = notes.find(note => note._id == id)
      return note;
    },
    message() {
      return this.$store.state.message;
    },
    error() {
      return this.$store.state.error;
    },
  },
  methods: {
    deleteNote(id) {
      this.$store.dispatch('deleteNotes', id);
      this.$router.push({ path: `/` });
    },
    editNote(id) {
      this.$router.push({ path: `/notes/edit/${id}` });
    },
    closeDiv(divclass) {
      document.querySelector(divclass).style.display = 'none';
    },
  },
  mounted() {
    this.$store.dispatch("getNotes");
  },
};
</script>

<style scoped lang="scss">
#note {
  // border: 1px solid white;
  padding: 1rem;
  border-radius: 1rem;
  background-color: rgb(255, 255, 255, 0.3);

  position: relative;

  display: block;

  margin: 2.5rem 10%;
}

.header {
  display: flex;
  justify-content: space-between;
  margin: -0.5rem 0.5rem;
  padding: 1rem 0;
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

  font-size: 2rem;
}

.buttonadddel img {
  width: 2.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: 0.25s;
}

.delete:hover {
  background-color: rgba(255, 0, 0, 0.4);
}
.edit:hover {
  background-color: rgba(0, 0, 255, 0.4);
}

.content {
  margin: 1rem 0;
}

.task {
  padding: 0;
  background-color: rgb(255, 255, 255, 0.5);
  box-shadow: 5px 5px 5px rgb(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  margin: 1rem 0;
}

.task:hover img {
  // display: flex;
  visibility: visible;
  transform: translateX(0rem);
}

.task img {
  width: 0.8rem;
}

.task p {
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

.add-content2 img {
  width: 2.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: 0.25s;
}

.add-content2 img:hover {
  background-color: rgba(0, 255, 0, 0.4);
}
</style>