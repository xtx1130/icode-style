<template>
    <div class="operation-main">
        <div class="operation-timecard">
            <p class="operation-title">
                <span v-if="last_time">ceshi</span>
                <span v-else>test</span>
            </p>
            <p class="operation-over-tip" v-show="last_time <= 0">
                <template v-if="!review">
                    ending
                </template>
                <template v-else>
                    ending else
                </template>
            </p>
            <p class="operation-last" v-show="last_time">last</p>
            <p class="operation-time"  v-show="last_time">
                <span class="operation-time-num">{{day}}</span><span class="operation-time-ex" style="margin-right:9px">天</span>
                <span class="operation-time-num">{{hour}}</span><span class="operation-time-ex" style="margin-right:-4px;left: -4px;">小时</span>
                <span class="operation-time-num">{{min}}</span><span class="operation-time-ex">分</span>
            </p>
        </div>
    </div>
</template>

<script>
import BawuConfirm from '@/components/BawuConfirm/BawuConfirm.vue'

export default {
    name: 'TryOperation',
    components: {
        BawuConfirm
    },
    props: {
        lastTime: Number,
        review: Number
    },
    data () {
        return {
            last_time: Number
        }
    },
    methods: {
        handleTipShow: function() {
            this.$refs.confirmTip.show()
        }
    },
    computed: {
        day: function() {return  String(Math.floor(this.last_time/(60*60*24))).padStart(2,'0')},
        hour: function() {return  String(Math.floor(this.last_time%(60*60*24)/(60*60))).padStart(2,'0')},
        min: function() {return  String(Math.ceil(this.last_time%(60*60*24)%(60*60)/60)).padStart(2,'0')}
    },
    mounted() {
        this.last_time = this.lastTime
    },
    watch: {
        lastTime: function(n, o){
            this.last_time = n
        }
    }
}
</script>

<style lang="stylus">
.operation-main
    position relative
    .operation-timecard
        background #FFF
        box-shadow 0 2px 6px 0 rgba(0,0,0,0.08)
        border-radius 8px
        width 90%
        height 138px
        margin-top 17px
        margin-left 5%
        position absolute
        .operation-title
            font-size 22px
            color #000000
            margin-top 30px
            line-height 22px
            vertical-align top
            font-weight bold
            img
                width 20px
                height 20px
                vertical-align top
                position relative
                top -1px
                left -2px
</style>