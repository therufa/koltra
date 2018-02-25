import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VJumbotron
} from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VJumbotron
  },
  theme: {
    primary: colors.blueGrey.darken2,
    secondary: colors.blueGrey.lighten1,
    accent: colors.cyan.darken1,
    error: colors.red.accent3,
    warning: colors.yellow.base,
    info: colors.blue.base,
    success: colors.lightGreen.accent4
  }
})
