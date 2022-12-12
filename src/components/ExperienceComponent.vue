<template>
  <section class="experience">
    <div class="experienceContent">
      <div class="leftSide">
        <div class="lscontent">
          <div>
            <h3>My Work Experience</h3>
            <p>I've worked</p>
          </div>
          <img src="../assets/experience_img.png" alt="" />
        </div>
      </div>
      <div class="rightSide">
        <div class="experienceBox">
          <p class="ebTitle">SCARIPAY (Madagascar)</p>
          <p class="ebRole">Digital Content Manager</p>
          <p class="ebDuration">September 2021 - present</p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">SAGEMEDIA_TECH</p>
          <p class="ebRole">Creative Manager</p>
          <p class="ebDuration">October 2020 - September 2021</p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">GITALHUB DIGITAL SERVICE</p>
          <p class="ebRole">Facebook specialist/ Content Writer</p>
          <p class="ebDuration">April 2020 - September 2021</p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">OPERA</p>
          <p class="ebRole">Digital Content Manager</p>
          <p class="ebDuration">Noverber 2019 - October 2020</p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">FUMBA RESOURCES LIMITED</p>
          <p class="ebRole">Customer Care Manager</p>
          <p class="ebDuration">April 2018 - October 2019</p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">PLATEAU RADIO TELEVISION CORPORATION</p>
          <p class="ebRole">Journalist</p>
          <p class="ebDuration">May 2017 - April 2018</p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">BACKGROUND CHECK INTERNATIONAL</p>
          <p class="ebRole">Operations Specialist (Private Investigator)</p>
          <p class="ebDuration">June 2015 - January 2016</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.experience {
  width: 100%;
  .experienceContent {
    background: #3c3e42;
    box-shadow: 0px 36px 105px rgba(43, 56, 76, 0.1);
    border-radius: 16px;
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 50% 50%;
    padding: 1rem 2rem;
    .leftSide {
      border-right: 1px solid #fff;
      .lscontent {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        img {
          width: 70%;
        }
      }
    }
    .rightSide {
      border-left: 1px solid #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .experienceBox {
        margin: 1rem 0px;
        width: 80%;
        p {
          margin: 2px;
        }
        .ebTitle {
          font-size: 24px;
          font-weight: 600;
        }
      }
    }
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 75%;
      .leftSide {
        border: none;
        .lscontent {
          width: 100%;
          img {
            width: 70%;
            margin: 0 auto;
          }
          h3 {
            font-size: 24px;
            font-weight: 600;
          }
          align-items: flex-start;
        }
      }
      .rightSide {
        border: none;
        align-items: flex-start;
        margin-top: 2rem;
        .experienceBox {
          width: 100%;
        }
      }
    }
  }
}
</style>
