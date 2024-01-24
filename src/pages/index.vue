<script setup lang="ts">
import Separator from '../components/Separator.vue';
import MapOsm from '../components/MapOSM.vue'
</script>

<template>
    <main>
    <div>
        <img src="@/assets/img/img_bg_home.svg" alt="Image d'accueil" class="w-full">
        <div class="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-32">
          <img src="@/assets/img/lunettes_empiler_home.svg" alt="" class="w-72 md:w-96">
          <div class="p-8 w-full md:w-96 flex-col">
              <h2 class="text-xl font-bold mb-4">Lunette Edition “Unik”</h2>
              <p class="text-lg text-gray-600 mb-4">149.99€</p>
              <p class="text-gray-500 mb-6">Disponibilité : Plus que 7 disponibles</p>
              <p class="text-sm text-gray-500 mb-6">
                  Cette paire de lunettes entièrement personnalisable laissera transparaître votre originalité à tout le monde qui vous entours, et vous feront sentir unique !
              </p>
              <p class="text-xs text-gray-400 mb-4">+5,000 commandes</p>
              <router-link to="/PersonnaliserView">
              <button  class="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600">
                  Personnaliser
              </button>
            </router-link>
          </div>
        </div>
      </div>
    
      <Separator />
    
      <div class="flex flex-col md:flex-row p-8 h-auto md:h-68">
      <div class="flex-1 p-8 justify-center items-center">
          <h2 class="text-xl font-bold mb-4">Qui sommes nous ?</h2>
          <p class="mb-2">Bienvenue chez <span class="text-pink-500 font-bold">TaVue</span> !</p>
          <p class="mb-2 w-full md:w-96">Née au cœur de la France, Tavue symbolise l'excellence de la fabrication française en matière de lunetterie. Notre signature ? Un style raffiné, minimaliste et épuré. Chaque paire reflète une élégance intemporelle, alliant fonctionnalité et esthétique.</p>
      </div>
      <div class="flex-1 flex justify-center items-center mt-6 md:mt-0 md:ml-32">
          <img class="rounded-full w-56 md:w-72 -mb-5 md:-mb-5 -mt-9 md:-mt-9" src="@/assets/img/femme_home.png" alt="Image d'une femme avec lunette" />
      </div>
    </div>
    
      <Separator />
    
      <div class="flex flex-col-reverse md:flex-row p-8 h-auto md:h-68">
        <div class="flex-1 flex justify-center items-center mt-6 md:mt-0">
              <img class="rounded-full w-56 md:w-72 -mb-5 md:-mb-5 -mt-9 md:-mt-9" src="@/assets/img/homme_home.png" alt="Image d'une femme avec lunette" />
          </div>
          <div class="flex-1 p-8">
              <h2 class="text-xl font-bold mb-4">Que proposons-nous ?</h2>
              <p class="mb-2 w-full md:w-96"> Chez TaVue, chaque visage est unique. C'est pourquoi nous offrons des lunettes entièrement personnalisables. Sélectionnez votre couleur, choisissez votre matière et optez pour les verres qui vous correspondent. Avec TaVue, transformez vos lunettes en un reflet de votre personnalité. Exprimez-vous et voyez le monde à votre façon.
              </p>
          </div>
      </div>

      <Separator />

      <MapOsm/>


    </main>
</template>