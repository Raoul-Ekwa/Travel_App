import { FlatList, ListRenderItem, StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '@/Constant/Colors'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import Categories from '@/app/(tabs)/Categories'

type Props ={
    listings: any[]
    category: string
}

//On a utilisé une extenxion json to typescript pour gerer cette partie 
const Listing = ({listings}: Props) => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        console.log('Update Listing')
        setLoading(true)

        setTimeout( () => {
            setLoading(false)
        }, 200)
    }, [Categories])
    const renderItems:ListRenderItem<ListingType> = ({ item }) => {
        return(
            <Link href={`/listing/ ${item.id}`} asChild>
            <TouchableOpacity>
                <View style={styles.item}>
                    <Image source={{uri:item.images}} style={{width: 200, height: 200}} style={styles.image}/>

                    <View style={styles.iconBookmark}>
                       <Ionicons name='bookmark-outline' size={20} color={Colors.white}/>
                    </View>
                     
                     {/* numberOfLines={1} : Cela limite le texte à une seule ligne. 
                     ellipsizeMode='tail': ajoute des points de suspension (...) 
                     si le texte ne tient pas dans l'espace disponible */}
                    <Text style={styles.itemName} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>

                    <View style={{flexDirection:'row' , justifyContent: 'space-between'}}>
                       
                        <View style={{flexDirection:'row', gap:5}}>
                            <FontAwesome5 name="map-marker-alt" size={18} color={Colors.primaryColor} />
                            <Text style={{fontSize:13}}>{item.location}</Text>
                        </View>
                        <Text style={{fontSize:13, fontWeight: '600', color: Colors.primaryColor}}>{item.price}</Text>
                    </View>
                    
                </View>

            </TouchableOpacity>
            </Link>
        )
    }
  return (
    <View style={loading ? [] : styles.listingsContainer}>
      <FlatList 
            data={listings} 
            renderItem={renderItems}
            horizontal
            showsHorizontalScrollIndicator={false}
       />
    </View>
  )
}

export default Listing

const styles = StyleSheet.create({
    listingsContainer: {
        marginLeft: 15, 
    },
    item: {
        backgroundColor: Colors.white,
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        width: 220

    },
    image: {
        borderRadius: 10,
        width: 200,
        height: 200,
        marginBottom: 30,
    },
    iconBookmark: {
        position: 'absolute',
        top: 185,
        right: 30,
        borderRadius: 30,
        backgroundColor: Colors.primaryColor,
        borderWidth: 2,
        borderColor: Colors.white,
        padding: 10,
        
    },
    itemName: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: '600',

    }
})