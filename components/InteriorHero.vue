<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="relative overflow-hidden bg-gray-50">
    <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
      <div class="relative h-full max-w-screen-xl mx-auto">
        <svg class="absolute transform right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern
              id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
          <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
        </svg>
        <svg class="absolute transform left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern
              id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
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
          <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
        </svg>
      </div>
    </div>

    <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
      <div class="max-w-screen-xl px-4 mx-auto sm:px-6">
        <nav class="relative flex items-center justify-between sm:h-10 md:justify-center">
          <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div class="flex items-center justify-between w-full md:w-auto">
              <a href="#" aria-label="Home">
                <img class="w-auto h-8 sm:h-10" src="~/static/logo.png" alt="Logo">
              </a>
              <div class="flex items-center -mr-2 md:hidden">
                <button
                  id="main-menu"
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  aria-label="Main menu"
                  aria-haspopup="true"
                  @click="mobileOpen = !mobileOpen"
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
            <a href="#" class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">Services</a>
            <a href="#" class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900">Contact Us</a>
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
      <transition
        enter-active-class="duration-150 ease-out"
        enter-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="duration-100 ease-in"
        leave-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <div v-show="mobileOpen" class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
          <div class="rounded-lg shadow-md">
            <div class="overflow-hidden bg-white rounded-lg shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
              <div class="flex items-center justify-between px-5 pt-4">
                <div>
                  <img class="w-auto h-8" src="~/static/logo.png" alt="">
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
                <a href="#" class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50" role="menuitem">Contact Us</a>
              </div>
              <div>
                <a href="#" class="block w-full px-5 py-3 font-medium text-center text-blue-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:bg-gray-100 focus:text-blue-700" role="menuitem">
                  Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <main class="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div class="text-center">
          <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Sanitize any classroom
            <br class="xl:hidden">
            <span class="text-blue-600">with ease.</span>
          </h2>
          <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Our goal is to provide your campus with a sense of security and trust. We include a comprehensive insurance policy, and perform full background checks for all of our janitorial experts.
          </p>
          <div class="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a href="#" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
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
</template>

<script>
export default {
  name: 'InteriorHeader',
  data () {
    return {
      mobileOpen: false
    }
  }
}
</script>
