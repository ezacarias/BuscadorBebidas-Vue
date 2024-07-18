<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router';
import { useBebidasStore } from '../stores/bebidas'; 

const route = useRoute()
const store = useBebidasStore()
console.log(store.categorias)

const paginaInicio = computed(()=> route.name === 'inicio')
const handleSubmit = ()=>{
 //TODO: Validar
 store.obtenerRecetas()
}

</script>

<template>
    <header
    class="bg-slate-800"
    :class="{header : paginaInicio }"
    >
        <div class="mx-auto container px-5 py-16">
            <div class="flex justify-between items-center">
              <div>
                <RouterLink 
                :to="{name:'inicio'}"
                >
                  <img class="w-32" src="../../public/img/logo.svg" alt="Logotipo" /> 
                </RouterLink>
              </div>
              <nav class="flex gap-4">
                    <RouterLink
                    :to="{name:'inicio'}"
                    class="text-white uppercase font-bold"
                    active-class="text-orange-500"
                    >
                        Inicio
                    </RouterLink>

                    <RouterLink
                    :to="{name:'favoritos'}"
                    class="text-white uppercase font-bold"
                    active-class="text-orange-500"
                    >
                        Favoritos
                    </RouterLink>

              </nav>
            </div>
            <form 
            v-if="paginaInicio"
            class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg  shadow space-y-6" 
            @submit.prevent="handleSubmit"
            >
                  <div class="space-y-4">
                    <label class="block text-white text-uppercase font-extrabold text-lg" for="ingrediente">
                        Nombre ingredientes:
                    </label>
                    <input 
                    id="ingrediente"
                    type="text"
                    class="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Nombre o ingrediente"
                    v-model="store.busqueda.nombre"
                    >
                  </div>

                  <div class="space-y-4">
                    <label class="block text-white text-uppercase font-extrabold text-lg" for="categoria">
                        Categoría:
                    </label>
                    <select name="categoria" id="categoria"
                    v-model="store.busqueda.categoria"
                    >
                    
                        <option value="">--seleccione--</option>
                        <option
                         v-for="categoria in store.categorias"
                         :key="categoria.strCategory"
                         :value="categoria.strCategory"
                        >
                        {{ categoria.strCategory }}
                        </option>
                    </select>
                  </div>

                  <input 
                  class="bg-orange-400 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
                  type="submit" value="Buscar Recetas">
                </form>
        </div>
    </header>
</template>

<style>
  .header{
     background-image:url('../../public/img/bg.jpg');
    background-size: cover;
    background-position: center;
  }
</style>