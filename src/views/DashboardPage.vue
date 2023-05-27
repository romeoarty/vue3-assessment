<template>
  <div class="wc-dashboard">
    <h1 class="wc-header">We make creative media that <span>adds value</span></h1>
    <div class="wc-cards">
      <base-card>
        <template #left>
          <div class="base-card-image-top">
            <img src="/src/assets/images/image1.svg" />
          </div>
          <div class="base-card-image-bottom">
            <img src="/src/assets/images/image2.svg" />
          </div>
        </template>
        <template #right>
          <div class="base-card-content">
            <p class="content-heading">Photography</p>
            <ul class="content-list">
              <li>Drone Photography</li>
              <li>Interiors</li>
              <li>Exteriors / Architectural</li>
            </ul>
            <p class="content-body">
              Every photograph we produce finds the beauty in your property while serving as a
              profitable asset.
            </p>
          </div>
        </template>
      </base-card>

      <base-card>
        <template #left>
          <img class="base-card-image" src="/src/assets/images/image3.svg" />
        </template>
        <template #right>
          <div class="base-card-content">
            <p class="content-heading">Virtual Staging</p>
            <p class="content-body">Our staging will help you sell the potential of your space.</p>
            <p class="content-body">
              We can work off of our own photography or photos you provide.
            </p>
          </div>
        </template>
      </base-card>

      <base-card>
        <template #left>
          <img class="base-card-image" src="/src/assets/images/image4.png" />
        </template>
        <template #right>
          <div class="base-card-content">
            <p class="content-heading">Renderings</p>
            <ul class="content-list">
              <li>Interiors</li>
              <li>Exteriors</li>
            </ul>
            <p class="content-body">
              Renderings are the gold standard in pre-construction marketing.
            </p>
          </div>
        </template>
      </base-card>

      <base-card>
        <template #left>
          <img class="base-card-image" src="/src/assets/images/image5.svg" />
        </template>
        <template #right>
          <div class="base-card-content">
            <p class="content-heading">Interactive Tours</p>
            <ul class="content-list">
              <li>Matterport</li>
              <li>Video Walkthroughs</li>
            </ul>
            <p class="content-body">
              Give your audience the ability to explore your property without requiring in-person
              travel.
            </p>
          </div>
        </template>
      </base-card>

      <base-card>
        <template #left>
          <img class="base-card-image" src="/src/assets/images/image6.svg" />
        </template>
        <template #right>
          <div class="base-card-content">
            <p class="content-heading">Floor Plans</p>
            <ul class="content-list">
              <li>On-site Measure</li>
              <li>2D Floor Plans</li>
              <li>3D Floor Plans</li>
            </ul>
            <p class="content-body">
              We produce laser-precise floor plans faster than any other service.
            </p>
          </div>
        </template>
      </base-card>

      <base-card>
        <template #left>
          <img class="base-card-image" src="/src/assets/images/image7.svg" />
        </template>
        <template #right>
          <div class="base-card-content">
            <p class="content-heading">Video</p>
            <ul class="content-list">
              <li>Drone Cinematography</li>
              <li>Interiors</li>
              <li>Exteriors / Architectural</li>
            </ul>
            <p class="content-body">
              Video content has higher engagement and will help your property stand out online.
            </p>
          </div>
        </template>
      </base-card>
    </div>
    <base-button label="GET STARTED" priority="primary" size="xl" />
  </div>
</template>

<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'
import BaseButton from '@/components/BaseButton.vue'
</script>

<style scoped lang="scss">
.wc-dashboard {
  @apply flex items-center flex-col m-[108px];
  .wc-header {
    @apply font-bold text-[56px] max-w-[730px] text-center;
    span {
      @apply text-[#506BCA];
    }
  }
  .wc-cards {
    @apply flex flex-wrap justify-center gap-7 my-20;
    .base-card-image {
      @apply w-full h-full;
      &-top {
        @apply w-full h-1/2;
        img {
          @apply rounded-tl-lg;
        }
      }
      &-bottom {
        @apply w-full h-1/2 mt-2;
        img {
          @apply rounded-bl-lg;
        }
      }
    }
    .base-card-content {
      @apply mt-10 mx-8 text-[#353844];
      .content {
        &-heading {
          @apply font-bold text-2xl;
        }
        &-list {
          @apply mt-2 ml-2 text-base font-bold;
          li::marker {
            color: #d2ad81;
            content: '• ';
            font-size: 1.2em;
          }
        }
        &-body {
          @apply mt-2 text-base font-medium;
        }
      }
    }
  }
}
</style>
