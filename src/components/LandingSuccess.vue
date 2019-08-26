<template>
	<div class="text-xs-center">
        <img
            :src="require('../assets/iconocheck.png')"
            class="my-3 confirmation_image"
        >
        <h3 class="text-xs-center display-1">
            {{ $t('success.title')}}
        </h3>
        <v-card-text class="subheading font-weight-regular">
        	  {{ $t('success.text')}}
        </v-card-text>
        <v-flex style="padding: 32px; align-self: center;background-color: white;box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 24px 8px;border-radius: 16px; margin-top: 16px;">
            <img
            :src="require('../assets/promoabr.png')"
            class="my-3 promo-img"
            >
        </v-flex>
        <v-card-text class="subheading">
        	  {{ $t('promo')}}
        </v-card-text>
        <share-buttons
            url="http://fullmoonrunning.com"
            text=""
        />
    </div>
</template>

<style scoped>
    .confirmation_image {
        width: 110px;
    }
    .promo-img {
        max-width: 100%;
    }
</style>

<script>
import ShareButtons from '@/components/ShareButtons.vue';

export default {
  name: 'LandingSuccess',
  components: {
    ShareButtons,
  },
  computed: {
    twitter() {
      const site = 'http://fullmoonrunning.com';
      const quote = '';

      let url = 'https://twitter.com/intent/tweet';
      url += `?text=${quote}`;
      url += `&url=${site}`;
      return url;
    },
    facebook() {
      const appId = '396541687833593';
      const site = 'http://fullmoonrunning.com';
      const quote = '';
      const redirect = site;

      let url = 'https://www.facebook.com/dialog/share?';
      url += `app_id=${appId}`;
      url += '&display=popup';
      url += `&href=${site}`;
      url += `&quote=${quote}`;
      url += `&redirect_uri=${redirect}`;

      return url;
    },
    whatsapp() {
      const quote = 'http://fullmoonrunning.com';

      let url = 'whatsapp://send?';
      url += `text=${quote}`;

      return url;
    },
  },
};
</script>
