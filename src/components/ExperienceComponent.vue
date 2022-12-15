<template>
  <section class="experience">
    <div class="experienceContent">
      <div class="leftSide">
        <div class="lscontent">
          <div>
            <h3>My Career Highlights</h3>
            <p>Hi there, here is a Sneak Peek into my career path.</p>
          </div>
          <img src="../assets/experience_img.png" alt="" />
          <div class="experienceBox">
            <p class="ebTitleTop">Education</p>
          </div>
          <div class="experienceBox">
            <p class="ebTitle">Wesley University</p>
            <p class="ebRole">B.sc Mass Communication</p>
          </div>
          <div class="experienceBox">
            <p class="ebTitle">Nexford University</p>
            <p class="ebRole">360 Marketing</p>
          </div>
          <div class="experienceBox">
            <p class="ebTitle">Tekeda Institute</p>
            <p class="ebRole">MBA(Business Administration Management)</p>
          </div>
          <div class="experienceBox">
            <p class="ebTitle">
              Chartered Institute of social media & Digital Marketing
            </p>
            <p class="ebRole">PGD Digital Marketing</p>
          </div>
          <div class="experienceBox">
            <p class="ebTitle">Alison</p>
            <p class="ebRole">Diploma in Social media Strategy</p>
          </div>
          <div class="experienceBox">
            <p class="ebTitle">eMarketing Institute</p>
            <p class="ebRole">Social media marketing</p>
          </div>
        </div>
      </div>
      <div class="rightSide">
        <div class="experienceBox">
          <p class="ebTitleTop">Work experience</p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">GRILLADO (Canada)</p>
          <p class="ebRole">
            I managed their social media pages, created social media copies and
            caption.
          </p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">GOTHRIDER (Canada)</p>
          <p class="ebRole">
            Created great social media copies that resonates well to the brand
            and also weaved out captions that resulted into CTA.
          </p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">APRICOAT (USA)</p>
          <p class="ebRole">
            Grew it followers online, worked alongside influencers to create UGC
            contents and created great Social copy.
          </p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">HOSKI MEDIA(Canada)</p>
          <p class="ebRole">
            Created content for her website and also worked with few of her
            client.
          </p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">SOUNDS GOOD(Canada)</p>
          <p class="ebRole">
            Generated more than 1,000 influencers monthly for UGC Campaigns.
            They were both paid/Product based influencers.
          </p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">SM MARKETING(South Africa)</p>
          <p class="ebRole">
            I managed/Grew a client page on Instagram & Facebook from 0
            followers -18,000 followers within the space of a year.
          </p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">SCARIPAY(Madagascar)</p>
          <p class="ebRole">
            I Created an easy-Flow UX copy for their mobile Application and
            website. I also managed their social pages.
          </p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">OPERA(Nigeria)</p>
          <p class="ebRole">
            Managed close to 200 businesses and I also monitored their ads
            campaigns on opera’s platform (Opera Mini)
          </p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">SAGE MEDIA TECH(Nigeria)</p>
          <p class="ebRole">
            I created an advert script that was aired on CNNAFRICA and I also
            weaved out content for billboards, social banners, Facebook copies
            and websites.
          </p>
        </div>
        <div class="experienceBox">
          <p class="ebTitle">AK MEDIA CONCEPTS(Nigeria)</p>
          <p class="ebRole">
            Managed their social media pages and also created successful
            Facebook ads campaigns.
          </p>
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
          .ebTitleTop {
            font-size: 32px;
            font-weight: 600;
          }
        }
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
        .ebTitleTop {
          font-size: 32px;
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
