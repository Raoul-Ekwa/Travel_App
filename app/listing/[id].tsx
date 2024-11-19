import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import listingData from '@/datas/destinations.json';
import { Feather, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Colors from '@/Constant/Colors';
import Animated from 'react-native-reanimated';



const { width } = Dimensions.get('window');  // Récupère la largeur de la fenêtre de l'appareil pour l'adapter au contenu (responsive).
const IMG_HEIGHT = 300;  // Définit une hauteur fixe pour les images affichées (300px).

const ListingDetails = () => {
  const { id } = useLocalSearchParams();  // Récupère l'ID à partir des paramètres de la route dynamique (probablement avec React Navigation).

  // Recherche l'élément correspondant à l'ID dans les données de listing.
  const listing = (listingData as ListingType[]).find(
    (item) => item.id === parseInt(id)  // Vérifie que l'ID est bien un nombre et trouve l'élément correspondant.
  );
  
  const router = useRouter();  // Récupère l'objet `router` pour naviguer dans l'application, utilisé pour revenir à la page précédente.

  return (
    <>
      {/* Configuration de l'écran avec Stack.Screen, probablement pour React Navigation */}
      <Stack.Screen options={{
        headerTitle: '',  // Retire le titre de l'entête.
        headerTransparent: true,  // Rend l'entête transparente.
        headerLeft: () => (
          // Bouton à gauche dans l'entête, pour revenir à la page précédente.
          <TouchableOpacity 
            onPress={() => router.back()}  // Navigue vers la page précédente en utilisant `router.back()`.
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',  // Fond semi-transparent.
              borderRadius: 10,  // Bords arrondis.
              padding: 4,  // Espacement interne.
            }}
          >
            <View style={styles.iconHeader}>
              <Feather name="arrow-left" size={20} />  {/* Icône de flèche pour revenir à la page précédente. */}
            </View>
          </TouchableOpacity>
        ),
        headerRight: () => (
          // Bouton à droite de l'entête, pour les actions supplémentaires (ici, il ne fait rien).
          <TouchableOpacity 
            onPress={() => {}}  // Action vide ici, à définir selon l'objectif.
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',  // Fond semi-transparent.
              borderRadius: 10,  // Bords arrondis.
              padding: 4,  // Espacement interne.
            }}
          >
            <View style={styles.iconHeader}>
              <Ionicons name="bookmark-outline" size={20} />  {/* Icône de favori (bookmark). */}
            </View>
          </TouchableOpacity>
        ),
      }} />

      {/* Section principale du composant */}
      <View style={styles.container}>

        {/* ScrollView avec un `contentContainerStyle` pour définir un padding spécifique. */}
        <Animated.ScrollView contentContainerStyle={{ paddingBottom: 150 }}>
          {/* Affichage de l'image du listing avec une hauteur fixe */}
          <Image source={{ uri: listing?.images }} style={styles.image} />
          
          <View style={styles.containerWrapper}>
            {/* Affichage du nom du listing */}
            <Text style={styles.listingName}>{listing?.name}</Text>
            
            <View style={styles.listingLocationWrapper}>
              {/* Affichage de l'icône de localisation et de la localisation */}
              <FontAwesome5 name="map-marker-alt" size={18} color={Colors.primaryColor} />
              <Text style={styles.listingLocationTxt}>{listing?.location}</Text>
            </View>

            <View style={styles.highlightWrapper}>
              {/* Première carte (Durée) */}
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <View style={{
                  padding: 10, 
                  backgroundColor: '#f2f2f2',  // Fond de la carte.
                  borderRadius: 10  // Bords arrondis.
                }}>
                  <Ionicons name="time" size={24} color={Colors.primaryColor} 
                    style={{ backgroundColor: 'white' }}  // Fond blanc pour l'icône.
                  />
                </View>
                <View style={{ marginLeft: 5 }}>
                  <Text style={{ fontSize: 16, color: 'gray', fontWeight: '600' }}>Duration</Text>
                  <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>3 days</Text>
                </View>
              </View>

              {/* Deuxième carte (Nombre de personnes) */}
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <View style={{
                  padding: 10, 
                  backgroundColor: '#f2f2f2',  // Fond de la carte.
                  borderRadius: 10  // Bords arrondis.
                }}>
                  <FontAwesome name="group" size={24} color={Colors.primaryColor} 
                    style={{ backgroundColor: 'white' }}  // Fond blanc pour l'icône.
                  />
                </View>
                <View style={{ marginLeft: 5 }}>
                  <Text style={{ fontSize: 16, color: 'gray', fontWeight: '600' }}>Users</Text>
                  <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>4 people</Text>
                </View>
              </View>

              {/* Troisième carte (Évaluation) */}
              <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <View style={{
                  padding: 10, 
                  backgroundColor: '#f2f2f2',  // Fond de la carte.
                  borderRadius: 10  // Bords arrondis.
                }}>
                  <Ionicons name="star" size={24} color={Colors.primaryColor} 
                    style={{ backgroundColor: 'white' }}  // Fond blanc pour l'icône.
                  />
                </View>
                <View style={{ marginLeft: 5 }}>
                  <Text style={{ fontSize: 16, color: 'gray', fontWeight: '600' }}>Rating</Text>
                  <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>4.5</Text>
                </View>
              </View>
            </View>

            {/* Description longue */}
            <View style={{ marginTop: 15, marginLeft: 10 }}>
              <Text style={{
                fontSize: 18, 
                lineHeight: 25  // Gestion de l'espacement des lignes.
              }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, temporibus, assumenda ipsum cum sequi est laudantium natus, ipsam suscipit rem soluta atque id hic doloremque ab. Molestias error officiis voluptates!
              </Text>
            </View>
            
            {/* Section de footer avec deux boutons */}
            <View style={styles.footer}>
              {/* Bouton "Achetez maintenant" */}
              <TouchableOpacity style={{
                padding: 16, 
                backgroundColor: Colors.primaryColor, 
                borderRadius: 10
              }}>
                <Text style={{
                  color: 'white', 
                  fontSize: 18, 
                  fontWeight: 'bold'
                }}>
                  ACHETEZ MAINTENANT
                </Text>
              </TouchableOpacity>

              {/* Bouton avec le prix */}
              <TouchableOpacity style={{
                color: 'white', 
                padding: 16, 
                backgroundColor: Colors.black, 
                borderRadius: 10
              }}>
                <Text style={{
                  color: 'white', 
                  fontSize: 18, 
                  fontWeight: 'bold'
                }}>
                  {listing?.price}  {/* Affichage du prix du listing */}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    </>
  );
};


