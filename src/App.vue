<template>
    <v-app dark>
        <v-toolbar app absolute>
            <v-toolbar-title class="headline">
                <span class="mobile" style="font-style: italic;"></span>
                <span class="desktop" style="font-style: italic;"></span>
            </v-toolbar-title>
            <v-spacer></v-spacer>

            <v-flex lg2 md3 xs6 sm3>
                <v-overflow-btn
                  class="langSelector"
                  :items="languages"
                  :label="currentLang"
                  target="#dropdown-example"
                  @change="changeLang"
                ></v-overflow-btn>
            </v-flex>
        </v-toolbar>

        <v-content>
            <router-view :key="$route.fullPath" />
        </v-content>

        <v-footer dark height="auto">
            <v-card class="flex" flat tile>
                <share-buttons
                    url="http://fullmoonrunning.com"
                    text=""
                    inline
                />
                <v-card-actions class="darken-3 justify-center">
                &copy;2019 &nbsp; <strong><a href="mailto:hello@fullmoonrunning.com">hello@fullmoonrunning.com</a></strong>
                </v-card-actions>
            </v-card>
        </v-footer>

    </v-app>
</template>

<style>
    body{
        background: #0a0a0b;
    }
    .v-toolbar {
        box-shadow: none;
        opacity: .96;
    }
    .v-overflow-btn .v-select__slot {
        background: #161616;
        border-radius: 4px;
    }
    /* text styles */
    .application, .headline, .display-1, .display-2, .display-3, .display-4 {
        font-family: "Helvetica", sans-serif !important;
    }
    .headline{
        font-weight: bold;
    }
    .v-text-field.v-input--is-focused > .v-input__control > .v-input__slot::after {
        color: white;
    }

    .v-select.v-select--is-menu-active .v-input__icon--append .v-icon {
        color: white !important;
    }

    /* Changes background of Dark Theme to black */
    .theme--dark.application {
        background: #0a0a0b;
    }
    .theme--dark.v-toolbar {
        background-color: transparent;
    }
    .v-content__wrap {
        display: flex;
    }
    .v-btn {
        text-transform: none;
    }

    footer .theme--dark.v-sheet {
        background-color: #0a0a0b;
        border-color: white;
        color: #fff;
        border-top: 1px solid #333333;
        padding-bottom: 16px;
    }
    footer a {
        text-decoration: none;
        color: white;
    }
    .v-toolbar nav {
        position: relative;
    }
    nav {
        padding: 8px;
    }
    /* fixes styles in ipad */
    @media screen and (min-width: 768px) and (max-height: 1024px) {
        .half {
            align-self: center;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            max-width: 540px;
        }
    }
    @media screen and (max-width: 768px) {
        .v-overflow-btn .v-select__slot {
            height: 44px;
        }
    }
</style>

<style scoped>
    /* footer color */
    /* .theme--dark.v-sheet {
        background-color: #0a0a0b;
        border-color: #0a0a0b;
    } */

    .mobile {
        display: none;
        font-size: 0.8em;
    }

    .langSelector {
        margin-top: 21px;
    }

    .v-footer .v-card__title {
        justify-content: center;
    }

    @media screen and (max-width: 768px) {
        .desktop {
            display: none;
        }

        .mobile {
            display: block;
        }
    }
</style>

<script>
import ShareButtons from '@/components/ShareButtons.vue';

export default {
  name: 'App',
  components: {
    ShareButtons,
  },
  data: () => ({
    languages: [
      'English',
      'Español',
    ],
  }),
  computed: {
    currentLang() {
      let lang = 'English';
      if (this.$i18n.locale === 'es') {
        lang = 'Español';
      }
      return lang;
    },
  },
  methods: {
    changeLang(lang) {
      console.log(this.$i18n.locale);
      if (lang === 'Español') {
        console.log('Habla castellano');
        this.$i18n.locale = 'es';
      } else {
        console.log('Speak inglis');
        this.$i18n.locale = 'en';
      }
      console.log(this.$i18n.locale);
      console.log('---');
    },
  },
};
</script>
