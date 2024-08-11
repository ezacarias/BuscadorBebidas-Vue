import { ref, watch, onMounted,computed } from 'vue'
import { defineStore } from 'pinia'
import { useBebidasStore } from './bebidas'
import { useModalStore } from '.modal'
import { useNotificacionStore } from './notificaciones'

export const useFavoritosStore = defineStore('favoritos',()=>{
    
    const bebidas   = useBebidasStore()
    const modal     = useModalStore()
    const notificaciones = useNotificacionStore()
    const favoritos = ref([])

    onMounted(()=>{
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })
    watch(favoritos, () =>{
        sincronizarLocalStorage()
    },{
        deep:true
    })

    function sincronizarLocalStorage (){
        localStorage.setItem('favoritos',JSON.stringify(favoritos.value))
    }

    function existeFavorito(id){
       const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
       return favoritosLocalStorage.some(favorito => favorito.idDrink === id)
    } 

    function eliminarFavorito(){
        favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidas.receta.idDrink)
    }

    function agregarFavorito(){
        favoritos.value.push(bebidas.receta)
        notificaciones.mostrar  = true
        notificaciones.texto    = 'se agregó a favoritos'
    }

    function handleClickFavorito(e){
        if(existeFavorito()){
            eliminarFavorito();
            //e.target.textContent = 'Agregar a favoritos'
        }else{
           agregarFavorito()
          //   e.target.textContent = 'Eliminar de favoritos'
        }
        modal.modal = false

    }
    const noFavoritos = computed(()=> favoritos.value.length === 0)
    return {
        favoritos,
        handleClickFavorito,
        noFavoritos
    }

})