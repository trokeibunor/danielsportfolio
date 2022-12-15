<script setup></script>
<template>
  <section class="about">
    <div class="about_content">
      <img class="about-img" src="../assets/about_img.png" alt="" />
      <div class="text-section">
        <h3>About me</h3>
        <p>
          I am a creative with over 5 years experience with a proven track
          record of creating digital strategies to drive growth.
          <br />
          <br />
          For the love I have for businesses, I worked for OPERA and helped over
          200 businesses to produce inspiring and memorable experiences through
          online marketing.
          <br />
          <br />
          Talk about making memories; I created an advert script that was aired
          on CNN AFRICA and CHANNELS TV. I have been featured on some notable
          online magazines like RefinedNG as the personality of the week in
          December 2020 and on Business Elite Africa as the Social Media Champ
          in August 2021.
          <br />
          <br />
          With this growing love in building businesses, I have worked with
          brands in Fintech, Edtech, Advertising, Media, Real-Estate and many
          more. My mission is to develop and execute creative-digital ways for
          brands.
        </p>
        <a
          href="https://docs.google.com/document/d/1-MxrhCUTsskS4zN7hgKmcB7y3RdzkLsn/edit?usp=share_link&ouid=105286617648966534690&rtpof=true&sd=true"
          target="_blank"
        >
          <img src="../assets/Download.svg" alt="" /> See some writings
        </a>
      </div>
    </div>
    <p id="framerHeader">
      Here’s a TV advert script i wrote for Nicolivia Clothings
    </p>
    <div class="framer">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DLZhNWgFjHk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>
<style lang="scss" scoped>
section.about {
  width: 100%;
  .about_content {
    background: #3c3e42;
    box-shadow: 0px 36px 105px rgba(43, 56, 76, 0.1);
    border-radius: 16px;
    position: relative;
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 40% 1fr;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    img.about-img {
      width: 100%;
      height: 100%;
    }
    .text-section {
      a {
        background-color: rgba(0, 0, 0, 0);
        border: 2px solid #00adb5;
        border-radius: 10px;
        width: fit-content;
        text-decoration: none;
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
      a:hover {
        background-color: #fff;
        border: 2px solid #fff;
        color: #00adb5;
      }
    }
  }
  #framerHeader {
    text-align: center;
    font-weight: 600;
  }
  .framer {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    .about_content {
      width: 85%;
      display: flex;
      flex-direction: column;
    }
    .framer {
      position: relative;
      width: 85%;
      padding-bottom: 56.5%;
      margin: 2rem auto;
    }
    .framer iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
