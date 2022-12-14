<script setup></script>
<template>
  <section class="hero">
    <div class="hero_content">
      <div class="left-side">
        <div class="text_section">
          <div class="hello_badge">&#128075; Hello, I'm</div>
          <h1>Daniel <br />Your next digital media manager</h1>
          <p>
            Daniel is a creative with over 6 years experience with a proven
            track record of creating contents to drive growth.
          </p>
          <!-- view contact -->
          <button>
            <img src="../assets/Download.svg" alt="" /> Get to Know Me
          </button>
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
          width: 60%;
        }
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
        .text_section {
          margin-top: 1rem;
          p {
            width: 100%;
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
