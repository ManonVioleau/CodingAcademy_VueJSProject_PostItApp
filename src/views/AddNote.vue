<template>
  <form
    action="http://5.135.119.239:3090/notes"
    id="note"
    method="post"
  >
    <!-- <div id="note"> -->
    <div class="header">
      <input
        class="title"
        type="text"
        name="title"
        id="title"
        placeholder="Note title"
        v-model="title"
      />
      <div class="buttonadddel">
        <button type="submit" @click.stop.prevent="AddNote()">+</button>
      </div>
    </div>
    <div class="content">
      <div class="task" id="task0">
        <input type="text" name="content" id="content" placeholder="Task..." v-model="content"/>
      </div>
    </div>
    <div class="add-content2">
      <img src="@/assets/add_black_24dp.svg" alt="" v-on:click="AddTask()" />
    </div>
    <!-- </div> -->
  </form>
</template>

<script>
// import Note from "@/components/Note.vue";

export default {
  name: "AddNote",
  computed: {},
  data() {
    return {
      title : null,
      i: 0,
      content: [],
      contents: [],
    }
  },
  methods: {
    AddNote() {
      let title = this.title;
      let content = this.content;
      let contents = this.contents;
      contents.push(content);
      this.$store.dispatch("addNotes", {title, contents});
      this.$router.push({ path: `/` });
    },
    AddTask() {
      let i = this.i;
      this.i ++;
      this.contents.push(this.content);
      let content = this.content;
      var div = document.createElement("div");
      div.setAttribute("class", `task`);
      div.setAttribute("id", `task${i+1}`);
      div.innerHTML = `<input type='text' name='content' id='content' placeholder='Task...' disabled value='${content}'/>`
      document.querySelector(`#task0`).querySelector('input').value = "";
      document.querySelector(`#task0`).before(div);
      
    },
  },
};
</script>

<style lang="scss">
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
  padding: 0.5rem 1rem;
  background-color: rgba(255, 255, 0, 0.4);
  color: rgba(0, 0, 0, 1);
  font-family: "Indie Flower", cursive;

  font-size: 2rem;
}

.task {
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: -0.5rem;
  font-family: "Indie Flower", cursive;
}

.task input {
  width: 100%;
}

.buttonadddel img {
  width: 2.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: 0.25s;
}

.buttonadddel img:hover {
  background-color: rgba(255, 0, 0, 0.4);
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