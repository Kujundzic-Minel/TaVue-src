<script setup>
    // import éléments de vue
    import { onMounted, ref } from 'vue'
    // Import Leaflet
    import * as Leaflet from 'leaflet'
    // css leaflet
    import 'leaflet/dist/leaflet.css'

    // Canevas pour la carte
    let tileLayer = Leaflet.tileLayer
    // Initialisation de la carte sous forme d'une ref
    let map = ref()
    
    // Coordonnées de l'utilisateur
    let coordMe = ref({
        latitude : 0,
        longitude : 0
    })

    // Lorsque le composant est monté dans la vue
    onMounted( async ()=> {
        // Caractérisitques de la carte
        tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
      );

      // Création de la carte sur la div ayant l'id = 'map'
      map = Leaflet.map('map',
        {
            zoomControl: true, // Contrôle de Zoom
            layers: [tileLayer], // Canevas pour dessiner la carte
            maxZoom: 18,        // Zoom maxi autorisé
            minZoom: 6          // Zoom mini autorisé
        })
        // projetction de la carte avec centrage aux coordonnées indiquées, avec facteur d'agrandissement
        .setView([47.495328, 6.8044455], 17)

        // Création d'un icone
        let myIcon = Leaflet.icon({
            iconUrl:    '@/assets/assets/',       // Image de l'icone   // Ombre de l'icone
            iconSize:   [25, 41],                       // Taille de l'icone
            shadowSize: [25, 41],                       // Taille de l'ombre de l'icone
            iconAnchor: [-10,-10],                      // Ancrage de l'icone
            shadowAnchor: [-10,-10],                    // Ancrage de l'ombre de l'icone
            popupAnchor: [0, 0]                         // Point de position de la popup si elle existe
        })

        // Ajout d'un marqueur
        let marker = Leaflet.marker([47.495328, 6.8044455], {icon: myIcon}).addTo(map)

        // Ajouter une popup / infobulle
        marker.bindPopup('Nous sommes ici !')

        // Recentrage de la carte au bout de 5 secondes
        // à une autre position
        setTimeout(
            function() {
                map.panTo([47.50133850064826, 6.807621746718467])
            }, 5000
        )

    }) // Fin onMounted

    // Fonction de détection de la géolocalisation via le navigateur
    const locMe = () => {
        // geolocalisation du navigateur 
        // => lorsque la geolocalisation a été faite 
        //          => appel d'une fonction showLocation
        navigator.geolocation.getCurrentPosition(showLocation)
    }
    // Fonction appelée par locMe pour charger les valeurs de géolocalisation
    const showLocation = (position) => {
console.log("postion", position)        
        // Recuperation latitue longitude
        coordMe.value.latitude = position.coords.latitude
        coordMe.value.longitude = position.coords.longitude
        // Recentrage de la carte sur position utilisateur
        map.panTo([coordMe.value.latitude, coordMe.value.longitude])
        // Créer un marker
        let markerMe = Leaflet.marker([coordMe.value.latitude, coordMe.value.longitude]).addTo(map) 
        // Ajouter une popup / infobulle
        markerMe.bindPopup('Je suis là !!!!')
    }

</script>


<template>
<div class="bg-white text-black p-4">
    <h5 class="font-semibold text-lg mb-4">Où nous retrouver ?</h5>
    <div class="mb-4">
        <button class="bg-pink-500 hover:bg-pink-600 text-white w-full py-2 rounded" @click="locMe()">Se localiser</button>
    </div>
    <div>
        <div id="map"></div>
    </div>
</div>
</template>

<style scoped>
#map{
    width:100%;
    height: 60vh;
}
</style>