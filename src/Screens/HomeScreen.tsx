import React,{useEffect} from 'react'
import { ActivityIndicator, Dimensions, Text, View, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';


import MoviePoster from '../components/MoviePoster';
import useMovies from '../Hooks/useMovies'
import { HorizontalSlider } from '../components/HorizontalSlider';
import movieDB from '../api/movieDB';


 const windowWidth= Dimensions.get('window').width

const HomeScreen = () => {

   
const {nowPlaying,popular,topRated,upcoming,isLoading,} =useMovies();
const{top}=useSafeAreaInsets();

if(isLoading)
{
return (
<View style ={{flex:1, justifyContent:'center' , alignContent:'center'}}>
  <ActivityIndicator color={'red'} size={80}></ActivityIndicator>
</View>

)

}

  return (
    
  <ScrollView>

<View style={{marginTop: top+20}}>
       <View style={{ height: 440 }}>
       <Carousel 
                        data={ nowPlaying }
                        renderItem={ ({ item }: any) => <MoviePoster movie={ item } /> }
                        sliderWidth={ windowWidth }
                        itemWidth={ 300 }
                        inactiveSlideOpacity={0.9}
                    />
      </View>

     {/* <View style={{backgroundColor:'red',height:250}}>
        <Text style={{fontSize:30, fontWeight:'bold'}}> En cartelera</Text>
        <FlatList
                data={ peliculasEnCine }
                renderItem={ ({ item }: any) => (
                    <MoviePoster movie={ item } width={ 140 } height={ 200 } />
                )}
                keyExtractor={ (item) => item.id.toString() }
                horizontal={ true }
                showsHorizontalScrollIndicator={ true }
            />
                </View>*/}
                
                <HorizontalSlider title="Popular" movies={ popular } />
                <HorizontalSlider title="Top Rated" movies={ topRated } />
                <HorizontalSlider title="Upcoming" movies={ upcoming } />


    </View>

  </ScrollView>

    
  )
}

export default HomeScreen
