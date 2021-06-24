<template>
  <footer>
    <router-link class="btn" :to="{ name: 'Resume' }">
      <i class="far fa-file-user"></i>
      <span>Resume</span>
    </router-link>
    <a href="https://github.com/AlexAlvarez092" class="btn" target="_blank">
      <i class="fab fa-github"></i>
      <span>Github</span>
    </a>
    <a href="https://www.linkedin.com/in/alejandro-alvarez-garcia-365593124/" class="btn" target="_blank">
      <i class="fab fa-linkedin"></i>
      <span>LinkedIn</span>
    </a>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
footer {
  display: flex;
  flex-direction: row;
  margin-top: 64px;
  margin-bottom: 32px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
  .btn {
  text-decoration: none;
  background-color: var(--crayolas-outer-space);
  color: var(--snow);
  border-radius: 4px;
  font-weight: bold;
  margin-left: 8px;
  margin-right: 8px;
  padding: 20px;
  font-size: 24px;
  line-height: 24px;
  font-weight: 50;
  &:hover {
    background-color: var(--green-sheen);
    color: var(--crayolas-outer-space);
  }
  span {
    margin-left: 8px;
  }
  @media (max-width: 800px) {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
}
</style>
