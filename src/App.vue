<template>
  <div id="app">
    <div id="nav">
      <router-link to="home">Home</router-link> |
      <router-link to="layout">Layout</router-link> |
      <router-link to="container">Container</router-link> |
      <router-link to="iconlink">IconLink</router-link> |
      <router-link to="button">Button</router-link> |
      <router-link to="radiocheckbox">RadioCheckbox</router-link> |
      <router-link to="input">Input</router-link> |
      <router-link to="select">Select</router-link> |
      <router-link to="cascader">Cascader</router-link> |
      <router-link to="switch">Switch</router-link> |
      <router-link to="slider">Slider</router-link> |
      <router-link to="timepicker">TimePicker</router-link> |
      <router-link to="datepicker">DatePicker</router-link> |
    </div>
    <nav id="content">
      <router-view/>
    </nav>
    
    
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
#nav{
  color:seagreen;
  font-weight: 200px;
}
</style>
