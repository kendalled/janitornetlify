<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="w-full py-6 mx-auto sm:px-6 lg:px-8">
    <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
      <aside class="px-2 py-6 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
        <nav class="space-y-1">
          <a href="#" class="flex items-center px-3 py-2 text-sm font-medium leading-5 text-blue-700 transition duration-150 ease-in-out rounded-md group bg-gray-50 hover:text-blue-700 hover:bg-white focus:outline-none focus:bg-blue-100" aria-current="page">
            <!-- Heroicon name: user-circle -->
            <svg
              class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-blue-500 transition duration-150 ease-in-out group-hover:text-blue-500 group-focus:text-blue-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="truncate">
              Account
            </span>
          </a>

          <a href="#" class="flex items-center px-3 py-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">
            <!-- Heroicon name: key -->
            <svg
              class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <span class="truncate">
              Password
            </span>
          </a>

          <a href="#" class="flex items-center px-3 py-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">
            <!-- Heroicon name: credit-card -->
            <svg
              class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span class="truncate">
              Plan &amp; Billing
            </span>
          </a>

          <a href="#" class="flex items-center px-3 py-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">
            <!-- Heroicon name: user-group -->
            <svg
              class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="truncate">
              Team
            </span>
          </a>

          <a href="#" class="flex items-center px-3 py-2 text-sm font-medium leading-5 text-gray-900 transition duration-150 ease-in-out rounded-md group hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50">
            <!-- Heroicon name: view-grid-add -->
            <svg
              class="flex-shrink-0 w-6 h-6 mr-3 -ml-1 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
            </svg>
            <span class="truncate">
              Integrations
            </span>
          </a>
        </nav>
      </aside>

      <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
        <form action="#" method="POST">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-6 space-y-6 bg-white sm:p-6">
              <div>
                <h2 class="text-lg font-medium leading-6 text-gray-900">
                  Profile
                </h2>
                <p class="mt-1 text-sm leading-5 text-gray-500">
                  This information will be displayed publicly so be careful what you share.
                </p>
              </div>

              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 space-y-1 sm:col-span-2">
                  <label for="company_website" class="block text-sm font-medium leading-5 text-gray-700">
                    Username
                  </label>
                  <div class="flex rounded-md shadow-sm">
                    <span class="inline-flex items-center px-3 text-gray-500 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md sm:text-sm">
                      workcation.com/
                    </span>
                    <input id="username" class="flex-grow block w-full min-w-0 transition duration-150 ease-in-out rounded-none form-input rounded-r-md sm:text-sm sm:leading-5">
                  </div>
                </div>

                <div class="col-span-3 space-y-1">
                  <label for="about" class="block text-sm font-medium leading-5 text-gray-700">
                    About
                  </label>
                  <div class="rounded-md shadow-sm">
                    <textarea id="about" rows="3" class="block w-full mt-1 transition duration-150 ease-in-out form-textarea sm:text-sm sm:leading-5" placeholder="you@example.com" />
                  </div>
                  <p class="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p>
                </div>

                <div class="col-span-3 space-y-1">
                  <label class="block text-sm font-medium leading-5 text-gray-700">
                    Photo
                  </label>
                  <div class="flex items-center">
                    <span class="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
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

                <div class="col-span-3 space-y-1">
                  <label class="block text-sm font-medium leading-5 text-gray-700">
                    Cover photo
                  </label>
                  <div class="flex justify-center px-6 pt-5 pb-6 mt-2 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="text-center">
                      <svg class="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <p class="mt-1 text-sm text-gray-600">
                        <button class="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none focus:underline">
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
            <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <span class="inline-flex rounded-md shadow-sm">
                <button type="submit" class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700">
                  Save
                </button>
              </span>
            </div>
          </div>
        </form>

        <form action="#" method="POST">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-6 space-y-6 bg-white sm:p-6">
              <div>
                <h2 class="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h2>
                <p class="mt-1 text-sm leading-5 text-gray-500">
                  Use a permanent address where you can recieve mail.
                </p>
              </div>

              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">First name</label>
                  <input id="first_name" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">Last name</label>
                  <input id="last_name" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="email_address" class="block text-sm font-medium leading-5 text-gray-700">Email address</label>
                  <input id="email_address" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="country" class="block text-sm font-medium leading-5 text-gray-700">Country / Region</label>
                  <select id="country" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div class="col-span-6">
                  <label for="street_address" class="block text-sm font-medium leading-5 text-gray-700">Street address</label>
                  <input id="street_address" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label for="city" class="block text-sm font-medium leading-5 text-gray-700">City</label>
                  <input id="city" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="state" class="block text-sm font-medium leading-5 text-gray-700">State / Province</label>
                  <input id="state" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="postal_code" class="block text-sm font-medium leading-5 text-gray-700">ZIP / Postal</label>
                  <input id="postal_code" class="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                </div>
              </div>
            </div>
            <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <span class="inline-flex rounded-md shadow-sm">
                <button type="submit" class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700">
                  Save
                </button>
              </span>
            </div>
          </div>
        </form>

        <form action="#" method="POST">
          <div class="shadow sm:rounded-md sm:overflow-hidden">
            <div class="px-4 py-6 space-y-6 bg-white sm:p-6">
              <div>
                <h2 class="text-lg font-medium leading-6 text-gray-900">
                  Notifications
                </h2>
                <p class="mt-1 text-sm leading-5 text-gray-500">
                  Provide basic informtion about the job. Be specific with the job title.
                </p>
              </div>

              <fieldset>
                <legend class="text-base font-medium leading-6 text-gray-900">
                  By Email
                </legend>
                <div class="mt-4">
                  <div class="flex items-start">
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
                    <div class="flex items-start">
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
                    <div class="flex items-start">
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
                <legend class="text-base font-medium leading-6 text-gray-900">
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
            <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <span class="inline-flex rounded-md shadow-sm">
                <button type="submit" class="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700">
                  Save
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuoteFormTwo'
}
</script>
