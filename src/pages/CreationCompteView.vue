<template>
    <div class="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-[#ee7752] via-[#e73c7e] to-[#23a6d5] animate-gradient">
      <div class="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8  bg-white bg-opacity-10 backdrop-blur-md rounded-xl">
        <div v-if="currentUser">
          <h1>Welcome {{ currentUser?.name }}</h1>
          <div>
            <button type="button" @click="doLogout"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Logout</button>
  
          </div>
        </div>
        <div v-else>
          <h1 class="text-white font-bold">{{ loginMode ? "LOGIN" : "CREATE ACCOUNT" }}</h1>
          <div class="sm:col-span-2 sm:col-start-1 mt-4 ">
            <label for="username" class="block text-sm font-medium leading-6 text-white ">Email Address</label>
            <div class="mt-2">
              <input v-model="username" type="text" name="username" id="username" autocomplete="none"
                placeholder="Enter Email Address "
                class=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6  bg-white bg-opacity-10 backdrop-blur-md">
            </div>
          </div>
          <div class="sm:col-span-2 sm:col-start-1 mt-2">
            <label for="password" class="block text-sm font-medium leading-6 text-white">Password</label>
            <p class="text-red-600 text-xs">Minimum 10 charactères</p>
            <div class="mt-2">
              <input v-model="password" type="password" name="password" id="password" autocomplete="none"
                placeholder="Enter Password "
                class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6  bg-white bg-opacity-10 backdrop-blur-md">
            </div>
          </div>
          <div v-if="loginMode">
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <button type="button" @click="doLogin"
                class="mr-3 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Login</button>
  
              <button type="button" @click="loginMode = false"
                class="rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Créer
                Compte</button>
            </div>
            <div>
              <button v-on:click="githublogin ()" class="flex items-center justify-center space-x-2 ml-[282.5px] mt-8">
            Se connecter avec Github
        </button>
            </div>
          </div>
          <div v-else>
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <label for="fullName" class="block text-sm font-medium leading-6 text-white">Nom</label>
              <div class="mt-2">
                <input v-model="fullName" type="text" name="fullName" id="fullName" autocomplete="none"
                  placeholder="Enter Full Name "
                  class="  px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6  bg-white bg-opacity-10 backdrop-blur-md">
              </div>
            </div>
            <div class="sm:col-span-2 sm:col-start-1 mt-2">
              <button type="button" @click="doCreateAccount"
                class="mr-3 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Enregistrer
                nouvel utilisateur</button>
  
              <button type="button" @click="loginMode = true"
              class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Annuler
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import PocketBase from 'pocketbase';

//   var pocketbase_ip = "";
// if (import.meta.env.MODE === "production")
//     pocketbase_ip = "https://tavue.kujundzic.fr:443"; 
// else pocketbase_ip = "http://127.0.0.1:8090/";
const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE);
  

  const currentUser = ref();
  const username = ref("");
  const password = ref("");
  const fullName = ref("");
  
  const loginMode = ref(true);
  
  onMounted(async () => {
  
    pb.authStore.onChange(() => {
      currentUser.value = pb.authStore.model
    }, true)
  
  });
  
  const doLogout = () => {
    pb.authStore.clear();
    currentUser.value = null;
  }
  
  const doLogin = async () => {
    try {
      const authData = await pb.collection('users')
        .authWithPassword(username.value, password.value);
  
      // after the above you can also access the auth data from the authStore
      console.log(pb.authStore.isValid);
      console.log(pb.authStore.token);
      console.log(pb.authStore.model);
      // currentUser.value = pb.authStore.model
    } catch (error) {
      alert(error.message)
    }
  }
  
  const doCreateAccount = async () => {
    try {
      const data = {
        "email": username.value,
        "emailVisibility": true,
        "password": password.value,
        "passwordConfirm": password.value,
        "name": fullName.value
      };
  
      const record = await pb.collection('users').create(data);
  
      await doLogin();
    } catch (error) {
      alert(error.message)
    }
  }

  const githublogin = async () => {
    await pb.collection('users').authWithOAuth2({ provider: 'github' });
    if (pb.authStore.isValid) {
      document.getElementById('status').innerHTML =
        'YVous etes maintenant connecté avec Github';
      connected = true;
      currentUser = pb.authStore.model;
    }
  };
  
  </script>  

<style scoped>
@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.animate-gradient {
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
}
</style>