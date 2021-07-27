import { createStore } from "vuex";

export default createStore({
  state: {
    notes: [],
    errorMessage: "",
  },
  mutations: {
    SET_Notes(state, { notes, retour }) {
      if (typeof retour != 'object') {
        retour = {message: false, error: false}
        state.message = retour.message
        state.error = retour.error
      } else {
        state.message = retour.message
        state.error = retour.error
      }
      state.notes = notes
    },
  },
  actions: {
    getNotes({ commit }, retour) {
      fetch("http://5.135.119.239:3090/notes", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then((response) => {
          if (response.ok) {
            response.json().then((data) => {
              let notes = data.notes;
              commit("SET_Notes", { notes, retour });
            });
          } else {
            
            response.json().then((data) => {
              const error = (data && data.message) || response.statusText;
              throw new Error(error);
            });
          }
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
    deleteNotes({ dispatch }, id) {
      fetch(`http://5.135.119.239:3090/notes/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          if (response.status == '200') {
            response.json().then(() => {
              let message = "Your Note has been successfully deleted";
              dispatch('getNotes', {message: message, error: false});
            });
          } else {
            
            response.json().then((data) => {
              const error = (data && data.message) || response.statusText;
              dispatch('getNotes', {message: false, error: error});
              throw new Error(error);

            });
          }
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
    addNotes({ dispatch }, note) {
      fetch(`http://5.135.119.239:3090/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: note.title,
          content: note.contents
        }),
      })
        .then((response) => {
          if (response.status == '201') {
            response.json().then(() => {
              let message = "Your Note has been successfully added";
              dispatch('getNotes', {message: message, error: false});
            });
          } else {
            response.json().then((data) => {
              dispatch('getNotes', {message: false, error: data.error.message});
              throw new Error(data.error.message);
            });
          }
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
    editNotes({ dispatch }, note) {
      let id = note.id;
      fetch(`http://5.135.119.239:3090/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: note.title,
          content: note.content
        }),
      })
        .then((response) => {
          if (response.status == '200') {
            response.json().then(() => {
              let message = "Your Note has been successfully updates";
              dispatch('getNotes', {message: message, error: false});
            });
          } else {
            response.json().then((data) => {
              dispatch('getNotes', {message: false, error: data.error.message});
              throw new Error(data.error.message);
            });
          }
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    }
  },

  modules: {},
});
