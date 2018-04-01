<template>
    <transition name="modal">
        <div class="modal-mask" @click.stop='$emit("close")'>
            <div class="modal-wrapper">
                <a href="#" class="top-right-x"                    
                    @click.prevent.stop='$emit("close")'
                >
                    <span class="close rounded thick" :style='xColor'></span>
                </a>
                <div class="modal-container" :style='getStyle' @click.prevent.stop>
                    <div class="modal-body">
                        <slot name='content'></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            color: {
                type: String,
                required: false,
                default: 'white'
            }
        },

        computed: {
            getStyle() {
                let style = {
                    backgroundColor: 'rgb(255, 255, 255)'
                }

                if (this.color == 'black') {
                    style.backgroundColor = 'rgb(0, 0, 0)'
                }

                return style
            },

            xColor() {            
                return {
                    'color': this.color
                }
            }
        },

        methods: {
            closeOnEscKeyPressed(event) {
                if(event.keyCode === 27) {
                    this.$emit('close');
                }
            }
        },
        created() {
            document.addEventListener('keyup', this.closeOnEscKeyPressed)
        },
        beforeDestroy() {
            document.removeEventListener('keyup', this.closeOnEscKeyPressed);
        }
    }
</script>

<style scoped>
    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */
     .modal-container {
       border-radius: 15px;
     }
     .modal-body {
       padding: 2rem;
     }
      .modal-mask {
        position: fixed;
        z-index: 99;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
      }
     .modal-wrapper {
         position: relative;
     }
     .top-right-x {
         position: absolute;
         top: 10px;
         right: 10px;
         font-weight: bold;
         z-index: 1;
     }
    .modal-enter {
        opacity: 0;
    }
    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

</style>