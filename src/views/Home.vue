<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <Notes msg="Welcome to Notes" /> -->
    <div class="message" v-if="message">
      <p>{{message}} </p> 
      <button class="closemessage" v-on:click="closeDiv('.message')">X</button> 
    </div>
    <div class="error" v-if="error">
      <p>{{error}} </p> 
      <button class="closemessage" v-on:click="closeDiv('.error')">X</button> 
    </div>
    <div id="notes">
      <Notes
        v-for="(note, index) in notes"
        :index="index"
        :key="note._id"
        :note="note"
      />
    </div>
  </div>
</template>

<script>
import Notes from "@/components/Notes.vue";

export default {
  name: "Home",
  components: {
    Notes,
  },

  computed: {
    notes() {
      return this.$store.state.notes;
    },
    message() {
      return this.$store.state.message;
    },
    error() {
      return this.$store.state.error;
    },
  },
  watch: {
    notes() {
      return this.notes.reverse();
    }
  },
  methods: {
    closeDiv(divclass) {
      document.querySelector(divclass).style.display = 'none';
    }
  },
  mounted() {
    this.$store.dispatch("getNotes");
  },
};
</script>

<style lang="scss">
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

button {
  cursor: pointer;
  background-color: transparent;
  border: none;
  background-color: rgb(255, 255, 255, 0.1);
  color: rgb(255, 255, 255, 0.5);

  padding: 0.2rem 1rem;
  margin-right: 0.1rem;
  font-size: 3rem;
  border-radius: 1rem;
}

button:hover {
  background-color: rgb(255, 255, 255, 0.5);
  color: rgb(0, 0, 0, 0.5);
  color: rgba(0, 0, 255, 0.425);
}
</style>


