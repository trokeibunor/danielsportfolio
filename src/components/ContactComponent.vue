<template>
  <section class="contact">
    <div class="contactTopper">
      <p class="header">Let's talk about your next project</p>
      <p class="write">
        I’m currently on a mission to help SME’s, Big Brands and Individuals
        grow. Do you need any of my services? Kindly fill the form below.
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
                    <p class="adDesc">Remote/Hybrid</p>
                  </div>
                </div>
                <div class="adBox">
                  <img src="../assets/mail_icon.svg" id="adImg" alt="" />
                  <div class="adCon">
                    <p class="adTitle">My Email:</p>
                    <a href="" class="adDesc">daikhomogbe@gmail.Com</a>
                  </div>
                </div>
                <div class="adBox">
                  <img src="../assets/call_icon.svg" id="adImg" alt="" />
                  <div class="adCon">
                    <p class="adTitle">Call/WhatsApp me:</p>
                    <a href="tel+:+2347063591827" class="adDesc"
                      >+234 7063591827</a
                    >
                  </div>
                </div>
              </div>
              <div class="social_links">
                <a
                  href="https://web.facebook.com/profile.php?id=100002798189182"
                  target="_blank"
                  ><img src="../assets/Facebook.svg" alt=""
                /></a>
                <a
                  href="https://www.instagram.com/danielaikhomogbe/"
                  target="_blank"
                  ><img src="../assets/Instagram.svg" alt=""
                /></a>
                <a
                  href="https://www.linkedin.com/in/daniel-aikhomogbe-bsc-mmba-ch-dmp-031385162/"
                  target="_blank"
                  ><img src="../assets/LinkedIn.svg" alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="form-content">
            <form @submit.prevent="sendMail">
              <input
                type="text"
                name="from_name"
                id=""
                required
                placeholder="Name*"
                v-model="contactForm.name"
              />
              <input
                type="email"
                name="reply_to"
                id=""
                required
                placeholder="Email*"
                v-model="contactForm.email"
              />
              <input
                type="text"
                name="sender_location"
                id=""
                placeholder="Location"
                v-model="contactForm.location"
              />
              <input
                type="text"
                name="subject"
                id=""
                required
                placeholder="Subject*"
                v-model="contactForm.subject"
              />
              <textarea
                name="message"
                id=""
                required
                placeholder="Message*"
                v-model="contactForm.message"
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

<script setup>
import { useSiteState } from "@/stores/siteState";
import { reactive } from "vue";
const contactForm = reactive({
  subject: "",
  email: "",
  message: "",
  name: "",
  location: "",
});
const siteState = useSiteState();
function sendMail(e) {
  siteState.sendMail(
    contactForm.subject,
    contactForm.email,
    contactForm.message,
    contactForm.location,
    contactForm.name,
    e.target
  );
  contactForm.subject = "";
  contactForm.email = "";
  contactForm.message = "";
  contactForm.name = "";
  contactForm.location = "";
}
</script>

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
