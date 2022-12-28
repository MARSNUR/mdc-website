<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
</script>


<template>
  <!-- ##### Header Area Start ##### -->
        <!-- Classy Menu -->
        <!-- <nav class="classy-navbar justify-content-between" id="dreamNav"> -->
            <!-- Nav Start -->
              <ul class="nav navbar-nav navbar-right" id="nav">
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
                <li>
                  <a href="#">
                    <select class="selectpicker">
                      <option v-lang.language="'EN'" @click="$language = 'en'"><a href="#" >English</a></option>
                      <option v-lang.language="'RU'" @click="$language = 'ru'"><a href="#" >Русский</a></option>
                      <option v-lang.language="'KZ'" @click="$language = 'kz'"><a href="#">Қазақша</a></option>
                    </select>
                  </a>
                </li>
              </ul>
            <!-- Nav End -->
        <!-- </nav> -->
  <!-- ##### Header Area End ##### -->
</template>

<script>
export default{
  name: "Navbar",
};
</script>
