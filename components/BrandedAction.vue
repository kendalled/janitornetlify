<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="bg-blue-700">
    <div class="max-w-2xl px-4 py-16 mx-auto text-center sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
        <span class="block">Ready to get cleaning?</span>
        <span class="block">Just submit a quote.</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-blue-200">
        Our award-winning customer support is here to help with any questions. Take the first steps to getting your space clean.
      </p>
      <a href="#" class="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium leading-6 text-blue-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-500 hover:bg-blue-50 sm:w-auto">
        Get started for free
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrandedAction'
}
</script>
