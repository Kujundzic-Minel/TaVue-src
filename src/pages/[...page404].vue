<template>
    <div class="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-[#ee8752] via-[#e75c7e] to-[#24a6d5] animate-gradient">
    
        <!-- Container avec effet "glassy" -->
        <div class="flex flex-col justify-center items-center p-12 bg-white bg-opacity-10 backdrop-blur-md rounded-xl">
            <div class="text-decoration-none">
                <p class=" text-center text-8xl font-bold pt-40 text-white">404</p>
                <p class=" text-center text-4xl font-bold pt-40 text-white">Aucune page n'a été trouvé</p>
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
    animation: gradient 5s ease infinite;
}
</style>