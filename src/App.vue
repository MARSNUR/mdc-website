<template>
  <!-- ##### Header Area Start ##### -->
  <div class="header-area fadeInDown" data-wow-delay="0.2s">
    <div class="classy-nav-container breakpoint-off">
      <div class="container">
        <nav class="navbar navbar-light">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <!-- Navbar Toggler -->
                <div class="classy-navbar-toggler">
                    <span class="navbarToggler">
                      <span></span><span></span><span></span>
                    </span>
                </div>
              </button>
              <a href="#" class="navbar-brand nav-custom-style font-weight-bold pt-5">
                <img src="./assets/img/core-img/logo.png" alt="logo" style="display: inline" />
                MyDataCoin
              </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse text-uppercase" id="bs-example-navbar-collapse-1">
              <Navbar />
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
      </div>
    </div>
  </div>
  <!-- ##### Header Area End ##### -->

  <main>
    <router-view />
  </main>

  <div class="footer-content-area">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-3 col-md-6">
            <div class="footer-copywrite-info">
              <!-- Copywrite -->
              <div class="copywrite_text fadeInUp" data-wow-delay="0.2s">
                <div class="footer-logo">
                  <a href="#">
                    <img src="./assets/img/core-img/logo2.png" alt="logo" />
                  </a>
                </div>
                <p>
                  {{ $t("footer_mdc_decs") }}
                </p>
              </div>
              <!-- Social Icon -->
              <div class="footer-social-info fadeInUp" data-wow-delay="0.4s">
                <div class="footer-social-info fadeInUp" data-wow-delay="0.4s">
                <a href="https://t.me/+5N_uSvH5Pkc3YTJk"><i class="fa fa-telegram" aria-hidden="true"></i></a>
                <a href="https://twitter.com/MyDataCoin"> <i class="fa fa-twitter" aria-hidden="true"></i></a>
                <a href="https://github.com/MyDataCoin"><i class="fa fa-github" aria-hidden="true"></i></a>
                <!-- <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a> -->
                <a href="https://www.linkedin.com/company/mydatacoin/?viewAsMember=true"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
              </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-3 col-md-6">
            <div class="contact_info_area d-sm-flex justify-content-between">
              <!-- Content Info -->
              <div
                class="contact_info mt-x text-center fadeInUp"
                data-wow-delay="0.3s" >
                <h5>{{ $t("footer_privacy_tos_title") }}</h5>
                <a>
                  <router-link to="/terms">
                    <p>{{ $t("footer_privacy_tos_TOS") }}</p>
                  </router-link>
                </a>
                <a href="https://gdpr-info.eu/">
                  <p>{{ $t("footer_privacy_tos_GDPR") }}</p>
                </a>
                <a>
                  <router-link to="/privacy">
                    <p>{{ $t("footer_privacy_tos_PP") }}</p>
                  </router-link>
                </a>

                <a href="https://mydatacoin.io/menu/Whitepaper.pdf">
                  <p>{{ $t("footer_privacy_tos_WP") }}</p>
                </a>
                <a href="https://mydatacoin.io/menu/Pitch%20Deck.pdf">
                  <p>{{ $t("footer_privacy_tos_PD") }}</p>
                </a>
              </div>
            </div>
          </div>

          <!-- <div class="col-12 col-lg-2 col-md-6 ">
                        <div class="contact_info_area d-sm-flex justify-content-between">
                            <div class="contact_info mt-s text-center fadeInUp" data-wow-delay="0.2s">
                                <h5>NAVIGATE</h5>
                                <a href=""><p>Advertisers</p></a>
                                <a href=""><p>Developers</p></a>
                                <a href=""><p>Resources</p></a>
                                <a href=""><p>Company</p></a>
                                <a href=""><p>Connect</p></a>
                            </div>
                        </div>
                    </div> -->

          <div class="col-12 col-lg-6 col-md-6">
            <div class="contact_info_area d-sm-flex justify-content-between">
              <!-- Content Info -->
              <div
                class="contact_info mt-s text-center fadeInUp"
                data-wow-delay="0.4s"
              >
                <h5>{{ $t("footer_contactus_title") }}</h5>
                <p>{{ $t("footer_contactus_1") }}</p>
                <p>
                  {{ $t("footer_contactus_2") }}
                </p>
                <p>
                  {{ $t("footer_contactus_3") }}
                </p>
                <p>
                  {{ $t("footer_contactus_4") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>



<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components:{
      Navbar
  },
};
</script>

<style scoped>
.nav-custom-style {
  color: #565656;
  display: inline-block;
  margin-right: 30px;
}
</style>
