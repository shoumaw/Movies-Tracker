import  React, {useEffect, useState} from 'react';
import {getMoviesList} from '../actions/moviesListingAction'
import {Movie} from '../components/Movie'
import {connect} from 'react-redux';
import {data} from '../constants/dummyData'
import { Text, View, SafeAreaView, StyleSheet,FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:0.5,
    alignItems:"stretch",
    justifyContent:"center",
    padding:20
  },
});

const MoviesListingPage = (props) => {
  const [movies , setMovies] = useState([])
  useEffect(() => {
    //props.getMoviesList()
    //In a proper application this data would be fetched through an api and would be invoked using redux thunk middleware and the results would be stored in the redux store
    // But for now I am getting the dummy data here directly
    let moviesList = data.map((movie) => ({id : movie.id, category: movie.category, image: movie.image.uri ,title : movie.title, rating: movie.rating}))
    setMovies(moviesList)
  },[])
  if (movies.length){
    return (
      <View style={styles.container}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>New releases</Text>
            <FlatList
              horizontal
              data={movies}
              renderItem={({ item }) => <Movie category = {item.category} title =  {item.title} image = {item.image} rating= {item.rating}/>}
              keyExtractor={(item, index) => 'list-item-${item.id}'}
            />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text> "No movies available" </Text>
      </View>
    );
}
const mapStateToProps = state => {
    return {
      moviesList: state.moviesListReducer.moviesList
    }
}
const mapDispatch = {
  getMoviesList
};
export default connect(mapStateToProps, mapDispatch)(MoviesListingPage)


