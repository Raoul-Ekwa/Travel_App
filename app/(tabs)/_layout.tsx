import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Colors from '@/Constant/Colors';

export default function Layout() {
  return (
    <Tabs screenOptions={{
        tabBarBadgeStyle: {
            backgroundColor: Colors.bgColor,
            borderTopWidth: 0,
            padding: 0
        },
        tabBarShowLabel: false, //n'affiche pas les noms de mes onglets
        tabBarActiveTintColor: Colors.black, // le noir apparait quand on touche un onglet
        tabBarInactiveTintColor: '#999',//Quand un onglet n'est pas selectionné il a cette couleur #999


    }}>
      {/* Définition de l'onglet "Index" avec une icône */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="compass" size={31} color={color} />
        }}
      />
      
      {/* Définition de l'onglet "Categories" avec une icône */}
      <Tabs.Screen
        name="Categories"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="space-dashboard" size={28} color={color} />
        }}
      />
      
      {/* Définition de l'onglet "Recherche" avec une icône */}
      <Tabs.Screen
        name="Recherches"
        options={{
            tabBarIcon: ({ color }) => (
              <View style={{backgroundColor: Colors.primaryColor, 
                  paddingHorizontal: 14, 
                  paddingVertical: 12,
                  borderRadius:10, 
                  height: 50,
                  width: 50}}>
                <Ionicons name="search-outline" size={28} color={Colors.white} />
              </View>
            )
            
          }}
      />
      
      {/* Définition de l'onglet "Favoris" avec une icône */}
      <Tabs.Screen
        name="Favoris"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="bookmark" size={28} color={color} />
        }}
      />
      
      {/* Définition de l'onglet "Profile" avec une icône */}
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={28} color={color} />
        }}
      />
    </Tabs>
  );
}
