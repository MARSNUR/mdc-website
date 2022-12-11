<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <!-- ##### Our features Area start ##### -->
  <section class="features section-padding-100" id="dapp">
    <div class="container">
      <div class="section-heading text-center">
        <h2
          class="fadeInUp"
          data-wow-delay="0.3s"
          style="
            visibility: visible;
            animation-delay: 0.3s;
            animation-name: fadeInUp;
          "
        >
          {{ $t("ourmobileapp_title") }}
        </h2>
        <p
          class="fadeInUp"
          data-wow-delay="0.4s"
          style="
            visibility: visible;
            animation-delay: 0.4s;
            animation-name: fadeInUp;
          "
        >
          {{ $t("ourmobileapp_desc") }}
        </p>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div
          class="
            services-column
            col-lg-5 col-lg-offset-1 col-md-10
            offset-md-1
            col-xs-10
            offset-xs-1
          "
        >
          <!--Services Block Four-->
          <div class="services-block-four">
            <div class="inner-box">
              <div class="icon-img-box">
                <img src="../assets/img/svg/feature1.svg" alt="" />
              </div>
              <h3>
                <a href="#">Your data explorer</a>
              </h3>
              <div class="text">
                User-friendly and intuitive interface for managing the privacy
                of your data
              </div>
            </div>
          </div>

          <!--Services Block Four-->
          <div class="services-block-four">
            <div class="inner-box">
              <div class="icon-img-box">
                <img src="../assets/img/svg/feature2.svg" alt="" />
              </div>
              <h3><a href="#">Signing smart contracts</a></h3>
              <div class="text">
                Smart Contracts based on CosmWasm used for confidence in the
                transparency of the fulfillment of obligations
              </div>
            </div>
          </div>

          <!--Services Block Four-->
          <div class="services-block-four" style="margin-bottom: 0">
            <div class="inner-box">
              <div class="icon-img-box">
                <img src="../assets/img/svg/feature3.svg" alt="" />
              </div>
              <h3><a href="#">Send and receive your dividends</a></h3>
              <div class="text">
                Less than 10 seconds to confirm a transaction with a price less
                than 0.01$
              </div>
            </div>
          </div>
        </div>
        <div class="service-img-wrapper col-lg-6 col-md-12 col-sm-12">
          <div class="image-box">
            <img
              src="../assets/img/2.svg"
              width="200px"
              class="center-block img-responsive phone-img"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Our features Area End ##### -->

  <!-- ##### token-distribution Area start ##### -->
  <section class="token-distribution section-padding-100">
    <div class="container">
      <div class="col-lg-6 col-md-6 col-sm-12">
        <h2 class="text-center mb-30">{{ $t("unlockschedule_title") }}</h2>
        <div class="token-allocation">
          <div id="chart_div" style="width: 95%; height: 300px"></div>
          <!-- <img src="../assets/img/core-img/sale.png" class="center-block" alt=""> -->
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12">
        <h2 class="text-center mb-30 mt-x">
          {{ $t("initialtokendistrbution_title") }}
        </h2>
        <div class="token-allocation">
          <div
            id="myChart"
            style="width: 95%; max-width: 700px; height: 300px"
          ></div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### token-distribution Area End ##### -->
</template>



<script>
export default {
  name: "Dapp",
};
</script>


