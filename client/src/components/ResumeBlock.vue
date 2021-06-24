<template>
<div class="container">
  <div class="content">
    <h3>
      <span v-if="elem.key % 2 === 0" >{{ elem.title }}</span>
      <i v-if="elem.type === 'certification'" class="fas fa-certificate"></i>
      <i v-else-if="elem.type === 'experience'" class="fas fa-briefcase"></i>
      <i v-else-if="elem.type === 'education'" class="fas fa-user-graduate"></i>
      <span v-if="elem.key % 2 !== 0" >{{ elem.title }}</span>
    </h3>
    <h4>
      {{ elem.issuer }} -- {{ elem.dates }}
    </h4>
    <div v-if="elem.description" class="description">{{ elem.description }}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ResumeBlock',
  props: ['elem'],
};
</script>

<style lang="scss" scoped>
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    border: 4px solid var(--green-sheen);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  &:nth-child(even) {
    left: 0;
    text-align: right;
    &::before {
      content: " ";
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      right: 30px;
      border: medium solid var(--green-sheen);
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent var(--green-sheen);
    }
  }
  &:nth-child(odd) {
    left: 50%;
    text-align: left;
    &::before {
      content: " ";
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      left: 30px;
      border: medium solid var(--green-sheen);
      border-width: 10px 10px 10px 0;
      border-color: transparent var(--green-sheen) transparent transparent;
    }
    &::after {
      left: -16px;
    }
  }
  .content {
    padding: 8px 12px;
    background-color: var(--snow);
    position: relative;
    border-radius: 6px;
    border: 4px solid var(--green-sheen);
    h3 {
      padding: 6px;
      margin: 0;
      font-size: 22px;
      line-height: 22px;
      span {
        margin: 0 6px 0 6px;
      }
    }
    h4 {
      font-size: 19px;
      line-height: 19px;
      padding: 6px;
      margin: 0;
      color: var(--paradiso);
    }
    .description {
      text-align: justify;
    }
  }
}
@media (max-width: 800px) {
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    &:nth-child(even),
    &:nth-child(odd) {
      &::before {
        left: 60px;
        border: medium solid var(--snow);
        border-width: 10px 10px 10px 0;
        border-color: transparent var(--green-sheen) transparent transparent;
      }
      &::after {
        left: 16px;
      }
      &:nth-child(odd) {
        left: 0%;
      }
      &:nth-child(even) {
        text-align: left;
      }
    }
  }
}
</style>
