<template>
  <Navbar />
  <Content />

  <Footer />
</template>

<script>
import Navbar from "../components/navbar.vue";
import Content from "../components/Content.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
    Content,
  },
};
</script>
