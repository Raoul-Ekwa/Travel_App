import { FlatList, ListRenderItem, StyleSheet, Text,Image, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '@/Constant/Colors'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import Categories from '@/app/(tabs)/Categories'

// Définition du type des props attendues par le composant Listing
type Props = {
    listings: any[]  // Une liste d'éléments, de type `any` pour le moment (ce serait bien de la typer plus précisément)
    category: string  // Une catégorie, sous forme de chaîne de caractères
}

// Composant Listing qui reçoit des props selon le type défini ci-dessus
const Listing = ({ listings }: Props) => {
    // Déclaration d'un état local `loading`, initialisé à false. Cet état sert à savoir si les données sont en train de se charger.
    const [loading, setLoading] = useState(false)

    // Hook useEffect qui s'exécute chaque fois que `Categories` change (probablement une erreur, il devrait s'agir de `category`)
    useEffect(() => {
        console.log('Update Listing') // Affiche dans la console que la mise à jour de la liste a eu lieu.
        setLoading(true)  // Modifie l'état `loading` pour le mettre à `true`, indiquant que le contenu est en chargement.

        // Simule un délai de 200ms avant de changer l'état `loading` à `false` (ce qui signifie que le chargement est terminé)
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [Categories]) // Le hook se réexécutera à chaque changement de la variable `Categories`, ce qui semble être une erreur car `Categories` n'est pas défini ici.

    // Fonction `renderItems` utilisée par le `FlatList` pour rendre chaque élément de la liste
    const renderItems: ListRenderItem<ListingType> = ({ item }) => {
        return(
            // L'élément `Link` est utilisé pour naviguer vers la page de détail de l'annonce via l'ID de l'élément
            <Link href={`/listing/ ${item.id}`} asChild>
                <TouchableOpacity> {/* TouchableOpacity permet de rendre l'élément cliquable */}
                    <View style={styles.item}> {/* Style pour chaque élément de la liste */}
                        {/* Affichage de l'image de l'annonce avec un style défini */}
                        <Image source={{uri: item.images}} style={{width: 200, height: 200}} style={styles.image}/>

                        <View style={styles.iconBookmark}> {/* Icône de favori (bookmark) */}
                            <Ionicons name='bookmark-outline' size={20} color={Colors.white}/>
                        </View>
                         
                        {/* Affichage du nom de l'élément avec une coupe de texte si nécessaire */}
                        <Text style={styles.itemName} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}> {/* Affichage de la localisation et du prix */}
                            <View style={{flexDirection: 'row', gap: 5}}>
                                <FontAwesome5 name="map-marker-alt" size={18} color={Colors.primaryColor} /> {/* Icône de localisation */}
                                <Text style={{fontSize: 13}}>{item.location}</Text> {/* Localisation de l'élément */}
                            </View>
                            <Text style={{fontSize: 13, fontWeight: '600', color: Colors.primaryColor}}>{item.price}</Text> {/* Prix de l'élément */}
                        </View>
                    </View>
                </TouchableOpacity>
            </Link>
        )
    }

    return (
        <View style={loading ? [] : styles.listingsContainer}> {/* Si `loading` est true, pas de style, sinon affiche les éléments */}
            <FlatList 
                data={listings} // Les données à afficher (ici la liste des `listings`)
                renderItem={renderItems} // Fonction pour afficher chaque élément de la liste
                horizontal // Affichage horizontal des éléments
                showsHorizontalScrollIndicator={false} // Cache la barre de défilement horizontale
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

{/* Explications détaillées :
Type Props : Le type Props définit les deux props attendues par le composant Listing :

listings: un tableau d'éléments à afficher dans le FlatList. Il est actuellement de type any[], ce qui n'est pas optimal, car il n'y a pas de garantie sur la structure des éléments du tableau. Il serait préférable de définir un type spécifique pour listings.
category: une chaîne de caractères représentant la catégorie des annonces (par exemple, "immobilier", "véhicules", etc.).
Composant Listing :

Le composant Listing est une fonction qui prend listings comme prop et gère un état interne loading pour simuler un délai de chargement.
L'effet de useEffect est exécuté chaque fois que la valeur de Categories change. Toutefois, il semble y avoir une erreur, car Categories n'est pas défini. Ce devrait probablement être category ou une autre variable d'état en rapport avec la catégorie des annonces.
État loading et setLoading :

L'état loading est mis à true au début du chargement, puis est réinitialisé à false après un délai de 200 ms (simulant un délai pour le chargement des données).
renderItems :

La fonction renderItems est passée au FlatList pour déterminer comment chaque élément de la liste sera affiché. Chaque élément de la liste est un objet item avec des propriétés comme id, images, name, location, et price.
L'élément est un lien (Link), qui redirige l'utilisateur vers une page de détail de l'annonce en utilisant item.id dans l'URL.
À l'intérieur de chaque élément, l'image est affichée avec un style personnalisé, et des informations comme la localisation et le prix de l'annonce sont également affichées.
FlatList :

FlatList est utilisé pour afficher efficacement une longue liste d'éléments, avec une optimisation pour le rendu des éléments visibles uniquement (lazy loading).
La liste est affichée horizontalement grâce à la propriété horizontal, et la barre de défilement est masquée (showsHorizontalScrollIndicator={false}).
Améliorations possibles :
Typage : Le type des listings est actuellement défini comme any[], il serait préférable de créer un type ou une interface pour décrire la forme d'un élément d'annonce (par exemple, ListingType).
Erreurs de dépendance dans useEffect : Il semble y avoir une confusion avec Categories. Si Categories est un état ou une variable, elle devrait être définie correctement. Sinon, l'effet pourrait être basé sur la category ou d'autres dépendances.
Gestion de l'état de chargement : Si le but est d'afficher une animation de chargement, il faudrait afficher un indicateur visuel pendant que loading est true.*/}