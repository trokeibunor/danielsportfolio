<script setup></script>
<template>
  <section class="about">
    <div class="about_content">
      <img class="about-img" src="../assets/about_img.png" alt="" />
      <div class="text-section">
        <h3>About me</h3>
        <p>
          A creative with over 5 years experience with a proven track record of
          creating creative contents to drive growth. Daniel, who is focused on
          enabling businesses in Africa grow worked with OPERA and helped over
          300 businesses to produce inspiring and memorable experiences through
          online marketing/content marketing. Talk about making memories; he
          created an advert script that was aired on CNN AFRICA and CHANNELS TV.
          He has been featured on some notable online magazines like RefinedNG
          as the personality of the week in December 2020 and on Business Elite
          Africa as the Social Media Champ in August 2021. With this growing
          love in building brands Daniel has built a niche in fintech, Edtech,
          advertising, media, Real estate etc. He has also made it his mission
          to develop and execute creative-digital ways to drive growth and
          profits to brands.
        </p>
        <button><img src="../assets/Download.svg" alt="" /> Talk to Me</button>
      </div>
    </div>
    <div class="framer">
      <p>I'm excellent at creating content, have a look</p>
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
