<template>
  <!-- stuff goes here -->
  <section>
    <div class="max-w-screen-xl px-4 mx-auto sm:px-6">
      <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
        <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <nuxt-link to="/" title="Home page" aria-label="Home">
              <img class="w-auto h-8 sm:h-10" src="~/static/logo.png" alt="Logo">
            </nuxt-link>
            <div class="flex items-center -mr-2 md:hidden">
              <button
                id="main-menu"
                ref="menuButton"
                type="button"
                class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                aria-label="Main menu"
                aria-haspopup="true"
                @click="openMobile = !openMobile"
              >
                <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:flex md:space-x-10">
          <a href="#" class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">Our Work</a>
          <a href="#" class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">Projects</a>
          <div class="relative">
            <button :class="[ flyoutOpen ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900']" type="button" class="inline-flex items-center space-x-2 text-base font-medium leading-6 transition duration-150 ease-in-out group focus:outline-none" @click.prevent="flyoutOpen = !flyoutOpen">
              <span>Services</span>
              <!--
        Heroicon name: chevron-down

        Item active: "text-gray-600", Item inactive: "text-gray-400"
      -->
              <svg :class="[flyoutOpen ? 'text-gray-800' : 'text-gray-400']" class="w-5 h-5 transition duration-150 ease-in-out group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
            <TwoColumnFlyout :opened="flyoutOpen" @close="flyoutOpen = false" />
          </div>
          <a href="#" class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">Contact</a>
        </div>
        <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <span class="inline-flex rounded-md shadow">
            <nuxt-link to="/quote" title="Quote form" class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-blue-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-blue-700">
              Free Quote
            </nuxt-link>
          </span>
        </div>
      </nav>
    </div>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="duration-100 ease-in"
      leave-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div v-if="openMobile" ref="flyout" v-click-outside="vcoConfig" class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
        <div class="rounded-lg shadow-md">
          <div class="overflow-hidden bg-white rounded-lg shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
            <div class="flex items-center justify-between px-5 pt-4">
              <div>
                <img class="w-auto h-8" src="~/static/logo.png" alt="logo">
              </div>
              <div class="-mr-2">
                <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500" aria-label="Close menu" @click.prevent="openMobile = false">
                  <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3 space-y-1">
              <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50" role="menuitem">Our Services</a>
              <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50" role="menuitem">Past Projects</a>
              <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50" role="menuitem">About Us</a>
              <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50" role="menuitem">Contact</a>
            </div>
            <div>
              <nuxt-link to="/quote" title="Quote form" class="block w-full px-5 py-3 font-medium text-center text-blue-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:bg-gray-100 focus:text-blue-700" role="menuitem">
                Free Quote
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'InteriorNav',
  directives: {
    clickOutside: vClickOutside.directive
  },
  data () {
    return {
      flyoutOpen: false,
      openMobile: false
    }
  },
  computed: {
    vcoConfig () {
      return {
        handler: this.close,
        events: ['click'],
        // activate / deactivate click-outside directive dynamically
        isActive: this.openMobile
      }
    }
  },
  methods: {
    close () {
      this.openMobile = false
      this.$refs.menuButton.blur()
    }
  }
}
</script>
