<template>
  <section class="contact">
    <div class="contactTopper">
      <p class="header">Let's talk about your next project</p>
      <p class="write">
        There are many variations of passages of Lorem Ipsu available. but the
        majority have suffered alte.
      </p>
    </div>
    <div class="contactContent">
      <div class="contactForm">
        <div class="cfContent">
          <div class="address"></div>
          <form action="#" id="emailForm"></form>
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
        column-gap: 5%;
      }
    }
  }
}
</style>
