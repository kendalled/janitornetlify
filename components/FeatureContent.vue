<template>
  <div class="mt-10 sm:grid sm:grid-cols-2 sm:col-gap-8 sm:row-gap-10 lg:col-span-2 lg:mt-0">
    <div>
      <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" /></svg>
      </div>
      <div class="mt-5">
        <h5 class="text-lg font-medium leading-6 text-gray-900">
          Offices and Factories
        </h5>
        <p class="mt-2 text-base leading-6 text-gray-500">
          We are certified to clean your office for the lowest cost. We pride ourselves on 24 hour turnaround time.
        </p>
      </div>
    </div>
    <nuxt-link to="/medical" title="Medical cleaning" class="mt-10 sm:mt-0 group">
      <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg>
      </div>
      <div class="mt-5">
        <h5 class="text-lg font-medium leading-6 text-gray-900">
          Hospitals
        </h5>
        <p class="mt-2 text-base leading-6 text-gray-500">
          From regular cleaning to disinfection, we've got you covered. We also serve private practices and dental offices.
        </p>
      </div>
    </nuxt-link>
    <div class="mt-10 sm:mt-0">
      <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
      </div>
      <div class="mt-5">
        <h5 class="text-lg font-medium leading-6 text-gray-900">
          Schools and Colleges
        </h5>
        <p class="mt-2 text-base leading-6 text-gray-500">
          Cleanliness is a guarantee for your establishment. The safety of your students and staff is our main priority.
        </p>
      </div>
    </div>
    <div class="mt-10 sm:mt-0">
      <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" /></svg>
      </div>
      <div class="mt-5">
        <h5 class="text-lg font-medium leading-6 text-gray-900">
          Speciality Services
        </h5>
        <p class="mt-2 text-base leading-6 text-gray-500">
          For all of the hard to reach areas, we offer window cleaning, pressure washing, and carpet cleaning services to cover your needs.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureContent'
}
</script>
