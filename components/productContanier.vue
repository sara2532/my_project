<template>
  <div class="product-container" v-for="(p, i) in product" :key="i">
    <div class="product-image">
      <img :src="p.image" alt="product image" />
    </div>
    <div class="product-info">
      <h2 class="product-name">{{ p.name }}</h2>
      <p class="product-description" v-if="!p.showFullDescription">
        {{ p.descriptionShort }}
      </p>
      <p class="product-description" v-else>{{ p.descriptionFull }}</p>
      <button class="show-more-button" @click="showMoreDescription(i)">
        {{ showMoreText(i) }}
      </button>
    </div>
  </div>
</template>

<script>
import image5 from "@/assets/cccc.jpg";
export default {
  name: "ProductComponent",
  data() {
    return {
      product: [
        {
          name: "Solar Panels:",
          descriptionShort:
            "Solar panels, also known as photovoltaic modules, are devices that convert sunlight into electricity through the photovoltaic effect. These panels typically consist of multiple solar cells made of semiconductor materials, such as silicon, that absorb sunlight and generate direct current (DC) electricity. This stored energy can then be used to power homes, businesses, or other electrical devices when solar energy production is low.",
          descriptionFull:
            "Solar panels, also known as photovoltaic modules, are devices that convert sunlight into electricity through the photovoltaic effect. These panels typically consist of multiple solar cells made of semiconductor materials, such as silicon, that absorb sunlight and generate direct current (DC) electricity. This stored energy can then be used to power homes, businesses, or other electrical devices when solar energy production is low. Different types of batteries can be used in conjunction with solar panels, including lead-acid, lithium-ion, and flow batteries, each offering different levels of efficiency, capacity, and lifespan. Properly sizing and maintaining batteries is essential to ensure reliable energy storage and maximize the benefits of solar power systems",
          image: image5,
          showFullDescription: false,
        },
      ],
    };
  },

  computed: {
    showMoreText() {
      return (index) =>
        this.product[index].showFullDescription ? "Show Less" : "Show More";
    },
  },

  methods: {
    showMoreDescription(index) {
      this.product[index].showFullDescription =
        !this.product[index].showFullDescription;
    },
  },
};
</script>

<style scoped>
.product-container {
  display: flex;
  width: 100%;
}

.product-image {
  flex-basis: 50%;
}

.product-info {
  flex-basis: 50%;
  padding: 0 20px;
  background: #333;
}

.show-more-button {
  margin-top: 20px;
}
</style>
