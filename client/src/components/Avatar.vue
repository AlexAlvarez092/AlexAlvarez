<template>
  <div>
    <img src="@/assets/avatar.png" alt="This is my avatar">
  </div>
</template>

<script>
export default {
  name: 'Avatar',
};
</script>

<style>
img {
  display: block;
  margin: auto;
  border-radius: 50%;
  width: 400px;
  height: auto;
  box-shadow: 0 6px 30px 30px var(--onahau);
  animation: float 6s ease-in-out infinite;
}
@media (max-width: 800px) {
  img{
    width: 320px;
  }
}
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-30px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
