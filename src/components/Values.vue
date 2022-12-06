<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <div class="clearfix"></div>

  <!-- ##### Our Services Area Start ##### -->
  <section
    class="our_services_area section-padding-100-0 clearfix"
    id="services"
  >
    <div class="container">
      <div class="section-heading text-center">
        <h2 class="fadeInUp" data-wow-delay="0.3s">
           {{ $t("ourvalues_title") }}
          </h2>
      </div>

      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4">
          <div
            class="service_single_content text-center mb-100 fadeInUp"
            data-wow-delay="0.2s"
          >
            <div class="service_icon">
              <img src="../assets/img/features/1.png" alt="" />
            </div>
            <h6>Privacy</h6>
            <p>
              {{ $t("ourvalues_privacy") }}
            </p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4">
          <div
            class="service_single_content text-center mb-100 fadeInUp"
            data-wow-delay="0.3s"
          >
            <div class="service_icon">
              <img src="../assets/img/features/2.png" alt="" />
            </div>
            <h6>{{ $t("ourvalues_monetize_title") }}</h6>
            <p>
              {{ $t("ourvalues_monetize") }}
            </p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4">
          <div
            class="service_single_content text-center mb-100 fadeInUp"
            data-wow-delay="0.4s"
          >
            <div class="service_icon">
              <img src="../assets/img/features/3.png" alt="" />
            </div>
            <h6>{{ $t("ourvalues_socailandsimple_title") }}</h6>
            <p>
               {{ $t("ourvalues_socailandsimple") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Our Services Area End ##### -->

  <!-- <section class="spread-map" style="background-image: url('../assets/img/bg-img/bread-bg.png');"> -->
  <section
    class="spread-map"
    style="background-image: url(../img/bg-img/bread-bg.png)"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12">
          <div class="who-we-contant">
            <h4 class="fadeInUp" data-wow-delay="0.3s">
              {{ $t("powerfulandsecure_title") }}
              <!-- Powerful & secure decentralized network -->
            </h4>
            <ul class="s-list list-unstyled mt30">
              <li>
                <span class="s-list-icon"
                  ><img
                    width="40px"
                    height="40px"
                    src="../assets/img/network-img/core.svg"
                /></span>
                <p class="s-list-desc">
                  High-performance, consistentcy, flexiblity, and secure
                  consensus from <b>The Tendermint Core.</b>
                </p>
              </li>
              <li>
                <span class="s-list-icon"
                  ><img
                    width="40px"
                    height="40px"
                    src="../assets/img/network-img/sdk.svg"
                /></span>
                <p class="s-list-desc">
                  A rich set of modules that address common concerns such as
                  governance, tokens, other standards, and interactions with
                  other blockchains from <b>Cosmos SDK.</b>
                </p>
              </li>
              <li style="margin-bottom: 0">
                <span class="s-list-icon"
                  ><img
                    height="40px"
                    width="40px"
                    src="../assets/img/network-img/ibc.svg"
                /></span>
                <p class="s-list-desc" style="margin-bottom: 0">
                  The <b>IBC application layer</b> is used to token transfers,
                  interchain accounts, non-fungible token transfers and oracle
                  data feeds.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-7 col-xs-12">
          <div class="map-container mt-s">
            <img
              src="../assets/img/svg/map.svg"
              alt="map"
              style="width: 100%"
            />
            <div class="indicator indicator-west">
              <span class="indicator-item"></span>
              <span class="indicator-content"> </span>
            </div>
            <div class="indicator indicator-west">
              <span class="indicator-item"></span>
              <span class="indicator-content"> </span>
            </div>
            <div class="indicator indicator-west">
              <span class="indicator-item"></span>
              <span class="indicator-content"> </span>
            </div>
            <div class="indicator indicator-east" style="display: none">
              <span class="indicator-item"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Values",
};
</script>