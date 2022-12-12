<template>
  <NavbarComponentVue />
  <div class="passwordBlock"></div>
  <div class="testContainer">
    <h3>Add Testimonial</h3>
    <form :on-submit="addTestimonial">
      <input
        type="text"
        name="name"
        v-modal="name"
        id=""
        placeholder="Name*"
        required
      />
      <input
        type="email"
        name=""
        id=""
        v-model="email"
        placeholder="Email*"
        required
      />
      <textarea
        name="testimonial"
        v-model="testimonial"
        placeholder="Testimonial"
      ></textarea>
      <button type="submit">
        Submit <img src="../assets/submit_icon.svg" alt="" />
      </button>
    </form>
  </div>
  <FooterComponentVue />
</template>

<script setup>
import { useSiteState } from "@/stores/siteState";
import NavbarComponentVue from "../components/NavbarComponent.vue";
import FooterComponentVue from "../components/FooterComponent.vue";
import { reactive } from "vue";
const siteState = useSiteState();
function addTestimonial() {
  siteState.addTestimonial(user);
  user.name = "";
  user.email = "";
  user.position = "";
  user.workPlace = "";
  user.testimonial = "";
}
const user = reactive({
  name: "",
  email: "",
  position: "",
  workPlace: "",
  testimonial: "",
});
</script>

<style lang="scss" scoped>
.testContainer {
  width: 40%;
  margin: 5rem auto;
  h3 {
    width: 90%;
    margin: 0 auto;
  }
  form {
    width: 90%;
    margin: 0 auto;
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
      padding: 8px 8px;
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
</style>
