import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image, useColorScheme,ActivityIndicator, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../Navigation/Navigation'
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useMovieDetails } from '../Hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams,'DetailsScreen'>{};

const DetailsScreen = ({ route, navigation }:Props) => {

  const movie=route.params ;
  
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
  const { isLoading, cast, movieFull } = useMovieDetails( movie.id );

  return (
    <ScrollView>
    <View style={ styles.imageContainer }>
        <View style={ styles.imageBorder }>
            <Image 
                source={{ uri }}
                style={ styles.posterImage }
            />
        </View>
    </View>

    <View style={ styles.marginContainer }>
        <Text style={ styles.subTitle }>{ movie.original_title }</Text>
        <Text style={ styles.title }>{ movie.title }</Text>
    </View>

    
    {
        isLoading 
            ? <ActivityIndicator size={ 35 } color="grey" style={{ marginTop: 20 }} />
            : <MovieDetails movieFull={ movieFull! } cast={ cast } />
    }

    {/* Boton para cerrar */}
    <View style={ styles.backButton }>
        <TouchableOpacity
            onPress={() => navigation.pop() }
        >
            <Icon 
                color="white"
                name="arrow-back-outline"
                size={ 60 }
            />
        </TouchableOpacity>
    </View>
        
    
</ScrollView>
    
  )
}

const styles = StyleSheet.create({
  imageContainer: {
      // backgroundColor: 'red',
      // overflow: 'hidden',
      width: '100%',
      height: screenHeight * 0.7,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 10,
      },
      shadowOpacity: 0.24,
      shadowRadius: 7,

      elevation: 9,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25
  },

  imageBorder: {
      flex: 1,
      overflow: 'hidden',
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25
  },
  posterImage: {
      flex: 1,
  },

  marginContainer: {
      marginHorizontal: 20,
      marginTop: 20
  },
  subTitle: {
      fontSize: 16,
      opacity: 0.8
  },
  title: {
      fontSize: 20,
      fontWeight: 'bold'
  },
  backButton: {
      position: 'absolute',
      zIndex: 999,
      elevation: 9,
      top: 30,
      left: 5
  }
});

export default DetailsScreen

