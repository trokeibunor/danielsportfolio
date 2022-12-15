<script setup>
import { ref } from "vue";
const testCounter = ref(0);
</script>
<template>
  <section class="testimonial">
    <div class="testimonial_content">
      <div class="social_div">
        <div id="line"></div>
        <div class="social_links">
          <a
            href="https://www.linkedin.com/in/daniel-aikhomogbe-bsc-mmba-ch-dmp-031385162/"
            target="_blank"
            ><img src="../assets/Facebook.svg" alt=""
          /></a>
          <a href="https://www.instagram.com/danielaikhomogbe/" target="_blank"
            ><img src="../assets/Instagram.svg" alt=""
          /></a>
          <a
            href="https://www.linkedin.com/in/daniel-aikhomogbe-bsc-mmba-ch-dmp-031385162/"
            target="_blank"
            ><img src="../assets/LinkedIn.svg" alt=""
          /></a>
        </div>
      </div>
      <div class="testimonials_row">
        <div
          class="button_left"
          @click="
            testCounter == 0
              ? (testCounter = 4)
              : (testCounter = testCounter - 1)
          "
        >
          <img src="../assets/right_circle.svg" alt="" />
        </div>
        <!-- I'll loop through this -->
        <div class="testicon" v-if="testCounter == 0">
          <div class="testimonial_talk">
            <p>
              The first time I received Daniel’s files and we had our first
              discussion I knew he was the perfect candidate to head my project.
              It has been an awesome experience ever since
            </p>
          </div>
          <p class="testimonial_author">Joseph Masondo (South Africa)</p>
        </div>
        <div class="testicon" v-if="testCounter == 1">
          <div class="testimonial_talk">
            <p>
              I highly recommend Daniel as a digital marketing expertise and
              would love to work together again.” “Daniel is amazing at his job!
              He knows his way around people, he is good with the clients, does
              whatever it takes to help colleagues and gets things done. He
              makes sure that everyone is on the same page and focused on the
              main goal. I’m sure he will be a great asset to any team he joins.
            </p>
          </div>
          <p class="testimonial_author">Bamisile Ayibiowu (Nigeria)</p>
        </div>
        <div class="testicon" v-if="testCounter == 2">
          <div class="testimonial_talk">
            <p>
              Daniel is an amazing writer and an even better story teller. I've
              worked with him on several projects and he is very easy to work
              with. Overall, he is a good team player, he's good at what he does
              and I'll recommend him anytime.
            </p>
          </div>
          <p class="testimonial_author">Akinlude Damilola (Nigeria)</p>
        </div>
        <div class="testicon" v-if="testCounter == 3">
          <div class="testimonial_talk">
            <p>
              Daniel is a talented writer, story teller and a skilled digital
              marketer. working on the same team with him has been such an
              honour. If you are looking for any position related to his
              portfolio, feel free to reach to him. I recommend his services.
            </p>
          </div>
          <p class="testimonial_author">Ayeni Dolapo (Nigeria)</p>
        </div>
        <div class="testicon" v-if="testCounter == 4">
          <div class="testimonial_talk">
            <p>
              Daniel gives the best content to make your business soar. He
              brings your imaginations into reality that gives you the right
              audience and engagement that your business needs. I recommend
              Daniel Aikhomogbe, the tech genius
            </p>
          </div>
          <p class="testimonial_author">Jennifer Ogedegbe (Nigeria)</p>
        </div>
        <!-- Loop ends here -->
        <div
          class="button_right"
          @click="
            testCounter == 4
              ? (testCounter = 0)
              : (testCounter = testCounter + 1)
          "
        >
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
        a {
          margin: 4px 0px;
          img {
            width: 24px;
            height: 24px;
          }
        }
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
          top: -8%;
        }
        .testimonial_talk::after {
          position: absolute;
          content: url("../assets/quote_down.svg");
          right: 2.5%;
          bottom: -8%;
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
