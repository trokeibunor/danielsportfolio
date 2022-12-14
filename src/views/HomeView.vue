<script setup>
import NavBar from "../components/NavbarComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import TestimonialComponent from "../components/TestimonialComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import WhatIDoComponent from "../components/SkillsComponent.vue";
import ExperienceComponent from "../components/ExperienceComponent.vue";
import PortfolioComponent from "../components/PortfolioComponent.vue";
import ToolsComponent from "../components/ToolsComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>

<template>
  <NavBar />
  <main>
    <HeroComponent id="top" />
    <TestimonialComponent />
    <AboutComponent id="about" />
    <WhatIDoComponent />
    <ExperienceComponent />
    <PortfolioComponent id="work" />
    <ToolsComponent />
    <ContactComponent id="contact" />
  </main>
  <FooterComponent />
</template>
