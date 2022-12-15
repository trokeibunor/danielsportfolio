<script setup>
import { ref } from "vue";

const dropDown = ref(false);
</script>
<template>
  <nav>
    <div class="navContent">
      <a href="/#top" class="logo">
        <h1>DANIEL A.</h1>
        <!-- div group design -->
        <div class="logoGroup">
          <div id="logoOne"></div>
          <div id="logoTwo"></div>
          <div id="logoThree"></div>
        </div>
      </a>
      <div class="nav-menu">
        <a href="/#work">Works</a>
        <a href="/#contact">Contact</a>
        <a href="/#about">About Daniel</a>
      </div>
      <div class="mobileToggler">
        <img
          src="../assets/menu_toggler_dark.svg"
          @click="dropDown = true"
          v-if="dropDown == false"
          alt=""
        />
        <img
          src="../assets/dark_cancel.svg"
          @click="dropDown = false"
          v-if="dropDown == true"
          alt=""
        />
      </div>
    </div>
    <transition name="fade">
      <!-- Mobile Menu -->
      <div class="mobile-drop" v-if="dropDown">
        <a href="/#top" @click="dropDown = false" class="mobile-nav">Home</a>
        <a href="/#about" @click="dropDown = false" class="mobile-nav">About</a>
        <a href="/#work" @click="dropDown = false" class="mobile-nav">Works</a>
        <a href="/#contact" @click="dropDown = false" class="mobile-nav"
          >Contact</a
        >
      </div>
    </transition>
  </nav>
</template>
<style lang="scss">
// animation
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
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
      text-decoration: none;
      color: #fff;
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
  .mobile-drop {
    display: none;
  }
  .mobileToggler {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    // tablet
  }
  @media screen and (max-width: 768px) {
    position: sticky;
    .navContent {
      position: relative;
      .nav-menu {
        display: none;
      }
    }
    .mobile-drop {
      display: flex;
      flex-direction: column;
      position: absolute;
      width: 100%;
      top: 100%;
      z-index: 10;
      padding: 0.5rem 0px;
      background-color: #282c33;
      .mobile-nav {
        margin: 1.25rem;
        text-decoration: none;
        font-weight: 600;
      }
      a {
        text-decoration: none;
        font-size: 16px;
        color: #fff;
      }
    }
    .mobileToggler {
      display: block;
    }
  }
}
</style>
