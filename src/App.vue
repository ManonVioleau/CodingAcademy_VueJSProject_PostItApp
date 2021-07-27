<template>
  <div id="nav">
    <router-link to="/"
      ><img src="./assets/home_black_24dp.svg" alt=""
    /></router-link>
    <router-link to="/"><p>Post-It</p></router-link>
    <router-link to="/notes/addNote"> <button>+</button></router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
  text-decoration: none;
  color: white;
  color: rgb(0, 0, 0, 0.7);
  list-style: none;
  z-index: 100;
}

button {
  cursor: pointer;
  background-color: transparent;
  border: none;
}

html {
  background: url(./assets/space-galaxy-background.jpg) top/cover;
}

#app {
  margin: 2rem;
}

#nav {
  padding: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;

  background-color: rgb(255, 255, 255, 0.1);
  // border: solid 1px rgb(255, 255, 255, 0.8);

  display: flex;
  justify-content: space-between;
}

#nav p {
  color: white;
  opacity: 0.7;
  font-size: 2rem;
  margin-top: 0.8rem;

  // margin: auto;
}

#nav img {
  width: 3rem;
  transition: 0.25s;
  margin-top: 0.3rem;
  // margin: auto;
}

#nav img:hover {
  transform: scale(1.5);
  // margin: auto;
}

#notes {
  margin: 0.5rem 0;
  // background-color: rgb(255, 255, 255, 0.1);

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  // display: inline-block;
  // flex-wrap: wrap;

  padding: 1rem 0;

  // min-height: 1000px;
}

@media screen and (max-width: 1600px) {
  #notes {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 1200px) {
  #notes {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 800px) {
  #notes {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
