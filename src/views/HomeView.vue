<template>
  <div class="home">
    <WelcomeArea/>
    <About/>
    <Values/>
    <Dapp/>
    <Team/>
    <Contact/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import WelcomeArea from '@/components/WelcomeArea.vue'
import About from '@/components/About.vue'
import Values from '@/components/Values.vue'
import Dapp from '@/components/Dapp.vue'
import Team from '@/components/Team.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    WelcomeArea,
    About,
    Values,
    Dapp,
    Team,
    Contact
  }
}
</script>
