<template>
  <div class="page-title__wrap">
    <h3>
      {{ titleh3 }}
    </h3>
    <p v-if="noticeinfo !== null">
        {{ noticeinfo }}
    </p>
</div>
</template>

<script>
export default {
    props: {
        titleh3: String,
        noticeinfo: {
          type: String,
          default: null
        }
    }
}
</script>

<style lang="scss">
.page-title__wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #000000;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #000000;
    background-image: url('/src/assets/images/icon/icon_check_required.png');
    background-repeat: no-repeat;
    background-position: left center;
    padding-left:12px;
  }
}
</style>