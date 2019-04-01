<template>
  <div class="inner">
    <div class="ing">
      <p> {{ ingPP }} </p>
      <button>더보기</button>
    </div>
    <div class="complete">
      <p> {{ comPP }} </p>
      <button>더보기</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ingPP: '여긴 진행중인 프로젝트',
      comPP: '여긴 완료한 프로젝트'
    }
  }
}
</script>

<style>
  .inner {
    width: 1440px;
    margin: 0 auto;
    display: flex;
  }
  .ing {
    width: 50%;
    background: #000;
    color:#fff;
    text-align: center;
    min-height: 300px;
    font-size: 50px;
  }
  .complete {
    width: 50%;
    background: #f00;
    text-align: center;
    font-size: 50px;
  }
</style>
