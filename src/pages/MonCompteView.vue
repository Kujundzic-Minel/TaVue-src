<template>
    <div class="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-[#ee7752] via-[#e73c7e] to-[#23a6d5] animate-gradient">
    
        <!-- Container avec effet "glassy" -->
        <div class="flex flex-col justify-center items-center p-12 bg-white bg-opacity-10 backdrop-blur-md rounded-xl">
            <h1 class="text-4xl font-bold text-white mb-8">Minel Kujundzic</h1>
            <div class="text-decoration-none">
                <h5 class="text-2xl font-semibold text-white m-0 pb-4">9 Rue lamartine</h5>
                <h5 class="text-2xl font-semibold text-white m-0 pb-4">Montbéliard, 25200</h5>
                <h5 class="text-2xl font-semibold text-white m-0 pb-4">07.82.07.09.05</h5>
                <h5 class="text-2xl font-semibold text-white m-0 pb-4">fanta@gmail.com</h5>
            </div>
        </div>
    
    </div>
</template>

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
    animation: gradient 15s ease infinite;
}
</style>