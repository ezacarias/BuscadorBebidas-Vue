import { ref, reactive, onMounted } from 'vue'
import { defineStore} from 'pinia'
import APIService from '../services/APIService'
import { useModalStore } from './modal'

export const useBebidasStore = defineStore('bebidas', ()=>{
    
    const categorias = ref([])

    const modal      = useModalStore()
    const busqueda   = reactive({
        nombre:'',
        categoria: ''
    })
    
    const recetas = ref([])
    const receta = ref({})
    
    onMounted(async()=>{
        const { data: {drinks} }  = await APIService.obtenerCategorias()
        categorias.value = drinks
    })

    async function obtenerRecetas(){
       const {data: {drinks} } = await APIService.buscarRecetas(busqueda)
       recetas.value = drinks
    }

    async function seleccionarBebida(id){
        const { data : {drinks} }  = await APIService.buscarReceta(id)
        receta.value = drinks[0]
        modal.handleClickModal()
    }

    return { 
        categorias,
        busqueda,
        recetas,
        receta,
        obtenerRecetas,
        seleccionarBebida
    }
})