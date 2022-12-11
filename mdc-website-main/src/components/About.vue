<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <div class="clearfix"></div>

  <div class="double-bg">
    <!-- ##### About Us Area Start ##### -->
    <section class="about-us-area section-padding-100-0 clearfix" id="about">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6">
            <div class="welcome-meter fadeInUp" data-wow-delay="0.7s">
              <img
                src="../assets/img/core-img/illustration-1.png"
                class="img-responsive center-block"
                alt=""
              />
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div class="who-we-contant mt-s">
              <h4 class="fadeInUp" data-wow-delay="0.3s">
                {{ $t("whoweare_title") }}
              </h4>
              <p class="fadeInUp" data-wow-delay="0.4s">
                {{ $t("whoweare_desc_1") }}
              </p>
              <p class="fadeInUp" data-wow-delay="0.5s">
                {{ $t("whoweare_desc_2") }}
              </p>
              <!-- <a class="btn dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### About Us Area End ##### -->

    <!-- ##### About Us Area Start ##### -->
    <section class="about-us-area section-padding-100 clearfix">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-6">
            <div class="who-we-contant">
              <h4 class="fadeInUp" data-wow-delay="0.3s">
                {{ $t("shareonlythedata_title") }}
              </h4>
              <p class="fadeInUp" data-wow-delay="0.4s">
                {{ $t("shareonlythedata_desc_1") }}.
              </p>
              <p class="fadeInUp" data-wow-delay="0.5s">
                 {{ $t("shareonlythedata_desc_2") }}.
              </p>
              <!-- <a class="btn dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Read More</a> -->
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div class="welcome-meter fadeInUp" data-wow-delay="0.7s">
              <img
                src="../assets/img/core-img/illustration-2.png"
                class="mt-s center-block"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- ##### About Us Area End ##### -->
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>