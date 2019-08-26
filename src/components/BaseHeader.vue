<template>
    <v-container>
        <!-- logo -->
        <v-layout text-xs-center wrap justify-center>
            <v-flex class="flex xs9 sm5 lg3 half imgfix" style="align-self: center;">
                <v-img
                :src="require('../assets/fmr_logo.svg')"
                contain
                ></v-img>
            </v-flex>
        </v-layout>
        <!-- naming + claim -->
        <v-layout text-xs-center wrap>
            <v-flex class="half" style="align-self: center;">
                <!-- Form header -->
                <h1 class="display-2 font-weight-bold mb-3" style="font-style: italic;">
                    {{ $t('title') }}
                </h1>
                <p class="subheading font-weight-light">
                    {{ $t('description') }}
                </p>
            </v-flex>
        </v-layout>
    </v-container>
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
        width: 100%;
        height: 48px;
    }
    .v-form .v-btn {
        width: 100%;
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
            font-size: 2em !important;
        }
    }
</style>

<script>
// import firebase from 'firebase';
// import LandingForm from '@/components/LandingForm.vue';
// import LandingSuccess from '@/components/LandingSuccess.vue';

export default {
  name: 'BaseHeader',
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
