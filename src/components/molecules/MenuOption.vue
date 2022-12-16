<template>
  <div class="menu-option">
    <img src="@/assets/images/button-arrow.svg" class="arrow" />

    <span class="text">
      <slot />
    </span>
  </div>
</template>

<style scoped lang="scss">
.menu-option {
  border: 2px solid var(--primary-color);
  border-radius: 1rem;
  width: 312px;
  height: 33px;
  position: relative;
  display: grid;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  .arrow {
    position: absolute;
    height: 90%;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    z-index: 1;
    opacity: 0.8;
  }
  .text {
    color: #fff;
    z-index: 9999;
    font-weight: bold;
  }
}
</style>
