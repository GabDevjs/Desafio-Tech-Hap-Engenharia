/* Import */
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

/* Config */
export default new Vuetify({
  /* Dark mode colors */
  theme: {
    themes: {
      light: {
        logo: '../assets/logo-hapengenharia.png',
        white: '#F7F9F9',
        back: '#E5E7E9 ',
        green: '#239B56'
      },
      dark: {
        white: '#252A2A ',
        back: '#151B1B',
      },
    },
  },
});
