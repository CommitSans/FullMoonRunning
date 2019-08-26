<template>
	<!-- <Landing/> -->
	<v-container>
		<base-header />
		<!-- form -->
        <v-layout text-xs-center wrap>
            <v-flex class="half" style="padding: 48px 32px 56px 32px; align-self: center; background-color: #242424; box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 24px 8px; border-radius: 16px;">
                <landing-form />
            </v-flex>
        </v-layout>
		<next-moon />
	</v-container>
</template>

<script>
// import Landing from '@/components/Landing.vue';
import BaseHeader from '@/components/BaseHeader.vue';
import LandingForm from '@/components/LandingForm.vue';
import NextMoon from '@/components/NextMoon.vue';

export default {
  name: 'home',
  components: {
    // Landing,
    BaseHeader,
    LandingForm,
    NextMoon,
  },
  // created() {
  // 	console.log(this.$route.fullPath);
  // }
};
</script>
