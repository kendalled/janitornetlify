<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <section class="relative pt-6 pb-12 bg-gray-50 lg:pb-20">
    <div>
      <InteriorNav />
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-base font-semibold leading-6 tracking-wide text-blue-600 uppercase">
            get cleaning
          </h1>
          <p class="mt-1 text-4xl font-extrabold leading-10 text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
            Get started with a free quote.
          </p>
          <p class="max-w-xl mx-auto mt-5 text-xl leading-7 text-gray-500">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
        </div>
      </div>
    </div>
    <section class="bg-white">
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
          <form>
            <div>
              <div>
                <div>
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Profile
                  </h3>
                  <p class="mt-1 text-sm leading-5 text-gray-500">
                    This information will be displayed publicly so be careful what you share.
                  </p>
                </div>
                <div class="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div class="sm:col-span-4">
                    <label for="username" class="block text-sm font-medium leading-5 text-gray-700">
                      Username
                    </label>
                    <div class="flex mt-1 rounded-md shadow-sm">
                      <span class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 sm:text-sm">
                        workcation.com/
                      </span>
                      <input id="username" class="flex-1 block w-full min-w-0 transition duration-150 ease-in-out rounded-none form-input rounded-r-md sm:text-sm sm:leading-5">
                    </div>
                  </div>

                  <div class="sm:col-span-6">
                    <label for="about" class="block text-sm font-medium leading-5 text-gray-700">
                      About
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <textarea id="about" rows="3" class="block w-full transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5" />
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Write a few sentences about yourself.
                    </p>
                  </div>

                  <div class="sm:col-span-6">
                    <label for="photo" class="block text-sm font-medium leading-5 text-gray-700">
                      Photo
                    </label>
                    <div class="flex items-center mt-2">
                      <span class="w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                        <svg class="w-full h-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <span class="ml-5 rounded-md shadow-sm">
                        <button type="button" class="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                          Change
                        </button>
                      </span>
                    </div>
                  </div>

                  <div class="sm:col-span-6">
                    <label for="cover_photo" class="block text-sm font-medium leading-5 text-gray-700">
                      Cover photo
                    </label>
                    <div class="flex justify-center px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md">
                      <div class="text-center">
                        <svg class="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p class="mt-1 text-sm text-gray-600">
                          <button type="button" class="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none focus:underline">
                            Upload a file
                          </button>
                          or drag and drop
                        </p>
                        <p class="mt-1 text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-8 mt-8 border-t border-gray-200">
                <div>
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Personal Information
                  </h3>
                  <p class="mt-1 text-sm leading-5 text-gray-500">
                    Use a permanent address where you can receive mail.
                  </p>
                </div>
                <div class="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">
                      First name
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input id="first_name" class="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5">
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">
                      Last name
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input id="last_name" class="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5">
                    </div>
                  </div>

                  <div class="sm:col-span-4">
                    <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                      Email address
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input id="email" type="email" class="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5">
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="country" class="block text-sm font-medium leading-5 text-gray-700">
                      Country / Region
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <select id="country" class="block w-full transition duration-150 ease-in-out form-select sm:text-sm sm:leading-5">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div class="sm:col-span-6">
                    <label for="street_address" class="block text-sm font-medium leading-5 text-gray-700">
                      Street address
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input id="street_address" class="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5">
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="city" class="block text-sm font-medium leading-5 text-gray-700">
                      City
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input id="city" class="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5">
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="state" class="block text-sm font-medium leading-5 text-gray-700">
                      State / Province
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input id="state" class="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5">
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="zip" class="block text-sm font-medium leading-5 text-gray-700">
                      ZIP / Postal
                    </label>
                    <div class="mt-1 rounded-md shadow-sm">
                      <input id="zip" class="block w-full transition duration-150 ease-in-out form-input sm:text-sm sm:leading-5">
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-8 mt-8 border-t border-gray-200">
                <div>
                  <h3 class="text-lg font-medium leading-6 text-gray-900">
                    Notifications
                  </h3>
                  <p class="mt-1 text-sm leading-5 text-gray-500">
                    We'll always let you know about important changes, but you pick what else you want to hear about.
                  </p>
                </div>
                <div class="mt-6">
                  <fieldset>
                    <legend class="text-base font-medium text-gray-900">
                      By Email
                    </legend>
                    <div class="mt-4">
                      <div class="relative flex items-start">
                        <div class="flex items-center h-5">
                          <input id="comments" type="checkbox" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-checkbox">
                        </div>
                        <div class="ml-3 text-sm leading-5">
                          <label for="comments" class="font-medium text-gray-700">Comments</label>
                          <p class="text-gray-500">
                            Get notified when someones posts a comment on a posting.
                          </p>
                        </div>
                      </div>
                      <div class="mt-4">
                        <div class="relative flex items-start">
                          <div class="flex items-center h-5">
                            <input id="candidates" type="checkbox" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-checkbox">
                          </div>
                          <div class="ml-3 text-sm leading-5">
                            <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                            <p class="text-gray-500">
                              Get notified when a candidate applies for a job.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="mt-4">
                        <div class="relative flex items-start">
                          <div class="flex items-center h-5">
                            <input id="offers" type="checkbox" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-checkbox">
                          </div>
                          <div class="ml-3 text-sm leading-5">
                            <label for="offers" class="font-medium text-gray-700">Offers</label>
                            <p class="text-gray-500">
                              Get notified when a candidate accepts or rejects an offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset class="mt-6">
                    <legend class="text-base font-medium text-gray-900">
                      Push Notifications
                    </legend>
                    <p class="text-sm leading-5 text-gray-500">
                      These are delivered via SMS to your mobile phone.
                    </p>
                    <div class="mt-4">
                      <div class="flex items-center">
                        <input id="push_everything" name="push_notifications" type="radio" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio">
                        <label for="push_everything" class="ml-3">
                          <span class="block text-sm font-medium leading-5 text-gray-700">Everything</span>
                        </label>
                      </div>
                      <div class="flex items-center mt-4">
                        <input id="push_email" name="push_notifications" type="radio" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio">
                        <label for="push_email" class="ml-3">
                          <span class="block text-sm font-medium leading-5 text-gray-700">Same as email</span>
                        </label>
                      </div>
                      <div class="flex items-center mt-4">
                        <input id="push_nothing" name="push_notifications" type="radio" class="w-4 h-4 text-blue-600 transition duration-150 ease-in-out form-radio">
                        <label for="push_nothing" class="ml-3">
                          <span class="block text-sm font-medium leading-5 text-gray-700">No push notifications</span>
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            <div class="pt-5 mt-8 border-t border-gray-200">
              <div class="flex justify-end">
                <span class="inline-flex rounded-md shadow-sm">
                  <button type="button" class="px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                    Cancel
                  </button>
                </span>
                <span class="inline-flex ml-3 rounded-md shadow-sm">
                  <button type="submit" class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700">
                    Submit
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'QuoteForm'
}
</script>
