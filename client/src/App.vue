<template>
<div class="app">
  <router-view/>
</div>
</template>

<style lang="scss">
:root {
    --crayolas-outer-space: #293E40;
    --paradiso: #4F787C;
    --pattens-blue: #c3ced2;
    --onahau: #C7D9DE;
    --snow: #FBFBFB;
    --neon-orange: #f97721;
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
