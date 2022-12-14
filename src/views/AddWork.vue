<template>
  <NavbarComponentVue />
  <div class="workContainer">
    <h3>Add Work</h3>
    <form @submit.prevent="submitGig">
      <input
        type="text"
        name="name"
        id=""
        v-model="Gig.name"
        placeholder="Name*"
        required
      />
      <input
        type="text"
        name=""
        id=""
        v-model="Gig.link"
        placeholder="Link to work*"
        required
      />
      <select name="" id="" v-model="Gig.category" required>
        <option value="" disabled selected hidden>
          Please Select Category
        </option>
        <option value="smManagement">Social Media Management</option>
        <option value="uiwriting">UI writing</option>
      </select>
      <input
        type="file"
        @change="handleproImgUpload"
        :state="Boolean(projectImg)"
      />
      <textarea
        name="testimonial"
        placeholder="Short Description*"
        maxlength="200"
        v-model="Gig.shortDesc"
      ></textarea>
      <button type="submit">
        Submit <img src="../assets/submit_icon.svg" alt="" />
      </button>
    </form>
  </div>
  <FooterComponentVue />
</template>

<script setup>
import NavbarComponentVue from "../components/NavbarComponent.vue";
import FooterComponentVue from "../components/FooterComponent.vue";
import { useSiteState } from "@/stores/siteState";
import { ref, reactive } from "vue";
const Gig = reactive({
  name: "",
  link: "",
  category: "",
  img: "",
  shortDesc: "",
});
const siteState = useSiteState();
const projectImg = ref(false);
// handle image upload
function handleproImgUpload(e) {
  // const self = this;
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsArrayBuffer(file);
  reader.onload = function () {
    Gig.img = reader.result;
    console.log(reader.result);
    console.log(Gig.img);
  };
}
function submitGig() {
  siteState.addWorks(Gig);
  Gig.img = "";
  Gig.name = "";
  Gig.gitLink = "";
  Gig.shortDesc = "";
  Gig.link = "";
}
</script>

<style lang="scss" scoped>
.workContainer {
  width: 40%;
  margin: 3.5rem auto;
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
    textarea,
    select {
      width: 100%;
      background-color: #3c3e42;
      outline: none;
      border: none;
      border-bottom: 1px solid #e6e8eb;
      margin: 12px 0;
      color: #fff;
      padding: 8px 8px;
    }
    select {
      width: 103%;
    }
    input:focus,
    textarea:focus,
    select:focus {
      color: #00adb5;
      border-bottom: 1px solid #00adb5;
    }
    input[type="file" i]::file-selector-button {
      background-color: #00adb5;
      outline: none;
      border: none;
      padding: 4px 8px;
      color: #fff;
      font-weight: 600;
      width: fit-content;
      border-radius: 4px;
      cursor: pointer;
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
