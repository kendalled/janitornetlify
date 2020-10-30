<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <!-- This example requires Tailwind CSS v1.4.0+ -->
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-class="translate-y-1 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-1 opacity-0"
  >
    <div v-show="openFlyout" ref="flyout" v-click-outside="vcoConfig" class="absolute w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
      <div class="rounded-lg shadow-lg">
        <div class="overflow-hidden rounded-lg shadow-xs">
          <div class="relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
            <nuxt-link v-for="(link, l) in links" :key="l" :to="link.slug" :title="link.title" class="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50">
              <!-- Heroicon name: academic-cap -->
              <svg
                v-if="l === 0"
                class="flex-shrink-0 w-6 h-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <svg
                v-if="l === 1"
                class="flex-shrink-0 w-6 h-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <svg
                v-if="l === 2"
                class="flex-shrink-0 w-6 h-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <svg
                v-if="l === 3"
                class="flex-shrink-0 w-6 h-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <div class="space-y-1">
                <p class="text-base font-medium leading-6 text-gray-900">
                  {{ link.title }}
                </p>
                <p class="text-sm leading-5 text-gray-500">
                  {{ link.blurb }}
                </p>
              </div>
            </nuxt-link>
          </div>
          <div class="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
            <div class="flow-root">
              <a href="#" class="flex items-center p-3 -m-3 space-x-3 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <!-- Heroicon name: play -->
                <svg class="flex-shrink-0 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Watch Demo</span>
              </a>
            </div>
            <div class="flow-root">
              <a href="#" class="flex items-center p-3 -m-3 space-x-3 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-100">
                <!-- Heroicon name: phone -->
                <svg class="flex-shrink-0 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Contact Sales</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'TwoColumnFlyout',
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      openFlyout: false,
      links: [
        {
          title: 'School Cleaning',
          slug: '/school',
          blurb: 'Sanitize any classroom or campus in minutes. We are trained to clean floors, hallways, & gyms.'
        },
        {
          title: 'Office Cleaning',
          slug: '/office',
          blurb: 'Clean any office space, from cubicles to hallways.'
        },
        {
          title: 'Medical Cleaning',
          slug: '/medical',
          blurb: 'Sanitize any medical space in minutes with our team.'
        },
        {
          title: 'Construction Cleaning',
          slug: '/construction',
          blurb: 'Need to clean up a construction site? We\'ve got you covered.'
        }
      ]
    }
  },
  computed: {
    vcoConfig () {
      return {
        handler: this.close,
        events: ['click'],
        // activate / deactivate click-outside directive dynamically
        isActive: this.openFlyout
      }
    }
  },
  watch: {
    opened (newVal) {
      this.openFlyout = newVal
    },
    openFlyout (newVal) {
      this.$emit('toggled', newVal)
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
