<template>
  <NavbarComponentVue />
  <div class="workContainer">
    <h3>Add Work</h3>
    <form action="">
      <input type="text" name="name" id="" placeholder="Name*" required />
      <input type="text" name="" id="" placeholder="Link to work*" required />
      <select name="" id="" required>
        <option value="">Please Select Category</option>
        <option value=""></option>
      </select>
      <input type="file" />
      <textarea
        name="testimonial"
        placeholder="Short Description*"
        maxlength="200"
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
