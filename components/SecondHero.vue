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
        <div class="max-w-screen-xl px-4 mx-auto sm:px-6">
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <nuxt-link to="/" title="Home page" aria-label="Home">
                  <img class="w-auto h-8 sm:h-10" src="~/static/logo.png" alt="Logo">
                </nuxt-link>
                <div class="flex items-center -mr-2 md:hidden">
                  <button id="main-menu" type="button" class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500" aria-label="Main menu" aria-haspopup="true">
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
              <a href="#" class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">Services</a>
              <a href="#" class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">Contact</a>
            </div>
            <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span class="inline-flex rounded-md shadow">
                <a href="#" class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-blue-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-blue-700">
                  Free Quote
                </a>
              </span>
            </div>
          </nav>
        </div>

        <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
        <div class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div class="rounded-lg shadow-md">
            <div class="overflow-hidden bg-white rounded-lg shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
              <div class="flex items-center justify-between px-5 pt-4">
                <div>
                  <img class="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="">
                </div>
                <div class="-mr-2">
                  <button type="button" class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500" aria-label="Close menu">
                    <svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <a href="#" class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50" role="menuitem">Our Work</a>
                <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50" role="menuitem">Projects</a>
                <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50" role="menuitem">Services</a>
                <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50" role="menuitem">Contact</a>
              </div>
              <div>
                <a href="#" class="block w-full px-5 py-3 font-medium text-center text-blue-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:bg-gray-100 focus:text-blue-700" role="menuitem">
                  Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="max-w-screen-xl px-4 mx-auto mt-10 sm:px-6 md:mt-16 lg:mt-20">
          <div class="text-center">
            <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Sanitize your campus
              <br>
              <span class="text-blue-600">with our expert help.</span>
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
          <img class="relative rounded-lg shadow-lg" src="~/static/school.jpg" alt="App screenshot">
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
  name: 'SecondHero'
}
</script>
