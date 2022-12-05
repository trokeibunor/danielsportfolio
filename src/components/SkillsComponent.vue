<template>
  <div class="wid">
    <img id="design" src="../assets/downArrow.png" alt="" />
    <h3>What I do</h3>
    <div class="marqueeContainer">
      <p>Social Media Management</p>
      <p>Email Marketing</p>
      <p>Content Writing</p>
      <p>Copy Writing</p>
      <p>Facebook Ads</p>
      <p>Text Message Marketing</p>
      <p>Instagram Ads</p>
      <!-- repeat elements -->
      <p>Social Media Management</p>
      <p>Email Marketing</p>
      <p>Content Writing</p>
      <p>Copy Writing</p>
      <p>Facebook Ads</p>
      <p>Text Message Marketing</p>
      <p>Instagram Ads</p>
      <!-- repeat elements -->
      <p>Social Media Management</p>
      <p>Email Marketing</p>
      <p>Content Writing</p>
      <p>Copy Writing</p>
      <p>Facebook Ads</p>
      <p>Text Message Marketing</p>
      <p>Instagram Ads</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.wid {
  width: 100%;
  margin: 2rem 0px;
  overflow: hidden;
  position: relative;
  #design {
    position: absolute;
    top: 0;
    left: 50%;
  }
  h3 {
    text-align: center;
    font-size: 24px;
  }
  .marqueeContainer {
    width: 100%;
    display: flex;
    animation: scrolling 20s linear infinite;
    p {
      border: 1px solid #fff;
      padding: 8px 8px;
      margin: 0px 8px;
      border-radius: 4px;
      width: fit-content;
      flex-shrink: 0;
    }
  }
  @keyframes scrolling {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translatex(-1000px);
    }
  }
}
</style>
