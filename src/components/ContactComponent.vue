<template>
  <section class="contact">
    <div class="contactTopper">
      <p class="header">Let's talk about your next project</p>
      <p class="write">
        I'm currently on a mission to help SMEs, Brands and individuals grow. I
        write and I create Do you need any of my services? kindly drop your
        details
      </p>
    </div>
    <div class="contactContent">
      <div class="contactForm">
        <div class="cfContent">
          <div class="address">
            <div class="adContent">
              <div class="addFlex">
                <div class="adBox">
                  <img src="../assets/location_pin.svg" id="adImg" alt="" />
                  <div class="adCon">
                    <p class="adTitle">Address</p>
                    <p class="adDesc">Remote/Onsite</p>
                  </div>
                </div>
                <div class="adBox">
                  <img src="../assets/mail_icon.svg" id="adImg" alt="" />
                  <div class="adCon">
                    <p class="adTitle">My Email:</p>
                    <a href="" class="adDesc">danielA@gmail.com</a>
                  </div>
                </div>
                <div class="adBox">
                  <img src="../assets/call_icon.svg" id="adImg" alt="" />
                  <div class="adCon">
                    <p class="adTitle">Call Me:</p>
                    <a href="tel+:" class="adDesc">+234 9015379412</a>
                  </div>
                </div>
              </div>
              <div class="social_links">
                <a href="#"><img src="../assets/github_icon.svg" alt="" /></a>
                <a href="#"><img src="../assets/dribble_icon.svg" alt="" /></a>
                <a href="#"><img src="../assets/figma_icon.svg" alt="" /></a>
              </div>
            </div>
          </div>
          <div class="form-content">
            <form action="#" id="emailForm">
              <input type="text" name="" id="" required placeholder="Name*" />
              <input type="email" name="" id="" required placeholder="Email*" />
              <input type="text" name="" id="" placeholder="Location" />
              <input
                type="text"
                name=""
                id=""
                required
                placeholder="Subject*"
              />
              <textarea
                name=""
                id=""
                required
                placeholder="Message*"
              ></textarea>
              <button type="submit">
                Submit <img src="../assets/submit_icon.svg" alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  .contactTopper {
    text-align: center;
    background: #3c3e42;
    box-shadow: 0px 36px 105px rgba(43, 56, 76, 0.1);
    padding: 2.5rem 0px;
    p {
      margin: 0;
    }
    .header {
      font-size: 32px;
      font-weight: bold;
    }
    .write {
      width: 70%;
      margin: 0 auto;
    }
    @media screen and (max-width: 768px) {
      .header {
        font-size: 24px;
        margin-bottom: 1.5rem;
      }
      .write {
        width: 90%;
        text-align: left;
      }
    }
  }
  .contactContent {
    width: 80%;
    margin: 1.5rem auto;
    .contactForm {
      .cfContent {
        width: 90%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 35% 1fr;
        align-items: center;
        column-gap: 5%;
        background: #3c3e42;
        box-shadow: 0px 36px 105px rgba(43, 56, 76, 0.1);
        border-radius: 16px;
        .address {
          margin: 1rem 0px;
          .adContent {
            width: 80%;
            margin: 0 auto;
            .addFlex {
              margin: 1.5rem 0px;
              p {
                margin: 0;
              }
              display: flex;
              flex-direction: column;
              .adBox {
                display: flex;
                background-color: #fff;
                padding: 8px 0px;
                border-radius: 4px;
                margin: 1rem 0px;
                #adImg {
                  padding: 12px;
                  border-radius: 4px;
                  background: #00adb5;
                  margin: 0px 8px;
                }
                .adCon {
                  .adTitle {
                    color: #424e60;
                  }
                  .adDesc {
                    color: #132238;
                    text-decoration: none;
                  }
                }
              }
            }
          }
        }
        .form-content {
          width: 100%;
          form {
            width: 90%;
            display: flex;
            flex-direction: column;
            input,
            textarea {
              width: 100%;
              background-color: #3c3e42;
              outline: none;
              border: none;
              border-bottom: 1px solid #e6e8eb;
              margin: 12px 0;
              color: #fff;
              padding: 4px 0;
            }
            input:focus,
            textarea:focus {
              color: #00adb5;
              border-bottom: 1px solid #00adb5;
            }
            button {
              background-color: #00adb5;
              outline: none;
              border: none;
              display: flex;
              align-items: center;
              padding: 8px 12px;
              color: #fff;
              font-weight: 600;
              width: fit-content;
              border-radius: 4px;
              cursor: pointer;
              img {
                width: 16px;
                height: 16px;
                margin-left: 4px;
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 786px) {
      width: 90%;
      display: flex;
      flex-direction: column;
      .contactForm {
        .cfContent {
          display: block;
          .form-content {
            form {
              margin: 0 auto;
              button {
                margin-bottom: 1rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
