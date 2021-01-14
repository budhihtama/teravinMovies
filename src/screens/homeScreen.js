import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {wp, hp} from '../components/settingScreen';
import axios from 'axios';
import {useSelector} from  'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  
  const dataMovie = useSelector((state) => state.connection.data)
  const populer = dataMovie.slice(0,10)
  const [data, setData] = useState(populer);
  const poster = 'https://image.tmdb.org/t/p/w500';
  const [temp, setTemp] = useState()
  
  async function saveLocal(populer){
    AsyncStorage.setItem('MOVIE_LOCAL', JSON.stringify(populer))
  }

  async function getLocal(){
   return await AsyncStorage.getItem('MOVIE_LOCAL')
  }


 
  return (
    <View>
      <Text style={styles.headerTxt}>Popular</Text>
      <ScrollView style={styles.container}>
        {data != null
          ? data.map((item, index) => (
              <Render item={item} data={index}/>
            ))
          : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTxt: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: hp(4),
    padding: wp(4),
  },
  container: {
    padding: wp(5),
    marginBottom: hp(10),
  },
  title: {
    fontSize: hp(3),
    fontFamily: 'NunitoSans-Bold',
  },
  content: {
    flexDirection: 'row',
    marginVertical: hp(2),
    height: hp(30),
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  contentText: {
    paddingHorizontal: wp(3),
    flex: 1,
  },
  img: {
    width: wp(30),
    height: hp(25),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  date: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: hp(2.5),
  },
  imgModal: {
    width: wp(60),
    height: hp(70),
  },
});


const Render = ({item, data}) => {
  const poster = 'https://image.tmdb.org/t/p/w500';
  return (
    <TouchableOpacity style={styles.content} key={data}>
                <Image
                  style={styles.img}
                  source={{uri: poster + item.poster_path}}
                />
                <View style={styles.contentText}>
                  <Text style={styles.title}>{item.original_title}</Text>
                  <Text style={styles.date}>
                    Release Date: {item.release_date}
                  </Text>
                  <Text style={styles.date}>
                    Vote Average: {item.vote_average}
                  </Text>
                  <Text style={styles.date}>Vote Count: {item.vote_count}</Text>
                  <Text style={styles.date}>{item.original_language}</Text>
                </View>
              </TouchableOpacity>
  )
}