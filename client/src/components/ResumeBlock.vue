<template>
<div class='container'>
  <div class='content'>
    <h3>
      <span v-if='keyResult'>{{ elem.title }}&nbsp;</span>
      <i :class='classResult'></i>
      <span v-if='!keyResult'>&nbsp;{{ elem.title }}</span>
    </h3>
    <h4>
      {{ elem.issuer }}&nbsp;&mdash;&nbsp;{{ elem.dates }}
    </h4>
    <!-- <div v-if='elem.description' class='description'>{{ elem.description }}</div> -->
  </div>
</div>
</template>

<script>
export default {
  name: 'ResumeBlock',
  props: {
    elem: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      classVariant: [
        {
          type: 'certification',
          class: 'fas fa-certificate',
        },
        {
          type: 'experience',
          class: 'fas fa-briefcase',
        },
        {
          type: 'education',
          class: 'fas fa-user-graduate',
        },
      ],
    };
  },
  computed: {
    keyResult() {
      if (!this.elem.id) return false;
      if (window.innerWidth <= 800) return false;
      return parseInt(this.elem.id, 10) % 2 === 0;
    },
    classResult() {
      return this.classVariant.find((item) => item.type === this.elem.type).class;
    },
  },
};
</script>

<style lang='scss' scoped>
/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 700px;
  /* The circles on the timeline */
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -19px;
    border: 6px solid var(--neon-orange);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  /* Place the container to the left */
  &:nth-child(even) {
    left: -350px;
    text-align: right;
    /* Add arrows to the left container (pointing right) */
    &::before {
      content: ' ';
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      right: 30px;
      border: medium solid var(--snow);
      border-width: 10px 0 10px 10px;
      border-color: transparent transparent transparent var(--snow);  ;
    }
  }
  /* Place the container to the right */
  &:nth-child(odd) {
    left: 50%;
    text-align: left;
    /* Add arrows to the right container (pointing left) */
    &::before {
      content: ' ';
      height: 0;
      position: absolute;
      top: 22px;
      width: 0;
      z-index: 1;
      left: 30px;
      border: medium solid var(--snow);
      border-width: 10px 10px 10px 0;
      border-color: transparent var(--snow) transparent transparent;
    }
    /* Fix the circle for containers on the right side */
    &::after {
      left: -19px;
    }
  }
  /* The actual content */
  .content {
    padding: 8px 12px;
    background-color: var(--snow);
    position: relative;
    border-radius: 6px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
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
/* Media queries - Responsive timeline on screens less than 800px wide */
@media (max-width: 800px) {
  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    /* Make sure that all arrows are pointing leftwards */
    &:nth-child(even),
    &:nth-child(odd) {
      &::before {
        left: 60px;
        border: medium solid var(--snow);
        border-width: 10px 10px 10px 0;
        border-color: transparent var(--snow) transparent transparent;
      }
      /* Make sure all circles are at the same spot */
      &::after {
        left: 14px;
      }
      /* Make all right containers behave like the left ones */
      &:nth-child(odd) {
        left: 0;
      }
      &:nth-child(even) {
        left: 0;
        text-align: left;
      }
    }
    .content {
      h3 {
        font-size: 19px;
        line-height: 19px;
        padding: 4px;
        margin: 0;
      }
      h4 {
        font-size: 16px;
        line-height: 16px;
        padding: 4px;
        margin: 0;
      }
    }
  }
}
</style>
