<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="bg-gray-50">
    <div class="relative overflow-hidden">
      <div class="absolute inset-y-0 block w-full h-full">
        <div class="relative h-full">
          <svg class="absolute transform right-full translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern
                id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#ad9a0a02-b58e-4a1d-8c36-1b649889af63)" />
          </svg>
          <svg class="absolute transform left-full -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern
                id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#478e97d6-90df-4a89-8d63-30fdbb3c7e57)" />
          </svg>
        </div>
      </div>

      <div class="relative pt-6 pb-12 lg:pb-20">
        <InteriorNav />

        <div class="max-w-screen-xl px-4 mx-auto mt-10 sm:px-6 md:mt-16 lg:mt-20">
          <div class="text-center">
            <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              {{ page.line1 }}
              <br>
              <span class="text-blue-600">{{ page.line2 }}.</span>
            </h2>
            <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Our goal is to provide your campus with a sense of security and trust. We include a comprehensive insurance policy, and perform full background checks for our staff.
            </p>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="absolute inset-0 flex flex-col">
          <div class="flex-1" />
          <div class="flex-1 w-full bg-gray-800" />
        </div>
        <div class="max-w-screen-xl px-4 mx-auto sm:px-6">
          <img class="relative object-cover w-full rounded-lg shadow-lg h-96" :src="page.image" :alt="page.alt">
        </div>
      </div>
    </div>
    <div class="bg-gray-800">
      <div class="max-w-screen-xl px-4 pt-16 pb-20 mx-auto sm:px-6 md:pb-24 lg:px-8">
        <h3 class="text-sm font-semibold tracking-wide text-center text-gray-400 uppercase">
          Trusted by over 5,000 forward-thinking companies
        </h3>
        <div class="grid grid-cols-2 gap-8 mt-8 md:grid-cols-6 lg:grid-cols-5">
          <div class="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo.svg" alt="Tuple">
          </div>
          <div class="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo.svg" alt="Mirage">
          </div>
          <div class="flex justify-center col-span-1 md:col-span-2 lg:col-span-1">
            <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo.svg" alt="StaticKit">
          </div>
          <div class="flex justify-center col-span-1 md:col-span-3 lg:col-span-1">
            <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo.svg" alt="Transistor">
          </div>
          <div class="flex justify-center col-span-2 md:col-span-3 lg:col-span-1">
            <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo.svg" alt="Workcation">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondHero',
  props: {
    page: {
      type: Object,
      default () {
        return {}
      }
    }
    // line1: {
    //   type: String,
    //   default: 'Sanitize your campus'
    // },
    // line2: {
    //   type: String,
    //   default: 'with our expert help.'
    // },
    // img: {
    //   type: String,
    //   default: '~/static/school.jpg'
    // }
  },
  data () {
    return {
      flyoutOpen: false
    }
  }
}
</script>
