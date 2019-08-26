<template>
    <div>
        <!-- Form header -->
        <h1 class="display-2 font-weight-bold mb-3">
        {{ $t('formTitle') }}
        </h1>
        <p class="subheading font-weight-regular">
        {{ $t('get') }} <strong>{{ $t('formDescription') }}</strong>.<br>{{ $t('yours') }}.
        </p>

        <v-form ref="form" v-model="valid" lazy-validation>

            <div class="error pa-2 my-4" v-if="error">
                {{error}}
            </div>

            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required>
            </v-text-field>

            <v-btn :disabled="!valid" color="white black--text" @click="registerMail">
            {{ $t('mainCTA') }}
            </v-btn><br>

            <span style="line-height: 3em;">{{ $t('cop')}}</span>

        </v-form>

        <!-- Social Login -->
        <v-btn color="grey darken-3" @click="registerGoogle">
            <v-icon left dark>fab fa-google</v-icon>{{ $t('googleBTN') }}
        </v-btn>
        <v-btn color="grey darken-3" @click="registerFacebook">
            <v-icon left dark>fab fa-facebook</v-icon>{{ $t('facebookBTN') }}
        </v-btn>

        <div class="checkbox">
            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || $t('errors.mustAgree')]"
            required
            ></v-checkbox>

            <i18n path="agree.text" tag="label">
                <a place="terms" @click="privacy = true">
                    {{ $t('agree.terms') }}
                </a>
                <a place="privacy" @click="privacy = true">
                    {{ $t('agree.privacy') }}
                </a>
            </i18n>
        </div>
        <v-dialog v-model="privacy" scrollable width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">{{ $t('agree.privacy') }}</span>
                </v-card-title>
                <v-card-text>
                    <privacyEs v-if="$i18n.locale === 'es'" />
                    <privacyEn v-else />
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="grey darken-2" @click="privacy = false">{{ $t('closeBTN') }}</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<style scoped>
    .v-btn {
        width: 95%;
        height: 48px;
    }
    .v-dialog .v-btn {
        margin: 8px 0px;
        max-height: 40px;
        border-radius: 4px;
    }
    .v-form .tos-dialog .v-btn {
        width: 100%;
    }
    .v-sheet {
        padding: 16px;
        padding-bottom: 0px;
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
    /* changes facebook button color */
    .blue {
        background-color: #4267b2 !important;
        border-color: #4267b2!important;
    }
    .checkbox label {
        width: 90%;
    }
    @media screen and (max-width: 768px) {
        h1 {
            font-size: 2em !important;
        }
    }
</style>

<script>
import firebase from 'firebase';
import privacyEs from '@/lang/privacy-es.vue';
import privacyEn from '@/lang/privacy-en.vue';

export default {
  name: 'LandingForm',
  components: {
    privacyEn,
    privacyEs,
  },
  data: () => ({
    valid: false,
    email: '',
    error: '',
    checkbox: false,
    tos: false,
    privacy: false,
    confirmation: false,
    logged: false,
  }),
  computed: {
    emailRules() {
      return [
        v => !!v || this.$t('errors.emailRequired'),
        v => /.+@.+/.test(v) || this.$t('errors.emailInvalid'),
      ];
    },
  },
  methods: {
    registerMail() {
      const self = this;
      self.error = '';

      if (this.checkbox) {
        firebase.auth().createUserWithEmailAndPassword(this.email, 'T€S0ro!').then(
          () => {
            self.$router.push({ name: 'success' });
          },
          (err) => {
            self.error = err.message;
          },
        );
      } else {
        self.error = self.$t('errors.agree');
      }
    },
    registerGoogle() {
      const self = this;
      self.error = '';
      if (this.checkbox) {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then((result) => {
          // self.$router.push({ name: 'success' });
          window.location.href = window.location.origin + '/#/success';
        }).catch((error) => {
          self.error = self.$t('errors.errorGoogle');
        });
      } else {
        self.error = self.$t('errors.agree');
      }
    },
    registerFacebook() {
      const self = this;
      self.error = '';

      if (this.checkbox) {
        const provider = new firebase.auth.FacebookAuthProvider();

        firebase.auth().signInWithPopup(provider).then((result) => {
          // self.$router.push({ name: 'success' });
          window.location.href = window.location.origin + '/#/success';
        }).catch((error) => {
          console.error(error);
          self.error = self.$t('errors.errorFacebook');
        });
      } else {
        self.error = self.$t('errors.agree');
      }
    },
  },
};
</script>
