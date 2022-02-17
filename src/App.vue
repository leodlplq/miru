<template>
  <div id="app">
  <Menu />
  <Iconoir />
  </div>
</template>

<script>
import {Iconoir} from 'iconoir/icons/iconoir.svg'
import Menu from './components/Menu'


export default {
  name: 'App',
  components: {
		Menu, 
    Iconoir
	}
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Josefin Sans';
  color: white;
}

body{
  min-height: 100vh;
  background: #151515;
}

#app {
  
  
}
</style>
