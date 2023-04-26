<template>
    <transition
        name="fade"
    >
        <div 
        class="modal__wrap"
        >
            <div class="overlay-mask" @click="$emit('close-modal')"></div>
            <div class="modal__container">
                <slot></slot>
                <ButtonCmp
                    type="green modal-close"
                    iconname="icon-add"
                    @click="$emit('close-modal')"
                > 
                    닫기
                </ButtonCmp>  
            </div>
        </div>  
    </transition>
</template>

<script>
import ButtonCmp from '@/components/common/ButtonCmp.vue'
export default {
    components: {
        ButtonCmp
    }

}
</script>

<style>

</style>
