<template>
  <div class="pt-12 bg-gray-50 sm:pt-16">
    <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">
          Our experienced staff is ready to help you.
        </h2>
        <p class="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
          Thousands of happy business owners can't be wrong.
        </p>
      </div>
    </div>
    <div class="pb-12 mt-10 bg-white sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-gray-50" />
        <div class="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <dl class="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
              <div class="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                <dt id="item-1" class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Buildings Cleaned
                </dt>
                <dd class="order-1 text-5xl font-extrabold leading-none text-blue-600" aria-describedby="item-1">
                  500+
                </dd>
              </div>
              <div class="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Support
                </dt>
                <dd class="order-1 text-5xl font-extrabold leading-none text-blue-600">
                  24/7
                </dd>
              </div>
              <div class="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                  Employees
                </dt>
                <dd class="order-1 text-5xl font-extrabold leading-none text-blue-600">
                  489
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TailStats'
}
</script>
