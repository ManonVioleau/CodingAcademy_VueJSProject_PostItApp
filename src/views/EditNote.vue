<template>
  <form action="http://5.135.119.239:3090/notes" id="note" method="put">
    <div class="header">
      <input
        class="title"
        type="text"
        name="title"
        id="title"
        :placeholder="note.title"
        :value="note.title"
      />
      <div class="buttonadddel">
        <button type="submit" @click.stop.prevent="EditNote()">
          <img class="edit" src="@/assets/edit_black_24dp.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="content">
      <div class="task" v-if="typeof note.content[0] == 'undefined'">
        <input style="padding: 1rem 0;"
          type="text"
          name="task"
          id="task0"
          placeholder="Task ..."
        />
      </div>
      <div class="task" v-for="(task, index) in note.content" :key="index">
        <input
          type="text"
          name="task"
          :id="'task' + index"
          :placeholder="task"
          :value="task"
        />
        <div class="buttons">
          <img src="@/assets/delete_black_24dp.svg" alt="" v-on:click="DeleteTask(index)" />
        </div>
      </div>
    </div>
    <div class="add-content2">
      <img src="@/assets/add_black_24dp.svg" alt="" v-on:click="AddTask()" />
    </div>
  </form>
</template>

<script>
// import Note from "@/components/Note.vue";

export default {
  name: "AddNote",
  computed: {
    note() {
      let id = this.$route.params.id;
      let notes = this.$store.state.notes;
      let note = notes.find((note) => note._id == id);
      return note;
    },
    message() {
      return this.$store.state.message;
    },
    error() {
      return this.$store.state.error;
    },
  },
  data() {
    return {
      title: null,
    };
  },
  methods: {
    EditNote() {
      let content = [];
      let id = this.note._id;
      let length = document.querySelectorAll('.task').length;
      for (let i = 0; i < length; i++) {
        content.push(document.querySelectorAll('.task')[i].querySelector('input').value);
      }
      let title = document.querySelector("#title").value;
      this.$store.dispatch("editNotes", { title, content, id });
      this.$router.push({ path: `/notes/${id}` });
    },
    closeDiv(divclass) {
      document.querySelector(divclass).style.display = 'none';
    },
    AddTask() {
      console.log(typeof this.note.content[0]);
      let array = document.querySelectorAll('.task');
      let input = array[array.length - 1].querySelector('input');
      let id = parseInt(input.id.slice(4)) + 1;
      var div = document.createElement("div");
      div.setAttribute("class", `task`);
      div.innerHTML = `<input type='text' name='task' id="task${id}" placeholder='Task...'/>`
      document.querySelector('.content').appendChild(div);
    },
    DeleteTask(index) {
      console.log(index);
      document.querySelector(`#task${index}`).parentElement.remove();

    }
  },
};
</script>

<style scoped lang="scss">
.message, .error {
  background-color: rgba(255, 255, 0, 0.4);
  margin-top: 1rem;
  margin-bottom: -0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;

  display:flex;
  justify-content: space-between;
}

.message {
  background-color: rgba(0, 255, 0, 0.4);
}

.error {
  background-color: rgba(255, 0, 0, 0.4);
}

.message p, .error p {
  margin:auto;
  margin-left: 0.5rem;
}

.closemessage {
  background-color: transparent;
  font-size: 1.5rem;
  color: rgb(0, 0, 0, 0.7);
  border-radius: 70%;
}

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

input {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1.5rem;
  font-family: "Indie Flower", cursive;
  // width: 100%;
}

.title {
  text-transform: uppercase;
  margin: auto;
  margin-left: 0rem;
  font-weight: 600;
  // padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 0, 0.4);
  color: rgba(0, 0, 0, 1);
  font-family: "Indie Flower", cursive;

  font-size: 2rem;
}

.task {
  padding: 0 0 0 1rem;
  // padding: -1rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: -0.5rem;
  font-family: "Indie Flower", cursive;
}

.task input {
  width: 80%;
}

.buttonadddel,
button {
  background-color: transparent;
}

button:hover {
  background-color: transparent;
}

.buttonadddel img {
  width: 2.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  // padding: 0.5rem;
  border-radius: 50%;
  transition: 0.25s;
}

.buttonadddel img:hover {
  background-color: rgba(0, 0, 255, 0.4);
}

.content {
  margin: 1rem 0.5rem;
}

.task {
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
  // padding: 1rem;
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
  // padding: 1rem 1em 1rem 1rem;
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