<script setup>

</script>

<template>
    <header>
        <div class="mx-auto container px-5 py-16">
            <div>
                <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg  shadow space-y-6" action="">
                  <div class="space-y-4">
                    <label class="block text-white text-uppercase font-extrabold text-lg" for="ingrediente">
                        Nombre ingredientes:
                    </label>
                    <input 
                    id="ingrediente"
                    type="text"
                    class="p-3 w-full rounded-lg focus:outline-none"
                    placeholder="Nombre o ingrediente"
                    >
                  </div>

                  <div class="space-y-4">
                    <label class="block text-white text-uppercase font-extrabold text-lg" for="categoria">
                        Categoría:
                    </label>
                    <select name="categoria" id="categoria">
                        <option value="">--seleccione--</option>
                    </select>
                  </div>

                  <input 
                  class="bg-orange-400 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
                  type="submit" value="Buscar Recetas">
                </form>
            </div>
        </div>
    </header>
</template>
