<script setup></script>

<template>
  <footer>
    <div class="content-container">
      <div class="grid grid-cols-1 px-4 py-16 text-white md:grid-cols-2 lg:grid-cols-5">
        <div class="sidebar mb-8 flex flex-col">
          <p class="pb-2 text-gray-400">
            Marketing demo
          </p>
          <p class="pb-2">
            <NuxtLink
              class="link-featured"
              to="/"
            >
              Home
            </NuxtLink>
          </p>
        </div>

        <div class="pb-8 md:pb-16 lg:pb-0">
          <p class="pb-2 text-gray-400">
            Foo
          </p>
          <p class="pb-2">
            <a
              class="link"
              href="https://google.es"
            >Documentation</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.link {
  transition: color 0.2s ease-out;
}

.link-featured {
  transition: color 0.2s ease-out;
  @apply pb-1 md:pb-0 text-white;
}

.link:hover,
.link:focus-visible,
.link-featured:hover,
.link-featured:focus-visible {
  @apply text-defaultRed;
}

.link:focus:not(:focus-visible) {
  outline: none;
}

footer {
  @apply bg-black;
}
</style>
