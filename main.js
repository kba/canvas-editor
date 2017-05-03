import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = true
Vue.config.devtools = true


new Vue({
    el: '#app',
    data: {
        thumbXrxStyle:{
            strokeColor: 'green',
            fillOpacity: 0.55,
        }
    },
    template: `<App
        ref="zoneEditor"
        :thumb-xrx-style="thumbXrxStyle"
    thumb-background='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Ghostscript_Tiger.svg/100px-Ghostscript_Tiger.svg.png'
    initial-image='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Ghostscript_Tiger.svg/1024px-Ghostscript_Tiger.svg.png'
    @zoom-changed="onZoomChange"
    />`,
    methods: {
        onZoomChange(now, before) {
        },
        // onZoomChange(now, before) {
        //     const size =
        //           (before >= 0.5 && now < 0.5) ? 200
        //         : (before >= 1 && now < 1) ? 500
        //         : (before < 1 && now > 1) ? 1000
        //         : (before < 2 && now > 2) ? 2000
        //         : -1
        //     console.log({before, now, size})
        //     if (size > 0)
        //         this.$refs.zoneEditor.loadImage(`https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Ghostscript_Tiger.svg/${size}px-Ghostscript_Tiger.svg.png`)
        // }
    },
    components: { App }
})
