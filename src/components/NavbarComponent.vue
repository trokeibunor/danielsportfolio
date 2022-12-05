<script setup></script>
<template>
  <nav>
    <div class="navContent">
      <div class="logo">
        <h1>DANIEL A.</h1>
        <!-- div group design -->
        <div class="logoGroup">
          <div id="logoOne"></div>
          <div id="logoTwo"></div>
          <div id="logoThree"></div>
        </div>
      </div>
      <div class="nav-menu">
        <a href="#">Works</a>
        <a href="#">Contact</a>
        <a href="#">About Daniel</a>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
nav {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: #282c33;
  border-bottom: 1px solid #fff;
  .navContent {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      flex-direction: row;
      .logoGroup {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        margin-left: 8px;
        #logoOne {
          width: 1px;
          height: 50%;
          background-color: #fff;
          margin-right: 8px;
        }
        #logoTwo {
          width: 1px;
          height: 95%;
          background-color: #fff;
          margin-right: 8px;
        }
        #logoThree {
          width: 1.5px;
          height: 100%;
          background-color: #fff;
        }
      }
    }
    .nav-menu {
      display: flex;
      a {
        text-decoration: none;
        color: #fff;
        font-weight: 600;
        margin: 0px 8px;
      }
    }
  }
}
</style>
