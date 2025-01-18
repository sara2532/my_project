<template>
  <div class="cont">
    <div class="product-container" v-for="(p, i) in product" :key="i">
      <div class="product-image">
        <img :src="p.image" alt="product image" />
      </div>
      <div class="product-info">
        <div class="thefirst">The First Component of Solar System</div>
        <h2 class="product-name">{{ p.name }}</h2>
        <p class="product-description" v-if="!p.showFullDescription">
          {{ p.descriptionShort }}
        </p>
        <p class="product-description" v-else>{{ p.descriptionFull }}</p>
        <button class="show-more-butto" @click="showMoreDescription(i)">
          {{ showMoreText(i) }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import image5 from "@/assets/theComponents/140W-Solar-Panel.jpg";
export default {
  name: "ProductComponent",
  data() {
    return {
      product: [
        {
          name: "Solar Panels:",
          descriptionShort:
            " Solar panels, also known as photovoltaic modules, are devices that convert sunlight into electricity through the photovoltaic effect. Solar panels, also known as photovoltaic modules,",
          descriptionFull:
            "Solar panels, also known as photovoltaic modules, are devices that convert sunlight into electricity through the photovoltaic effect. These panels typically consist of multiple solar cells made of semiconductor materials, such as silicon, that absorb sunlight and generate direct current (DC) electricity. This stored energy can then be used to power homes, businesses, or other electrical devices when solar energy production is low. ",
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
@media screen and (min-width: 681px) and (max-width: 7800px) {
  .thefirst {
    color: #bdc3be;
  }
  .cont {
    display: block;
    position: relative;
    background-color: #3e849d;
    height: 1000px;
    top: 1700px;
    border-radius: 30px;
    font-family: Roobert, sans-serif;
    width: 30%;
    margin: 2%;
  }
  .product-container {
    display: inline-block;
    width: 100%;
    border-radius: 0px;
  }

  .product-image {
    width: 100%;
    border-radius: 0px;
    background-color: #fff;
    height: 50%;
    top: 0px;
    position: relative;
  }
  .product-image img {
    width: 100%;
    height: 100%;
  }
  .product-info {
    width: 100%;
    color: #fefefe;
    background-color: #3e849d;
    font-size: 30px;
    border-radius: 30px;
    height: auto;
    top: 0;
    position: relative;
    left: 0;
    padding-bottom: 20px;
    padding-left: 40px;
    margin-left: 0px;
  }

  .show-more-button {
    margin-top: 20px;
    border-radius: 10px;
    align-items: center;
    appearance: none;
    background-image: radial-gradient(
      100% 100% at 100% 0,
      #3ed0f8 0,
      #4d8386 100%
    );
    border: 0;
    border-radius: 6px;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono", monospace;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 24px;
  }
  .show-more-butto {
    margin-top: 20px;
    border-radius: 10px;
    align-items: center;
    border: 0;
    border-radius: 50px;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono", monospace;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    font-size: 24px;
    background-color: rgba(198, 197, 197, 0.4);
  }
  .show-more-button:focus {
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }

  .show-more-button:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  .show-more-button:active {
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
  }
  .product-name {
    text-align: left;
    color: rgb(254, 255, 254);
  }
}
@media screen and (min-width: 540px) and (max-width: 680px) {
  .thefirst {
    color: #bdc3be;
  }
  .cont {
    display: block;
    position: relative;
    background-color: #3e849d;
    height: auto;
    top: 10px;
    border-radius: 30px;
    font-family: Roobert, sans-serif;
    width: 100%;
  }
  .product-container {
    display: inline-block;
    width: 100%;
    border-radius: 0px;
  }

  .product-image {
    width: 100%;
    border-radius: 0px;
    background-color: #fff;
    height: 50%;
    top: 0px;
    position: relative;
  }
  .product-image img {
    width: 100%;
    height: 100%;
  }
  .product-info {
    width: 100%;
    color: #fefefe;
    background-color: #3e849d;
    font-size: 30px;
    border-radius: 30px;
    height: auto;
    top: 0;
    position: relative;
    left: 0;
    padding-bottom: 20px;
    padding-left: 40px;
    margin-left: 0px;
  }

  .show-more-button {
    margin-top: 20px;
    border-radius: 10px;
    align-items: center;
    appearance: none;
    background-image: radial-gradient(
      100% 100% at 100% 0,
      #3ed0f8 0,
      #4d8386 100%
    );
    border: 0;
    border-radius: 6px;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono", monospace;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 24px;
  }
  .show-more-butto {
    margin-top: 20px;
    border-radius: 10px;
    align-items: center;
    border: 0;
    border-radius: 50px;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono", monospace;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    font-size: 24px;
    background-color: rgba(198, 197, 197, 0.4);
  }
  .show-more-button:focus {
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }

  .show-more-button:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  .show-more-button:active {
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
  }
  .product-name {
    text-align: left;
    color: rgb(254, 255, 254);
  }
}
</style>
