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

        <!-- form -->
        <v-layout text-xs-center wrap>
            <v-flex class="half" style="padding: 48px 32px 56px 32px; align-self: center; background-color: #242424; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 24px 8px; border-radius: 16px;">
                <landing-success v-if="isSuccess()" />
                <landing-form v-else />
            </v-flex>
        </v-layout>
        <!-- next moon -->
        <v-layout text-xs-center wrap>
            <v-flex class="half" style="align-self: center;">
                <h1 class="display-1 font-weight-light mb-3" style="background: white; color: black; border-radius: 50%; width: 240px; margin-left: auto; margin-right: auto; padding: 8px; height: 240px; padding-top: 2em; margin-top: 16px;">
                    <div style="font-size: 0.6em !important;" class="display-1 font-weight-light mb-3">{{ $t('nextMoon') }}</div>
                    <h2 class="display-1 font-weight_bold">{{ $t('nextMoonDate') }}</h2>
                </h1>
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
        width: 95%;
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
import firebase from 'firebase';
import LandingForm from '@/components/LandingForm.vue';
import LandingSuccess from '@/components/LandingSuccess.vue';

export default {
  name: 'Landing',
  components: {
    LandingForm,
    LandingSuccess,
  },
  props: {
    success: Boolean,
  },
  methods: {
    isSuccess() {
        console.log(this.$route.fullPath);
        console.log(this.success);
        if (this.success || this.$route.fullPath === '/success') {
            return true;
        } else {
            return false;
        }
    },
  },
};
</script>
