<template>
  <div class="join-step__wrap">
        <ol>
            <li v-for="(step, i) in stepTitle"
                :key="i"
                :class="[{ing: activeStep === i}, {end: activeStep > i}]"
            >
                <div class="join-step__inner">
                    <span>{{ step }}</span>
                </div>
            </li>                 
        </ol>
    </div>
</template>
<script>
export default {
    props:{
        step: Number
    },
    data() {
        return{
            stepTitle: ['약관동의', '기업정보 입력', '회원정보 입력', '가입완료'],
            activeStep: this.step - 1
        }
    }
}
</script>

<style>

</style>