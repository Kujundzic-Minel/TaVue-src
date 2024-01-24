<script setup>

</script>

<template>
  <div class="bg-white p-4 shadow-md flex justify-between items-center sticky top-0 z-">
    
    <!-- Logo -->
    <RouterLink to="/">
      <div class="flex items-center space-x-4">
        <img src="@/assets/img/logo_tavue.png" alt="TAVUE Paris" class="w-22 h-16" />
      </div>
    </RouterLink>

    <!-- Navigation Links -->
    <div class="flex space-x-9 items-center">
      <RouterLink to="/" class="transition-colors duration-300 hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500">Accueil</RouterLink>
      <RouterLink to="LunettesView" class="transition-colors duration-300 hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500">Nos lunettes</RouterLink>
      <RouterLink to="PersonnaliserView" class="transition-colors duration-300 hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500">Personnaliser</RouterLink>
      <RouterLink to="MonCompteView" class="bg-pink-500 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-pink-600">Mon compte</RouterLink>
      <RouterLink to="CreationCompteView" class="bg-pink-500 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-pink-600">Créer mon compte</RouterLink>
    </div>

    <!-- Shopping Bag Icon -->
    <div class="ml-4">
      <img src="@/assets/img/shopping-bag.png" alt="Shopping Bag" class="w-10 h-10" />
    </div>
  </div>

  <div class="bg-black text-white p-4">
    <p class="text-center flex justify-center"><span class="text-pink-500">PROFITEZ DE -30% SUR VOTRE PROCHAINE COMMANDE !</span> Temps restant : 14H54MIN45S</p>
  </div>

</template>