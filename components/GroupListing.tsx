import React from 'react'
import { FlatList, StyleSheet, Text, Image, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'  // Importer GestureHandlerRootView
import { GroupType } from '@/types/groupType'
import Colors from '@/Constant/Colors'
import { Ionicons } from '@expo/vector-icons'

const GroupListing = ({ listings }: { listings: GroupType[] }) => {
  const renderItem = ({ item }: { item: GroupType }) => {
    return (
        <>
            <View style={styles.item}>
                <Image source={{uri: item.images}} style={styles.image}/>
                <View>
                    <View>
                        <Text style={styles.itemTxt}>{item.name}</Text>
                    </View>

                    <View style={{flexDirection: 'row', 
                                alignItems:'center',
                                
                                }}>
                        <Ionicons name='star' size={20} color={Colors.primaryColor}/>
                        <Text style={styles.itemRating}>{item.rating}</Text>
                        <Text style={styles.itemReviews}>({item.reviews})</Text>
                    </View>
                   </View>
            </View>

            
        </>
    )
  }

  return (
    // Envelopper ton composant avec GestureHandlerRootView
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={{fontSize: 22, fontWeight:'bold', marginBottom: 10}}>Meilleure série de produits</Text>
        <FlatList horizontal
          data={listings}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 20
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 10,

  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    //marginLeft: 20
    marginRight: 20, //Pour qu'a l'affichage nos images commencent bien a gauche 
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemTxt: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 8
  },
  itemRating:{
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
    marginLeft: 5
  },
  itemReviews:{
    fontSize: 14,
    color: '#999'
  }
})

export default GroupListing