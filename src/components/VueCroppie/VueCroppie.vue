<template>
    <img :id="id"
         :name="name"
         :class="addClass"
         ref="input">
</template>

<script>
    import 'croppie/croppie.min'
    import 'croppie/croppie.css'

    export default {
        name: "VueCroppie",
        props: {
            id: { 'default': false },
            name: { 'default': false },
            src: { 'default': '' },

            addClass: { 'default': '' },

        },
        mounted: function () {

            // Init
            var _this = this;
            this.cr = $(this.$el).croppie({
                viewport: {width: 200, height: 200},
                boundary: {width: 200, height: 200},
                update: function () {
                    _this.cr.croppie('result','base64').then(function(data) {
                        _this.$emit('input:data',data);
                    });

                }
            });

        },
        data: function () {
            return {
                cr: null
            }
        },
        watch: {
            src: function (v) {
                console.log('Rebinding Croppie');
                this.cr.croppie('bind', {
                    url: v
                });
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>