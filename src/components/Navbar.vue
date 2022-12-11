<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>


<template>
  <!-- ##### Header Area Start ##### -->
        <!-- Classy Menu -->
        <!-- <nav class="classy-navbar justify-content-between" id="dreamNav"> -->
            <!-- Nav Start -->
            <div class="classynav">
              <ul id="nav">
                <li>
                  <a href="#home" lang="en">
                    {{ $t("menu_home") }}
                  </a>
                </li>
                <li>
                  <a href="#about">
                    {{ $t("menu_about") }}
                  </a>
                </li>
                <li>
                  <a href="#services">
                    {{ $t("menu_values") }}
                  </a>
                </li>
                <li>
                  <a href="#dapp">
                    {{ $t("menu_dapp") }}
                  </a>
                </li>
                <li>
                  <a href="#team">
                    {{ $t("menu_team") }}
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    {{ $t("menu_contact") }}
                  </a>
                </li>
                <!-- <li>
                  <select class="selectpicker">
                    <option><a href="#">English</a></option>
                    <option><a href="#">Русский</a></option>
                    <option><a href="#">Қазақша</a></option>
                  </select>
                </li> -->
              </ul>
            </div>
            <!-- Nav End -->
        <!-- </nav> -->
  <!-- ##### Header Area End ##### -->
</template>

<script>
export default {
  name: "Navbar",
};


</script>