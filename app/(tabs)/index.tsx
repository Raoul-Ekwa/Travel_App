import { StyleSheet, Text, Image, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import Colors from '@/Constant/Colors'
import { Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native'; 
import CategoriesButton from '@/components/CategoriesButton'
import Categories from './Categories'
import Listing from '@/components/Listing'
import ListingData from '../../datas/destinations.json'
import GroupListing from '@/components/GroupListing'
import groupData from '@/datas/groups.json'

const Page = () => {
  // Déclaration de l'état local `category` pour stocker la catégorie sélectionnée, initialisée à une chaîne vide.
  const [category, setCategory] = useState<string>('')

  // Fonction qui gère le changement de catégorie. Elle est appelée lorsque l'utilisateur sélectionne une catégorie.
  const onCatChanged = (category: string) => {
    console.log("Category selected: ", category) // Affiche dans la console la catégorie sélectionnée
    setCategory(category) // Met à jour l'état `category` avec la nouvelle catégorie choisie
  }

  return (
    <>
      {/* Le composant Stack.Screen configure l'entête de l'écran. Il fait partie d'une navigation, probablement de React Navigation. */}
      <Stack.Screen
        options={{
          headerTransparent: true, // L'entête de l'écran est transparente
          headerTitle: '', // Pas de titre pour l'entête
          headerLeft: () => (
            // Bouton à gauche dans l'entête (généralement pour afficher un avatar ou une icône)
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=female" }} // Avatar utilisateur (image aléatoire)
                style={{ width: 40, height: 40, borderRadius: 10 }} // Style de l'image de l'avatar (cercle)
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            // Bouton à droite dans l'entête pour afficher une icône de notifications
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: '#171717',
                shadowOffset: { width: 2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name='notifications' size={20} color={Colors.black} /> {/* Icône de notifications */}
            </TouchableOpacity>
          ),
        }}
      />

      {/* ScrollView permet d'ajouter une vue défilable verticalement à l'écran */}
      <ScrollView showsVerticalScrollIndicator={false}> {/* Cache la barre de défilement verticale */}
        {/* Section pour afficher un titre ou une introduction */}
        <View style={styles.Container}>
          <Text style={styles.headingText}>Explorez nos differents produits !</Text>
        </View>

        {/* Section pour la barre de recherche */}
        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons name='search' size={18} style={{ marginRight: 10, color: Colors.black }} /> {/* Icône de recherche */}
            <TextInput placeholder='Recherche...' /> {/* Champ de saisie de texte pour la recherche */}
          </View>
          {/* Bouton pour ouvrir un menu de filtrage */}
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name='options' size={20} style={styles.filterButton} /> {/* Icône de filtre */}
          </TouchableOpacity>
        </View>

        {/* Transmission de la fonction `onCatChanged` en tant que prop à un autre composant appelé `CategoriesButton` */}
        <CategoriesButton onCategoryChanged={onCatChanged} />

        {/* Affichage de la liste des annonces en fonction de la catégorie sélectionnée */}
        <Listing listings={ListingData} category={Categories} /> {/* ListingData et Categories sont des variables externes à ce composant, mais ne sont pas définies dans ce code */}
        
        {/* Affichage d'un autre composant de groupe d'annonces */}
        <GroupListing listings={groupData} /> {/* groupData est une variable contenant les données du groupe d'annonces */}
      </ScrollView>
    </>
  )
}


export default Page

const styles = StyleSheet.create({
  Container: {
    padding: 20,
    marginTop: 100,
    backgroundColor: Colors.bgColor,
  },
  headingText: {
    fontSize: 35,
    fontWeight: '800',
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
    gap: 20,
    marginHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
  filterButton: {
    backgroundColor: 'orange',
    padding: 16,
    borderRadius: 10,
    color: Colors.white,
  },
})


{/* Explications détaillées :
État local category :

L'état category est utilisé pour stocker la catégorie actuellement sélectionnée par l'utilisateur. Cet état est initialisé avec une chaîne vide, et il est mis à jour chaque fois qu'une catégorie est choisie via la fonction onCatChanged.
Fonction onCatChanged :

Cette fonction est passée en prop au composant CategoriesButton. Elle est appelée à chaque fois qu'une catégorie est sélectionnée, ce qui permet de mettre à jour l'état category et d'effectuer une action à chaque changement de catégorie (comme l'affichage de nouveaux éléments associés à cette catégorie).
Stack.Screen :

Le composant Stack.Screen est utilisé pour configurer l'entête de l'écran dans une navigation de type stack (probablement via React Navigation). Dans cet exemple, l'entête est transparente, sans titre et contient deux boutons :
Un bouton à gauche avec un avatar cliquable (qui, ici, ne déclenche aucune action).
Un bouton à droite avec une icône de notifications, stylisé avec une ombre et des bordures arrondies (aucune action n'est définie ici non plus).
ScrollView :

ScrollView est utilisé pour rendre l'écran défilable verticalement, ce qui permet d'ajouter plusieurs sections (comme des titres, des champs de recherche et des listes) et de les rendre accessibles même si elles dépassent la taille de l'écran.
La propriété showsVerticalScrollIndicator={false} cache la barre de défilement verticale.
Barre de recherche et filtre :

La barre de recherche permet à l'utilisateur de saisir du texte pour rechercher parmi les produits ou les éléments. Elle contient une icône de recherche à gauche et un champ de saisie de texte.
Un bouton de filtre avec une icône d'options permet à l'utilisateur d'appliquer des filtres de recherche, bien que la logique du filtrage ne soit pas définie ici.
Transmission de la fonction onCatChanged à CategoriesButton :

CategoriesButton reçoit la fonction onCatChanged en tant que prop et l'appelle lorsqu'une catégorie est sélectionnée. Cela permet au composant Page de mettre à jour l'état category avec la catégorie choisie par l'utilisateur.
Affichage de la liste Listing et GroupListing :

Après avoir sélectionné une catégorie, la fonction Listing est appelée pour afficher une liste d'articles correspondant à cette catégorie, en utilisant ListingData et Categories (ces variables ne sont pas définies dans le code fourni).
Un autre composant GroupListing est également utilisé pour afficher une autre liste d'articles, à partir de groupData. */}