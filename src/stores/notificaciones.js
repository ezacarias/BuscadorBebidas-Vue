import { ref, watch, watchEffect } from "vue";
import { defineStore } from "pinia";

export const useNotificacionStore = defineStore('notificacion', ()=>{
    return texto = ref('')
    const error  = ref(false)
    const mostrar = ref(false)

    // function $reset(){
    //     texto.value = ''
    //     error.value = false
    //     mostrar.value = false
    // }

    watchEffect(()=>{
        if(mostrar){
            setTimeout(()=>{
             texto.value   = ''
             error.value   = false
             mostrar.value = false
            },3000);
        }
    })

    return{
        texto,
        error,
        mostrar
    }
})