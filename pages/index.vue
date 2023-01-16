<script setup>

definePageMeta({
  pageTransition: {
    name: 'slideup'
  }
})

</script>

<template>
  <section class="hero bg-white">
    <div>
      <div class="title-container">
        <transition
          name="content"
          appear
        >
          <h1 class="title">
            Marketing demo
          </h1>
        </transition>
      </div>
      <transition
        name="content"
        appear
      >
        <div class="btn-animation flex justify-center pb-4">
          <a
            class="btn btn-skeleton-black btn-hero mr-3"
            href="https://google.es"
          ><span>Explore more</span></a>
          <a
            class="btn btn-tertiary btn-hero"
            href="/build"
          >Start</a>
        </div>
      </transition>
    </div>
  </section>
</template>

<style scoped>
.title,
.word1 {
  @apply relative;
}

.word {
  @apply relative block;
}

.word1 {
  color: #0ea5e9;
}
.word2 {
  @apply text-yellow-600;
}

.word3 {
  @apply text-purple-600;
}

.word4 {
  color: #ff7759;
}

.word5 {
  color: #06bc9c;
}

.word6 {
  color: #febaf0;
}

.word2,
.word3,
.word4,
.word5,
.word6 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @apply absolute w-full;
}

.word .letter {
  transform-origin: bottom left;
  @apply inline-block leading-none;
}

.title-container {
  @apply mb-7 md:mb-10 flex flex-col items-center;
}
.title {
  font-size: min(9vw, 90px);
  line-height: 1.1;
  @apply text-center pb-0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.title-rotator {
  font-size: min(10vw, 100px);
  @apply block;
}

.hero {
  @apply pt-12 pb-8 md:py-20;
}
</style>



