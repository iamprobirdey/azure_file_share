<template>
  <section class="text-blueGray-700">
    <div
      class="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28"
    >
      <div
        class="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0"
      >
        <h2
          class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"
        >
          Azure
        </h2>
        <h1
          class="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"
        >
          Azure File Storage
        </h1>
        <p class="mb-8 text-base leading-relaxed text-left text-blueGray-600">
          Deploy your file using file share fiction of second, not minutes.
          Azure File share offers you to upload file from thw website itself.
        </p>
        <div class="flex flex-col justify-center lg:flex-row">
          <button
            class="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
          >
            <a
              href="https://docs.microsoft.com/en-us/azure/?product=featured"
              target="self"
            >
              Documentation
            </a>
          </button>
          <p class="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0">
            It will take you to candy shop. <br class="hidden lg:block" />
            <a
              href="https://azure.microsoft.com/en-in/"
              target="self"
              class="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black"
              title="read more"
            >
              Read more about it »
            </a>
          </p>
        </div>
        <!-- Start -->
        <div class="flex flex-wrap w-full mt-2 -mx-4 text-left">
          <div class="w-1/4 p-4 mt-4 sm:w-1/4">
            <img src="https://img.icons8.com/color/50/000000/vue-js.png" />
          </div>
          <div class="w-1/4 p-4 mt-4 sm:w-1/4">
            <img class="w-12 l-12" src="@/assets/azure.png" />
          </div>
          <div class="w-1/4 p-4 mt-4 sm:w-1/4">
            <img class="w-12 l-12" src="@/assets/tailwind.jpg" />
          </div>
          <div class="w-1/4 p-4 mt-4 sm:w-1/4">
            <img class="pt-3 w-12 l-12" src="@/assets/heroicon.jpeg" />
          </div>
        </div>
        <!-- End -->
      </div>
      <div class="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
        <img
          class="object-cover object-center rounded-lg"
          alt="hero"
          src="@/assets/professional.jpg"
        />
      </div>
    </div>
  </section>
</template>
