<template>
<div class="app">
  <router-view/>
  <!-- <div id="large-header" class="large-header"></div> -->
</div>
</template>

<style lang="scss">
:root {
    --crayolas-outer-space: #293E40;
    --paradiso: #4F787C;
    --green-sheen: #80B6A1;
    --pattens-blue: #D8E4E8;
    --onahau: #C7D9DE;
    --snow: #FBFBFB;
}
* {
  box-sizing: border-box;
}
html {
    width: 100%;
    height: 100%;
    background-color: var(--pattens-blue);
    color: var(--crayolas-outer-space);
    font-family: 'Khula', sans-serif;
    text-align: center;
}
</style>
