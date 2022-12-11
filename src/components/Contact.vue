<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>


<template>
  <!-- ##### Footer Area Start ##### -->
  <footer class="footer-area bg-img">
    <!-- ##### Contact Area Start ##### -->
    <div class="contact_us_area section-padding-100-0" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-heading text-center">
              <h2 class="fadeInUp" data-wow-delay="0.3s">
                {{ $t("contactwithus_title") }}
              </h2>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="row justify-content-center">
          <div class="col-12 col-md-10 col-lg-8">
            <div class="contact_form">
              <form action="#" method="post" id="main_contact_form" novalidate>
                <div class="row">
                  <div class="col-12">
                    <div id="success_fail_info"></div>
                  </div>

                  <div class="col-12 col-md-6">
                    <div class="group fadeInUp" data-wow-delay="0.2s">
                      <input type="text" name="name" id="name" required />
                      <span class="highlight"></span>
                      <span class="bar"></span>
                      <label>{{ $t("contactwithus_name") }}</label>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="group fadeInUp" data-wow-delay="0.3s">
                      <input type="text" name="email" id="email" required />
                      <span class="highlight"></span>
                      <span class="bar"></span>
                      <label>{{ $t("contactwithus_email") }}</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="group fadeInUp" data-wow-delay="0.4s">
                      <input type="text" name="subject" id="subject" required />
                      <span class="highlight"></span>
                      <span class="bar"></span>
                      <label>{{ $t("contactwithus_subject") }}</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="group fadeInUp" data-wow-delay="0.5s">
                      <textarea name="message" id="message" required></textarea>
                      <span class="highlight"></span>
                      <span class="bar"></span>
                      <label>{{ $t("contactwithus_message") }}</label>
                    </div>
                  </div>
                  <div
                    class="col-12 text-center fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    <button type="submit" class="btn dream-btn">
                      {{ $t("contactwithus_button") }}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ##### Contact Area End ##### -->
  </footer>
  <!-- ##### Footer Area End ##### -->
</template>

<script>
export default {
  name: "Contact",
};
</script>