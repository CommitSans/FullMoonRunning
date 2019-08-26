<template>
    <v-container text-xs-center>
        <v-layout row wrap justify-center>
            <v-flex xs12 sm5 class="text-xs-center">
              <strong>{{ $t('success.share')}}</strong><br v-if="!inline">
                <v-btn icon :href="twitter" target="_blank">
                    <v-icon>fab fa-twitter</v-icon>
                </v-btn>
                <v-btn icon :href="facebook" target="_blank">
                    <v-icon>fab fa-facebook</v-icon>
                </v-btn>
                <v-btn icon :href="whatsapp" target="_blank" class="hidden-md-and-up">
                    <v-icon>fab fa-whatsapp</v-icon>
                </v-btn>
            </v-flex>
            <v-flex xs12 sm5 class="text-xs-center">
                <strong>{{ $t('success.follow')}}</strong><br v-if="!inline">
                <v-btn
                    v-for="icon in icons"
                    :key="icon.icon"
                    :href="icon.url"
                    target="_blank"
                    dark
                    icon
                >
                    <v-icon size="24px">{{ icon.icon }}</v-icon>
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
   .confirmation_image {
        width: 110px;
    }
</style>

<script>
export default {
  name: 'ShareButtons',
  props: {
    text: String,
    url: String,
    inline: Boolean,
  },
  data: () => ({
    icons: [
      {
        icon: 'fab fa-instagram',
        url: 'https://www.instagram.com/fullmoonrunning/',
      },
      {
        icon: 'fab fa-facebook',
        url: 'https://www.facebook.com/Fullmoonrunning/',
      },
    ],
  }),
  computed: {
    twitter() {
      let url = 'https://twitter.com/intent/tweet';
      url += `?text=${this.text}`;
      url += `&url=${this.url}`;
      return url;
    },
    facebook() {
      const appId = '396541687833593';
      const redirect = 'http://fullmoonrunning.com';

      let url = 'https://www.facebook.com/dialog/share?';
      url += `app_id=${appId}`;
      url += '&display=popup';
      url += `&href=${this.url}`;
      url += `&quote=${this.text}`;
      url += `&redirect_uri=${redirect}`;

      return url;
    },
    whatsapp() {
      let url = 'whatsapp://send?';
      url += `text=${this.url}`;

      return url;
    },
  },
};
</script>
