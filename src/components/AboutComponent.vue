<script setup></script>
<template>
  <section class="about">
    <div class="about_content">
      <img class="about-img" src="../assets/about_img.png" alt="" />
      <div class="text-section">
        <h3>About me</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet mattis cras at
          scelerisque sed magna. Scelerisque hendrerit id ut tempus facilisis
          nec faucibus elementum. Aliquam orci semper diam blandit morbi eu
          mattis fermentum. Habitant augue imperdiet velit lorem consequat
          feugiat. Pharetra ipsum nibh id risus sapien tortor massa sed sed.
          Sodales sit integer nulla a. Curabitur at magnis diam eget proin. Eu
          in proin amet amet sodales arcu suspendisse arcu eu. Leo augue id
          dignissim commodo duis. Elementum praesent laoreet mauris arcu
          molestie quam tempus egestas v
        </p>
        <button><img src="../assets/Download.svg" alt="" /> Talk to Me</button>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section.about {
  width: 100%;
  .about_content {
    background: #3c3e42;
    box-shadow: 0px 36px 105px rgba(43, 56, 76, 0.1);
    border-radius: 16px;
    position: relative;
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 40% 1fr;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    img.about-img {
      width: 100%;
      height: 100%;
    }
    .text-section {
      button {
        background-color: rgba(0, 0, 0, 0);
        border: 2px solid #00adb5;
        border-radius: 10px;
        display: flex;
        align-items: center;
        padding: 8px 10px;
        color: #00adb5;
        font-weight: 600;
        img {
          margin-right: 8px;
        }
        cursor: pointer;
      }
      button:hover {
        background-color: #fff;
        border: 2px solid #fff;
        color: #00adb5;
      }
    }
  }
  .about_content::before {
    content: "";
    width: 50%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 3.5%;
    left: -30%;
    background-color: rgb(102, 101, 101);
  }
}
</style>
