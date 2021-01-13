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

export default function Home() {
  const [data, setData] = useState();
  const url =
    'https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf';
  const poster = 'https://image.tmdb.org/t/p/w500';
  function getData() {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.results.slice(0, 10));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, [url]);
  return (
    <View>
      <Text style={styles.headerTxt}>Popular</Text>
      <ScrollView style={styles.container}>
        {data
          ? data.map((item, index) => (
              <TouchableOpacity key={index} style={styles.content}>
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
                  <Text style={styles.date}>
                    Vote Count: {item.vote_count}
                  </Text>
                  <Text style={styles.date}>
                    {item.original_language}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTxt: {
    fontSize: hp(4),
    fontWeight: 'bold',
    padding: wp(4),
  },
  container: {
    padding: wp(5),
    marginBottom: hp(20),
  },
  title: {
    fontSize: hp(3.5),
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    marginVertical: hp(2),
    height: hp(30)
  },
  contentText: {
      paddingHorizontal: wp(3)
  },
  img: {
    width: wp(30),
    height: hp(25),
    borderRadius: 10,
  },
});
