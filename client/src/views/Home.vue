<template>
  <div>
    <Header />
    <Avatar />
    <Navigation />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Avatar from '@/components/Avatar.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Avatar,
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
