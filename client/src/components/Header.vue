<template>
<header>
  <h1>Alex Alvarez</h1>
  <h2>ServiceNow Developer</h2>
</header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
header {
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 48px;
  h1 {
    margin: 0;
    padding: 0;
    font-size: 96px;
    line-height: 96px;
    font-weight: 600;
  }
  h2 {
    margin: 0;
    padding: 0;
    font-size: 52px;
    line-height: 52px;
    font-weight: 300;
    color: var(--paradiso);
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 64px;
      line-height: 64px;
    }
    h2 {
      font-size: 35px;
      line-height: 35px;
    }
  }
}
</style>
