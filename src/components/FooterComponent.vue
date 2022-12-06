<template>
  <footer>
    <div class="topFooter">
      <div class="tfCon">
        <p class="logo">DANIEL A.</p>
        <div class="nav-menu">
          <a href="#">Works</a>
          <a href="#">Contact</a>
          <a href="#">About Daniel</a>
        </div>
      </div>
    </div>
    <p>Copyright &copy;Daniel Aikhomogbe 2022.</p>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  margin-top: 2rem;
  width: 100%;
  text-align: center;
  .topFooter {
    background-color: #3c3e42;
    width: 100%;
    padding: 2rem 0px;
    margin: 0 auto;
    p {
      margin: 0;
    }
    .tfCon {
      width: 85%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        font-size: 42px;
        font-weight: 600;
      }
      .nav-menu {
        display: flex;
        a {
          text-decoration: none;
          color: #fff;
          font-weight: 600;
          margin: 0px 8px;
        }
      }
    }
  }
}
</style>
