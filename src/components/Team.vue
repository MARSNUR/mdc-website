<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>


<template>
  <!-- ##### Team Area Start ##### -->
  <section class="our_team_area section-padding-50 clearfix" id="team">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading text-center">
            <h2 class="fadeInUp" data-wow-delay="0.3s">
              {{ $t("ourexperts_title") }}
            </h2>
            <p class="fadeInUp" data-wow-delay="0.4s">
              {{ $t("ourexperts_decs") }}
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Single Team Member -->
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="single-team-member fadeInUp" data-wow-delay="0.2s">
            <!-- Image -->
            <div class="team-member-thumb">
              <img
                src="../assets/img/team-img/07.png"
                class="center-block"
                alt=""
              />
            </div>
            <!-- Team Info -->
            <div class="team-info">
              <h5>{{ $t("ourexperts_dastan_title") }}</h5>
              <p>{{ $t("ourexperts_dastan_decs") }}</p>
            </div>
            <!-- Social Icon -->
            <div class="team-social-icon">
              <!-- <a href="#"><i class="fa fa-twitter"></i></a> -->
              <a href="https://www.linkedin.com/in/dastan-dogoev"
                ><i class="fa fa-linkedin"></i
              ></a>
            </div>
          </div>
        </div>

        <!-- Single Team Member -->
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="single-team-member fadeInUp" data-wow-delay="0.3s">
            <!-- Image -->
            <div class="team-member-thumb">
              <img
                src="../assets/img/team-img/06.png"
                class="center-block"
                alt=""
              />
            </div>
            <!-- Team Info -->
            <div class="team-info">
              <h5>{{ $t("ourexperts_saaly_title") }}</h5>
              <p>{{ $t("ourexperts_saaly_desc") }}</p>
            </div>
            <!-- Social Icon -->
            <div class="team-social-icon">
              <a href="https://twitter.com/STemirkanov"
                ><i class="fa fa-twitter"></i
              ></a>
              <a href="https://www.linkedin.com/in/saaly-2021/"
                ><i class="fa fa-linkedin"></i
              ></a>
            </div>
          </div>
        </div>

        <!-- Single Team Member -->
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="single-team-member fadeInUp" data-wow-delay="0.4s">
            <!-- Image -->
            <div class="team-member-thumb">
              <img
                src="../assets/img/team-img/08.png"
                class="center-block"
                alt=""
              />
            </div>
            <!-- Team Info -->
            <div class="team-info">
              <h5>{{ $t("ourexperts_azimbek_title") }}</h5>
              <p>{{ $t("ourexperts_azimbek_decs") }}</p>
            </div>
            <!-- Social Icon -->
            <div class="team-social-icon">
              <a href="https://twitter.com/Azim69646514"
                ><i class="fa fa-twitter"></i
              ></a>
              <a href="https://www.linkedin.com/in/azimbek-sagynbaev-2bab1b167/"
                ><i class="fa fa-linkedin"></i
              ></a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Single Team Member -->
        <div class="col-12 col-sm-6 col-lg-6">
          <div class="single-team-member fadeInUp" data-wow-delay="0.5s">
            <!-- Image -->
            <div class="team-member-thumb">
              <img
                src="../assets/img/team-img/05.png"
                class="center-block"
                alt=""
              />
            </div>
            <!-- Team Info -->
            <div class="team-info">
              <h5>{{ $t("ourexperts_tatyana_title") }}</h5>
              <p>{{ $t("ourexperts_tatyana_decs") }}</p>
            </div>
            <!-- Icon -->
            <div class="team-social-icon">
              <!-- <a href="#"><i class="fa fa-twitter"></i></a> -->
              <a
                href="https://www.linkedin.com/in/tatyana-shahin-baylo-523aa316b"
                ><i class="fa fa-linkedin"></i
              ></a>
            </div>
          </div>
        </div>

        <!-- Single Team Member -->
        <div class="col-12 col-sm-6 col-lg-6">
          <div class="single-team-member fadeInUp" data-wow-delay="0.5s">
            <!-- Image -->
            <div class="team-member-thumb">
              <img
                src="../assets/img/team-img/04.png"
                class="center-block"
                alt=""
              />
            </div>
            <!-- Team Info -->
            <div class="team-info">
              <h5>{{ $t("ourexperts_timur_title") }}</h5>
              <p>{{ $t("ourexperts_timur_decs") }}</p>
            </div>
            <!-- Icon -->
            <div class="team-social-icon">
              <a href="https://twitter.com/tima_turner"
                ><i class="fa fa-twitter"></i
              ></a>
              <a href="https://www.linkedin.com/in/timur-alkhozhoev-a0b4a4236"
                ><i class="fa fa-linkedin"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Team Area End ##### -->

  <!-- ##### Advisors Area Start ##### -->
  <section class="our_team_area section-padding-50-0 clearfix" id="team">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading text-center">
            <h2 class="fadeInUp" data-wow-delay="0.3s">
              {{ $t("advisors_title") }}
            </h2>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Single Team Member -->
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="single-team-member fadeInUp" data-wow-delay="0.5s">
            <!-- Image -->
            <div class="team-member-thumb">
              <img
                src="../assets/img/team-img/01.png"
                class="center-block"
                alt=""
              />
            </div>
            <!-- Team Info -->
            <div class="team-info">
              <h5>{{ $t("advisors_amit_title") }}</h5>
              <p>{{ $t("advisors_amit_desc") }}</p>
            </div>
            <!-- Icon -->
            <div class="team-social-icon">
              <a href="https://www.linkedin.com/in/amit-prasanna-fca-138a8b2/"
                ><i class="fa fa-linkedin"></i
              ></a>
            </div>
          </div>
        </div>

        <!-- Single Team Member -->
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="single-team-member fadeInUp" data-wow-delay="0.5s">
            <!-- Image -->
            <div class="team-member-thumb">
              <img
                src="../assets/img/team-img/03.png"
                class="center-block"
                alt=""
              />
            </div>
            <!-- Team Info -->
            <div class="team-info">
              <h5>{{ $t("advisors_mark_title") }}</h5>
              <p>{{ $t("advisors_mark_desc") }}</p>
            </div>
            <!-- Icon -->
            <div class="team-social-icon">
              <a
                href="https://www.linkedin.com/in/mark-bamber-3118347/?originalSubdomain=mt"
                ><i class="fa fa-linkedin"></i
              ></a>
            </div>
          </div>
        </div>

        <!-- Single Team Member -->
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="single-team-member fadeInUp" data-wow-delay="0.5s">
            <!-- Image -->
            <div class="team-member-thumb">
              <img
                src="../assets/img/team-img/02.png"
                class="center-block"
                alt=""
              />
            </div>
            <!-- Team Info -->
            <div class="team-info">
              <h5>{{ $t("advisors_ryan_title") }}</h5>
              <p>{{ $t("advisors_ryan_desc") }}</p>
            </div>
            <!-- Icon -->
            <div class="team-social-icon">
              <a href="linkedin.com/in/ryanottman/"
                ><i class="fa fa-linkedin"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Advisors Area End ##### -->

  <!-- Partners Area Start -->
  <div class="partner-powerful">
    <div class="container">
      <div class="section-heading text-center">
        <div
          class="mb-15 section-padding-100-0 justify-content-center fadeInUp"
          data-wow-delay="0.2s"
        >
          <span class="gradient-text blue"></span>
        </div>
        <h2 class="fadeInUp" data-wow-delay="0.3s">Our powerful Partners</h2>
        <p class="fadeInUp" data-wow-delay="0.4s">
          Our partners contribute more than money. Their ideas, in-kind support
          and more are helping to build better products.
        </p>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-15">
          <div class="team-member">
            <div class="team-img">
              <a
                target="_blank"
                href="https://www.microsoft.com/en-us/startups?rtc=1"
              >
                <img
                  class="img-responsive center-block"
                  src="../assets/img/team-img/09.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-15">
          <div class="team-member">
            <div class="team-img">
              <a href="https://astanahub.com/en/l/techpreneurs" target="_blank">
                <img
                  class="img-responsive center-block"
                  src="../assets/img/team-img/10.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Partners Area End -->
  <!-- ##### Blog Area Start ##### -->
  <section class="our_blog_area clearfix section-padding-100-0" id="blog">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-heading text-center">
            <h2 class="fadeInUp" data-wow-delay="0.3s">Latest News</h2>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <!-- Single Blog Post -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="single-blog-area fadeInUp" data-wow-delay="0.2s">
            <!-- Post Thumbnail -->
            <div class="blog_thumbnail">
              <img src="../assets/img/blog-img/4.jpeg" alt="" />
            </div>
            <!-- Post Content -->
            <div class="blog-content">
              <!-- Dream Dots -->

              <a
                href="https://www.euronews.com/next/2022/01/14/meta-faces-2-7bn-civil-lawsuit-over-allegations-it-exploited-uk-facebook-users-data-for-pr"
                class="post-title mt-20"
              >
                <h4>
                  Meta faces €2.7bn civil lawsuit over allegations it exploited
                  UK Facebook users’ data for profit
                </h4>
              </a>
              <a
                href="https://www.euronews.com/next/2022/01/14/meta-faces-2-7bn-civil-lawsuit-over-allegations-it-exploited-uk-facebook-users-data-for-pr"
                class="btn dream-btn mt-15"
                >Read Details</a
              >
            </div>
          </div>
        </div>

        <!-- Single Blog Post -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="single-blog-area fadeInUp" data-wow-delay="0.3s">
            <!-- Post Thumbnail -->
            <div class="blog_thumbnail">
              <img src="../assets/img/blog-img/5.jpeg" alt="" />
            </div>
            <!-- Post Content -->
            <div class="blog-content">
              <a
                href="https://lourdesmturrecha.medium.com/you-dont-need-property-rights-to-monetize-your-personal-data-45f3ebdbed1e"
                class="post-title mt-20"
              >
                <h4>
                  You Don’t Need Property Rights To Monetize Your Personal Data
                </h4>
              </a>
              <a
                href="https://lourdesmturrecha.medium.com/you-dont-need-property-rights-to-monetize-your-personal-data-45f3ebdbed1e"
                class="btn dream-btn mt-15"
                >Read Details</a
              >
            </div>
          </div>
        </div>

        <!-- Single Blog Post -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="single-blog-area fadeInUp" data-wow-delay="0.4s">
            <!-- Post Thumbnail -->
            <div class="blog_thumbnail">
              <img src="../assets/img/blog-img/6.jpeg" alt="" />
            </div>
            <!-- Post Content -->
            <div class="blog-content">
              <a
                href="https://www.reuters.com/world/us/us-chamber-commerce-others-urge-congress-pass-privacy-legislation-2022-01-13/#main-content"
                class="post-title mt-20"
              >
                <h4>
                  U.S. Chamber of Commerce, others urge Congress to pass privacy
                  legislation
                </h4>
              </a>
              <a
                href="https://www.reuters.com/world/us/us-chamber-commerce-others-urge-congress-pass-privacy-legislation-2022-01-13/#main-content"
                class="btn dream-btn mt-15"
                >Read Details</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ##### Blog Area End ##### -->
</template>

<script>
export default {
  name: "Team",
};
</script>