<script setup>
import Configutateur from '../components/ConfigurateurView.vue';
</script>

<template>
    <div class="relative w-full h-screen">
        <!-- Image -->
        <img src="@/assets/img/eiffel_personnaliser.svg" alt="Image d'accueil" class="w-full h-full object-cover">

        <!-- Configurator -->
        <div class="absolute top-0 left-0 w-8/12 flex items-center  p-4">
            <div class="bg-opacity-20 bg-white backdrop-blur-md p-8 rounded-md shadow-xl">
                <h1 class="text-white text-lg mb-6 font-bold">PERSONNALISATION</h1>
                <div class="mb-4">
        <h2 class="text-white font-bold">Couleur cadran</h2>
        <div class="flex p-4 bg-opacity-10 bg-white px-4 py-2 rounded-full backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-40 transition duration-300 text-white ease-in-out ">
            <div class="circle bg-yellow-500 rounded-full"></div>
            <div class="circle bg-red-500 rounded-full"></div>
            <div class="circle bg-green-500 rounded-full"></div>
            <div class="circle bg-blue-500 rounded-full"></div>
            <div class="circle bg-black-500 rounded-full"></div>
        </div>
        <div class="flex space-x-2">
        </div>
      </div>

      <div class="mb-4">
        <h2 class="text-white font-bold">Couleur branches</h2>
        <div class="flex p-4 bg-opacity-10 bg-white px-4 py-2 rounded-full backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-40 transition duration-300 text-white ease-in-out">
            <div class="circle bg-yellow-500 rounded-full space-between"></div>
            <div class="circle bg-red-500 rounded-full"></div>
            <div class="circle bg-green-500 rounded-full"></div>
            <div class="circle bg-blue-500 rounded-full"></div>
            <div class="circle bg-black-500 rounded-full"></div>
        </div>
        <div class="flex space-x-2">
        </div>
      </div>

      <div class="mb-4">
        <h2 class="text-white font-bold">Verres teintés</h2>
        <div class="flex space-x-4">
          <button class="bg-opacity-10 bg-white px-4 py-2 rounded-full backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-40 transition duration-300 text-white ease-in-out">Avec</button>
          <button class="bg-opacity-10 bg-white px-4 py-2 rounded-full backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-40 transition duration-300 text-white ease-in-out">Sans</button>
        </div>
      </div>

      <div class="mb-4">
        <h2 class="text-white font-bold">Matière verres</h2>
        <div class="flex space-x-4">
        <button class="bg-opacity-10 bg-white px-4 py-2 rounded-full backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-40 transition duration-300 text-white ease-in-out">Verre Polycarbonate</button>
          <button class="bg-opacity-10 bg-white px-4 py-2 rounded-full backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-40 transition duration-300 text-white ease-in-out">Verre Multifocaux</button>
        </div>
      </div>

      <div class="mb-4">
        <h2 class="text-white font-bold">Matière monture</h2>
        <div class="flex space-x-4">
          <button class="bg-opacity-10 bg-white px-4 py-2 rounded-full backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-40 transition duration-300 text-white ease-in-out">Métal</button>
          <button class="bg-opacity-10 bg-white px-4 py-2 rounded-full backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-40 transition duration-300 text-white ease-in-out">Titane</button>
          <button class="bg-opacity-10 bg-white px-4 py-2 rounded-full backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-40 transition duration-300 text-white ease-in-out">Acétate</button>
        </div>
      </div>

      <div class="mb-4">
        <h2 class="text-white font-bold">Forme cadrans</h2>
        <div class="flex space-x-4">
          <button class="bg-opacity-10 bg-white px-4 py-2 rounded-full backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-40 transition duration-300 text-white ease-in-out">Rond</button>
          <button class="bg-opacity-10 bg-white px-4 py-2 rounded-full backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-40 transition duration-300 text-white ease-in-out">Carré</button>
          <button class="bg-opacity-10 bg-white px-4 py-2 rounded-full backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-40 transition duration-300 text-white ease-in-out">Ovale</button>
        </div>
      </div>
        <button class="w-auto p-4 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md mt-4 justify-center item-center">Payer</button>
            </div>
        </div>
    </div>
    
    <Configutateur/>

</template>


<style scoped>
.circle {
  width: 30px;
  height: 30px;
}
</style>