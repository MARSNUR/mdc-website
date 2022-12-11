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
          <GChart
              style="width: 95%; height: 300px"
              type="SteppedAreaChart"
              :data="chartData"
              :options="chartOptions"
          />
          <!-- <img src="../assets/img/core-img/sale.png" class="center-block" alt=""> -->
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12">
        <h2 class="text-center mb-30 mt-x">
          {{ $t("initialtokendistrbution_title") }}
        </h2>
        <div class="token-allocation">
          <GChart
              style="width: 95%; max-width: 700px; height: 300px"
              type="PieChart"
              :data="pieChartData"
              :options="pieChartOptions"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- ##### token-distribution Area End ##### -->
</template>



<script>
import { GChart } from 'vue-google-charts'

export default {
  name: "Dapp",
  components: {
    GChart
  },

  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Months',  'Team', 'Seed Round', 'Series A', 'Public Sale', 'Foundation', 'Marketing', 'Core Contributors', 'Ecosystem', 'Advisors'],
        ['0',  0,        0,        0,         0,           0,         40709550,  0,        0,         0],
        ['6',  5657650 , 14600000, 28230600,   42345900,   27984400,  63972150,  0,        27345900,  500000],
        ['12', 16972950, 43800000, 70576500,   70576500,   55968800,  81419100,  1500000,  45576500,  1500000],
        ['24', 28288250, 87600000, 141153000,  98807100,   83953200,  98866050,  3000000,  72922400,  3000000],
        ['36', 50918850, 146000000, 141153000, 141153000,  111937600, 116313000, 5000000,  109383600, 5000000],
        ['48', 73549450, 146000000, 141153000, 141153000,  139922000, 116313000, 7000000,  136729500, 7500000],
        ['60', 90522400, 146000000, 141153000, 141153000,  139922000, 116313000, 8500000,  154960100, 10000000],
        ['72', 113153000, 146000000, 141153000,141153000,  139922000, 116313000, 10000000, 182306000, 10000000],
      ],
      chartOptions: {
        chart: {
          title: '',
        },
        vAxis: {title: ''},
        isStacked: true,
        colors:['#00BFFF','#87CEFA', '#1E90FF', '#4169E1', '#0000FF', '#4682B4']
      },

      pieChartData: [
        ['',''],
        ['Team',              113153000],
        ['Seed Round',        146000000],
        ['Series A',          141153000],
        ['Core Contributors', 10000000],
        ['Public Sale',       141153000],
        ['Ecosystem',         182306000],
        ['Foundation',        139922000],
        ['Marketing',         116313000],
        [' Advisors',         10000000]
      ],
      pieChartOptions: {
        chart: {
          title: '',
        },
        colors:['#00BFFF','#87CEFA', '#1E90FF', '#4169E1', '#0000FF', '#4682B4']
      }
    }
  }
};
</script>