export default ListingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
  iconHeader: {
    backgroundColor: Colors.white,
    padding: 6,
    borderRadius: 10,
  },
  containerWrapper: {
    padding: 20,
  },
  listingName: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.black,
    letterSpacing: 0.5,
  },
  listingLocationWrapper: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  listingLocationTxt: {
    fontSize: 14,
    marginLeft: 5,
  },
  highlightWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent:'space-between'
    //gap: 30
  },
  footer: {
    flexDirection: 'row', 
    marginTop: 250, 
    justifyContent:'space-around'
}
});


{/* Explications détaillées :
Dimensions et hauteur d'image :

Dimensions.get('window') est utilisé pour récupérer la largeur de l'écran de l'appareil. Cela peut être utile pour adapter la mise en page aux différentes tailles d'écran.
IMG_HEIGHT est une constante qui définit la hauteur de l'image dans le composant, ce qui permet de fixer la taille des images à afficher de manière cohérente.
Récupération de l'ID et du listing :

useLocalSearchParams() est utilisé pour obtenir les paramètres de la route (comme l'ID du listing). Cet ID est ensuite utilisé pour rechercher dans un tableau de données (listingData) l'élément correspondant.
listing?.images et autres champs sont utilisés pour afficher les détails du listing trouvé.
Configuration de l'entête avec Stack.Screen :

Le Stack.Screen permet de configurer l'entête de l'écran de manière spécifique :
headerLeft : Un bouton avec une flèche de retour pour revenir à l'écran précédent (router.back()).
headerRight : Un bouton de favori (bookmark) dont l'action est encore à définir.
Affichage des informations du listing :

Le listing est présenté avec une image en haut, suivie du nom, de la localisation et de cartes informatives (durée, nombre d'utilisateurs, évaluation) qui sont affichées sous forme de cartes.
Animated.ScrollView est utilisé pour rendre la page défilable de manière fluide.
Footer avec boutons d'action :

Deux boutons sont ajoutés dans le bas de l'écran : un pour "Acheter maintenant" et un pour afficher le prix. Ces boutons sont stylisés avec des couleurs et des bordures arrondies. */}