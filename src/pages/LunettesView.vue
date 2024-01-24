<template>
    <div class="container mx-auto px-4 pb-64">
        <h1 class="text-2xl font-bold mb-6">Retrouvez nos différentes paires de lunettes !</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="lunette in lunettesList" :key="lunette.id" class="card bg-white shadow-lg rounded-lg overflow-hidden">
                <img v-bind:src="lunette.LunettesPhotos" alt="Photo des lunettes" class="w-full h-48 object-cover object-center" />
                <div class="p-4">
                    <h2 class="text-xl font-bold">{{ lunette.Nom }}</h2>
                    <p class="text-gray-700 mt-2">{{ lunette.Prix }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PocketBase from 'pocketbase';

export default {
    data() {
        return {
            lunettesList: []
        };
    },
    async mounted() {
        const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE, {
            token: '1209600'
        });

        try {
            this.lunettesList = await pb.collection('lunettes').getFullList({});

        } catch (error) {
            console.error("Erreur lors de la récupération des lunettes:", error);
        }
    },
}
</script>
