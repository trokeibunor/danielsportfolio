<script setup></script>
<template>
  <section class="hero">
    <div class="hero_content">
      <div class="left-side">
        <div class="text_section">
          <div class="hello_badge">&#128075; Hello, I'm</div>
          <h1>Daniel</h1>
          <p>Your next digital media manager</p>
          <!-- view contact -->
          <a href="/#about">
            <img src="../assets/DownloadHero.svg" alt="" /> Get to Know Me
          </a>
        </div>
      </div>
      <div class="right-side"><img src="../assets/hero_img.png" alt="" /></div>
    </div>
  </section>
</template>
<style lang="scss">
.hero {
  width: 100%;
  border-bottom: 1px solid #fff;
  .hero_content {
    width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 40% 1fr;
    align-items: center;
    justify-items: center;
    column-gap: 5%;
    .left-side {
      .text_section {
        .hello_badge {
          background: rgba(0, 173, 181, 0.5);
          border-radius: 1.5rem;
          color: #00adb5;
          width: fit-content;
          padding: 4px 8px;
          font-weight: 600;
          display: flex;
          align-items: center;
        }
        h1 {
          font-size: 48px;
          font-weight: 600;
          margin: 1rem 0px;
          padding: 0;
          line-height: 100%;
        }
        p {
          width: 100%;
        }
        a {
          background-color: rgba(0, 0, 0, 0);
          text-decoration: none;
          border: 2px solid #00adb5;
          width: fit-content;
          border-radius: 10px;
          display: flex;
          align-items: center;
          padding: 8px 10px;
          color: #00adb5;
          font-weight: 600;
          margin: 1rem 0px;
          img {
            margin-right: 8px;
          }
          cursor: pointer;
        }
        a:hover {
          background-color: #fff;
          border: 2px solid #fff;
          color: #00adb5;
        }
      }
    }
    .right-side {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media screen and (max-width: 1084px) {
    // tablet
  }
  @media screen and (max-width: 768px) {
    .hero_content {
      display: flex;
      flex-direction: column-reverse;
      .left-side {
        text-align: center;
        .text_section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
          h1 {
            margin: 0.5rem;
          }
          p {
            width: 100%;
            margin: 0px;
          }
        }
        button {
          margin-bottom: 2rem;
        }
      }
    }
  }
}
</style>
