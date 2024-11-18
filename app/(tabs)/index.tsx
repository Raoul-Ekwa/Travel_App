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
  const [category, setCategory] = useState<string>('')

  // La fonction qui gère la sélection de catégorie
  const onCatChanged = (category: string) => {
    console.log("Category selected: ", category)
    setCategory(category)
  }

  return (
    <>
      
      
        <Stack.Screen
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => {}} style={{marginLeft: 20}}>
                <Image 
                  source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=female" }}
                  style={{width: 40, height: 40, borderRadius: 10}}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  marginRight: 20,
                  backgroundColor: Colors.white, 
                  padding: 10, 
                  borderRadius: 10,
                  shadowColor: '#171717',
                  shadowOffset: { width: 2, height: 4},
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                }}
              >
                <Ionicons name='notifications' size={20} color={Colors.black}/>
              </TouchableOpacity>
            )
          }}
        />
     <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Container}>
          <Text style={styles.headingText}>Explorez nos differents produits !</Text>
        </View>

        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons name='search' size={18} style={{marginRight: 10, color: Colors.black}}/>
            <TextInput placeholder='Recherche...'/>
          </View>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name='options' size={20} style={styles.filterButton}/>
          </TouchableOpacity>
        </View>
      
        {/* Transmettre la fonction onCatChanged comme prop à CategoriesButton */}
        <CategoriesButton onCategoryChanged={onCatChanged} />

        <Listing listings={ListingData} category={Categories}/>

        <GroupListing listings={groupData}/>
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
