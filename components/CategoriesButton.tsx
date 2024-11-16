import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

import destinationsCategories from '@/datas/MesCategories'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Colors from '@/Constant/Colors'

type Props = {
    onCategoryChanged: (category: string) => void
}

const CategoriesButton = ({ onCategoryChanged }: Props) => {
    const scrollRef = useRef<ScrollView>(null)
    const itemRef = useRef<TouchableOpacity[] | null[]>([]);
    const [activeIndex, setActiveIndex] = useState(0)

    const handleSelectCategory = (index: number) => {
        const selected = itemRef.current[index]
        setActiveIndex(index)

        selected?.measure((x) => {
            scrollRef.current?.scrollTo({ x: x, y: 0, animated: true })
        })

        // Appel de la fonction avec le titre de la catégorie
        onCategoryChanged(destinationsCategories[index].title)
    }

    return (
        <View style={styles.categoriesContainer}>
            <Text style={styles.title}>Categories</Text>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false} 
                ref={scrollRef} 
                contentContainerStyle={{
                    gap: 20, 
                    paddingVertical: 10, 
                    marginBottom: 10 
                }}
            >
                {destinationsCategories.map((item, index) => (
                    <TouchableOpacity 
                        key={index}
                        ref={(el) => itemRef.current[index] = el}
                        onPress={() => handleSelectCategory(index)}
                        style={activeIndex === index ? styles.categorieBoutonActive : styles.boutonCategories}
                    >
                        <MaterialCommunityIcons 
                            name={item.iconName}
                            size={20}
                            color={activeIndex === index ? Colors.white : Colors.black}
                        />
                        <Text style={activeIndex === index ? styles.categorieBoutonTextActive : styles.categorieBoutontext}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default CategoriesButton

const styles = StyleSheet.create({
  categoriesContainer: {
    margin: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  boutonCategories: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#333333',
    shadowOffset: { width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderRadius: 10
  },
  categorieBoutontext: {
    marginLeft: 5,
  },
  categorieBoutonActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#333333',
    shadowOffset: { width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    borderRadius: 10
  },
  categorieBoutonTextActive: {
    marginLeft: 5,
    color: Colors.white
  }
});
