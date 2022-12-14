<template>
  <section class="portfolio">
    <div class="portfolioContent">
      <h3 class="header">Portfolio</h3>
      <div class="portfolioTogglerow">
        <p class="categoryBox">Social Media Management</p>
        <p class="categoryBox">UI Writing</p>
      </div>
      <div class="worksHolder">
        <div class="workGrid">
          <div class="workBox">
            <img src="https://picsum.photos/200/300" alt="" />
            <div class="wbContent">
              <p class="title">Real Estate</p>
              <p class="content">
                Vivamus eleifend convallis ante, non pharetra libero molestie...
              </p>
              <a href="#" class="viewLink">
                View Live Work
                <img src="../assets/right_arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <div class="workBox">
            <img src="https://picsum.photos/200/300" alt="" />
            <div class="wbContent">
              <p class="title">Real Estate</p>
              <p class="content">
                Vivamus eleifend convallis ante, non pharetra libero molestie...
              </p>
              <a href="#" class="viewLink">
                View Live Work
                <img src="../assets/right_arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <div class="workBox">
            <img src="https://picsum.photos/200/300" alt="" />
            <div class="wbContent">
              <p class="title">Real Estate</p>
              <p class="content">
                Vivamus eleifend convallis ante, non pharetra libero molestie...
              </p>
              <a href="#" class="viewLink">
                View Live Work
                <img src="../assets/right_arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <div class="workBox">
            <img src="https://picsum.photos/200/300" alt="" />
            <div class="wbContent">
              <p class="title">Real Estate</p>
              <p class="content">
                Vivamus eleifend convallis ante, non pharetra libero molestie...
              </p>
              <a href="#" class="viewLink">
                View Live Work
                <img src="../assets/right_arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <div class="workBox">
            <img src="https://picsum.photos/200/300" alt="" />
            <div class="wbContent">
              <p class="title">Real Estate</p>
              <p class="content">
                Vivamus eleifend convallis ante, non pharetra libero molestie...
              </p>
              <a href="#" class="viewLink">
                View Live Work
                <img src="../assets/right_arrow.svg" alt="" />
              </a>
            </div>
          </div>
          <div class="workBox">
            <img src="https://picsum.photos/200/300" alt="" />
            <div class="wbContent">
              <p class="title">Real Estate</p>
              <p class="content">
                Vivamus eleifend convallis ante, non pharetra libero molestie...
              </p>
              <a href="#" class="viewLink">
                View Live Work
                <img src="../assets/right_arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.portfolio {
  width: 100%;
  margin: 2rem 0px;
  .portfolioContent {
    width: 75%;
    margin: 0 auto;
    h3.header {
      font-size: 18px;
      text-align: center;
    }
    .portfolioTogglerow {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      .categoryBox {
        width: fit-content;
        padding: 4px 8px;
        cursor: pointer;
        border: 1px solid #fff;
        border-radius: 0px;
        margin: 0px 8px;
      }
      .categoryBox:hover {
        background-color: #fff;
        color: #333333;
      }
    }
    .worksHolder {
      width: 100%;
      margin: 1.5rem auto;
      //   border-radius: 1rem;
      background: #3c3e42;
      box-shadow: 0px 36px 105px rgba(43, 56, 76, 0.1);
      padding: 2rem 0rem;
      .workGrid {
        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 5%;
        row-gap: 2.5rem;
        .workBox {
          img {
            width: 100%;
            height: 11rem;
            object-fit: cover;
            margin: 0;
            padding: 0;
            border-radius: 8px 8px 0 0;
          }
          .wbContent {
            background-color: #fff;
            color: #3c3e42;
            margin: 0;
            padding: 1rem 1rem;
            border-radius: 0 0 8px 8px;
            p {
              margin: 0;
              padding: 0;
            }
            p.title {
              font-weight: 600;
              font-size: 16px;
            }
            p.content {
              font-size: 14px;
              margin: 1rem 0px;
            }
            a.viewLink {
              font-size: 14px;
              font-weight: 500;
              padding: 6px 10px;
              text-decoration: none;
              color: #00adb5;
              border: 1px solid #00adb5;
              display: flex;
              align-items: center;
              width: fit-content;
              border-radius: 4px;
              img {
                width: 16px;
                height: 16px;
                margin-left: 4px;
              }
            }
            a.viewLink:hover {
              background-color: #00adb5;
              color: #fff;
              border: 1px solid #fff;
              font-weight: 600;
              img {
                display: none;
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 768px) {
      h3.header {
        font-size: 24px;
      }
      border-radius: 8px;
      width: 85%;
      .portfolioTogglerow {
        display: relative;
        overflow: scroll;
        .categoryBox {
          width: auto;
        }
      }

      .worksHolder {
        .workGrid {
          width: 85%;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
