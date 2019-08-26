<template>
    <!-- next moon -->
    <v-layout text-xs-center wrap>
        <v-flex class="half" style="align-self: center;">
            <h1 class="display-1 font-weight-light mb-3" style="background: white; color: black; border-radius: 50%; width: 240px; margin-left: auto; margin-right: auto; padding: 8px; height: 240px; padding-top: 2em; margin-top: 16px;">
                <div style="font-size: 0.6em !important;" class="display-1 font-weight-light mb-3">{{ $t('nextMoon') }}</div>
                <h2 class="display-1 font-weight_bold">{{ $t('nextMoonDate') }}</h2>
            </h1>
        </v-flex>
    </v-layout>
</template>

<style>
    /* helps aligning img and form in landing */
    .half {
        /* width: 50%; */
        padding: 40px;
    }
    /* changes form button color, not working */
    .success {
        background-color: white !important;
        border-color: white !important;
        color: black !important;
    }
    /* * */
    .v-dialog--fullscreen {
        text-align: center;
    }
    .subheading {
        font-size: 21px!important;
        font-weight: 200;
    }
</style>

<style scoped>
    .v-btn {
        width: 95%;
        height: 48px;
    }
    .v-form .v-btn {
        width: 95%;
    }
    .v-sheet {
        padding: 16px;
        border-radius: 16px;
    }

    .checkbox {
        position: relative;
    }

    .checkbox label {
        position: absolute;
        top: 6px;
        left: 32px;
        width: 100%;
        text-align: left;
    }

    .imgfix {
        padding-bottom: 0px;
        padding-top: 0px;
    }


    @media screen and (max-width: 768px) {
        .half {
            padding: 16px 32px;
        }
        h1 {
            font-size: 2.4em !important;
        }
    }
</style>

<script>
// import firebase from 'firebase';
// import LandingForm from '@/components/LandingForm.vue';
// import LandingSuccess from '@/components/LandingSuccess.vue';

export default {
  name: 'NextMoon',
  // components: {
  //   LandingForm,
  //   LandingSuccess,
  // },
  // props: {
  //   success: Boolean,
  // },
  // methods: {
  //   isSuccess() {
  //       console.log(this.$route.fullPath);
  //       console.log(this.success);
  //       if (this.success || this.$route.fullPath === '/success') {
  //           return true;
  //       } else {
  //           return false;
  //       }
  //   },
  // },
};
</script>
