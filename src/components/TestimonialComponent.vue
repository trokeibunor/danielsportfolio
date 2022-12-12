<script setup></script>
<template>
  <section class="testimonial">
    <div class="testimonial_content">
      <div class="social_div">
        <div id="line"></div>
        <div class="social_links">
          <a href="#"><img src="../assets/github_icon.svg" alt="" /></a>
          <a href="#"><img src="../assets/dribble_icon.svg" alt="" /></a>
          <a href="#"><img src="../assets/figma_icon.svg" alt="" /></a>
        </div>
      </div>
      <div class="testimonials_row">
        <div class="button_left">
          <img src="../assets/right_circle.svg" alt="" />
        </div>
        <div class="testicon">
          <div class="testimonial_talk">
            <p>Working with daniel has been an awesome experience.</p>
          </div>
          <p class="testimonial_author">Emmanuel Okeibunor</p>
        </div>
        <div class="button_right">
          <img src="../assets/right_circle.svg" alt="" srcset="" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.testimonial {
  min-height: 50vh;
  width: 100%;
  .testimonial_content {
    width: 85%;
    height: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 2.5% 1fr;
    .social_div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      #line {
        height: 30vh;
        width: 1px;
        background-color: #fff;
      }
      .social_links {
        display: flex;
        flex-direction: column;
        flex-direction: center;
      }
    }
    .testimonials_row {
      width: 100%;
      display: grid;
      grid-template-columns: 10% 1fr 10%;
      column-gap: 2%;
      justify-content: space-around;
      align-items: center;
      .button_left {
        img {
          transform: rotate(180deg);
        }
      }
      .button_left,
      .button_right {
        display: flex;
        justify-content: center;
        cursor: pointer;
      }
      .testicon {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        .testimonial_talk {
          border: 1px solid #fff;
          width: 100%;
          padding: 1.5rem 0px;
          margin: 0px;
          p {
            padding: 0px 1rem;
          }
          position: relative;
        }
        .testimonial_talk::before {
          position: absolute;
          content: url("../assets/quote_up.svg");
          left: 2.5%;
          top: -15%;
        }
        .testimonial_talk::after {
          position: absolute;
          content: url("../assets/quote_down.svg");
          right: 2.5%;
          bottom: -15%;
        }
        .testimonial_author {
          border: 1px solid #fff;
          padding: 1rem;
          margin-top: 8px;
          width: fit-content;
          align-self: flex-end;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    min-height: auto;
    .testimonial_content {
      display: block;
      // margin: 1rem 0px;
      .social_div {
        display: none;
      }
      .testimonials_row {
        grid-template-columns: 2% 1fr 2%;
        margin: 2.5rem 0px;
      }
    }
  }
}
</style>
