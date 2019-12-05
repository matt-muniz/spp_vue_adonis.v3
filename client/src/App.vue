<template>
  <div id="app">
    <v-app>
      <div>
        <v-app-bar>
          <v-spacer></v-spacer>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
          <v-spacer></v-spacer>
        </v-app-bar>
      </div>
      <v-container>
        <router-view />
      </v-container>
    </v-app>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
