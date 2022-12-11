<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <!-- ##### Welcome Area Start ##### -->
  <section
    class="welcome_area clearfix auto-init ico fullwidth"
    data-options='{direction: "normal"}'
    id="home"
  >
    <!-- Hero Content -->
    <div class="hero-content with-after">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <!-- Welcome Content -->
          <div class="col-12 col-lg-6 col-md-12">
            <div class="welcome-content">
              <div class="promo-section"></div>
              <h1 class="b-text bold fadeInUp" data-wow-delay="0.2s">
                {{ $t("intro_title") }}
              </h1>
              <p class="fadeInUp" data-wow-delay="0.3s">
                {{ $t("intro_desc") }}
              </p>
              <div class="dream-btn-group fadeInUp" data-wow-delay="0.4s">
                <a
                  href="https://play.google.com/store/apps/details?id=io.mydatacoin.mydatacoin"
                >
                  <img class="store" src="../assets/img/1.png"
                /></a>
                <a href="https://apps.apple.com/cz/app/mydatacoin/id1640680514">
                  <img class="store" src="../assets/img/2.png"
                /></a>
              </div>
            </div>
          </div>
          <!-- Welcome Video Area -->
          <div class="col-12 col-lg-6 col-md-12">
            <div
              class="main-ilustration main-ilustration-5 fadeInUp"
              data-wow-delay="0.5s"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Welcome Area End ##### -->
</template>

<script>
export default {
  name: "WelcomeArea",
};
</script>

