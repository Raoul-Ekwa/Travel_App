import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import listingData from '@/datas/destinations.json';
import { Feather, Ionicons } from '@expo/vector-icons';
import Colors from '@/Constant/Colors';

const {width} = Dimensions.get('window')
const IMG_HEIGHT = 300

const ListingDetails = () => {
  const { id } = useLocalSearchParams(); // On récupère l'ID de la route dynamique

  // Trouver l'élément correspondant à l'ID
  const listing = (listingData as ListingType[]).find(
    (item) => item.id === parseInt(id) // Assurez-vous que l'ID est un nombre
  );
   const router = useRouter() // nous permet de revenir a la page d'acceuil apres avoir cliquer sur l'icone de retour
  return (
    <>
      <Stack.Screen options={{
         //headerTransparent: true,
         headerTitle: '', //enlever le titre
         headerTransparent: true,
         headerLeft: () => (
            <TouchableOpacity 
                onPress={() => router.back()} //// nous permet de revenir a la page d'acceuil apres avoir cliquer
                style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: 10,
                        padding:4,
                }}
                        
            >
                <View style={styles.iconHeader}>
                    <Feather name='arrow-left' size={20}/>
                </View>
            </TouchableOpacity>
         ),

         headerRight: () => (
            <TouchableOpacity 
                onPress={() => {}} //// nous permet de revenir a la page d'acceuil apres avoir cliquer
                style={{backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: 10,
                        padding:4,
                }}
                        
            >
                <View style={styles.iconHeader}>
                    <Ionicons name='bookmark-outline' size={20}/>
                </View>
            </TouchableOpacity>
         )
      }}/>
      <View style={styles.container}>
          <Image source={{ uri: listing.images }} style={styles.image} />
      </View>
    </>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({
  container: {
    
  },
  image: {
    width: width,
    height: IMG_HEIGHT,
    // Cette approche est dynamique et réactive aux dimensions de l'écran, ce qui la rend plus adaptée
    // aux applications mobiles qui doivent s'adapter à différentes tailles et résolutions d'écran.
  },
  iconHeader: {
    backgroundColor: Colors.white,
    padding: 6,
    borderRadius: 10,
  }
});
