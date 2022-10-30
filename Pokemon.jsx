import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Button,
  FlatList,
  View,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import axios from "axios";

export default function Pokemon() {
  const [num, setNum] = useState("1");
  const [pokemonname, setPokemonName] = useState();
  const [pokemonweight, setPokemonweight] = useState();
  const [pokemonimage, setPokemonimage] = useState();
  let number = num;

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);

      //   console.log(res.data);
      //   console.log(pokemonimage);

      setPokemonName(res.data.name);
      setPokemonweight(res.data.weight / 10); // Viewiding weight by 10
      setPokemonimage(res.data.sprites.front_default);
    }

    getData();
  });

  // Dark Mode ( Click on PokeDex )
  const [darkmode, setDarkmode] = useState("text-black");
  function dark() {
    if (darkmode === "white") {
      setDarkmode("black");
    } else {
      setDarkmode("white");
    }
  }

  return (
    <>
      <View className={`bg-${darkmode} bg-black`}>
        <View className="block mx-auto w-screen h-screen rounded-xl border-[20px] border-red-500 text-white bg-red-600">
          <View
            className={`text-center text-2xl text-${darkmode} font-bold p-4`}
            onClick={dark}
          >
            <Text className="text-white text-3xl font-bold">PokeDex</Text>
          </View>
          <View className="justify-center mt-12 bg-gray-700 mx-auto rounded-lg border-8 border-white">
            <Image
              //   source={pokemonimage}
              source={{ uri: pokemonimage }}
              className="h-[256px] w-[260px] mx-auto"
              //   alt=""
            />
          </View>
          <View className="mx-auto bg-gray-700 text-center mt-10 mb-4 rounded-lg">
            <View className="text-2xl font-bold py-2 px-4">
              <Text className="text-white text-2xl">Name : {pokemonname}</Text>
            </View>
            <View className="text-xl px-4 pb-4">
              <Text className="text-white text-xl">
                Weight : {pokemonweight} kg
              </Text>
            </View>
          </View>
          <View className="flex-row my-4 justify-center">
            <Pressable
              title="Prev"
              onPress={() => {
                // New syntax
                num !== 1 && setNum(--number);
              }}
              className="my-2 mx-auto px-4 pt-2 pb-3 bg-yellow-500 text-black text-lg hover:text-yellow-500 hover:bg-black rounded-xl"
            >
              <Text>Prev</Text>
            </Pressable>
            <Pressable
              title="Next"
              onPress={() => {
                setNum(++number);
              }}
              className="my-2 mx-auto px-4 pt-2 pb-3 bg-yellow-500 text-black text-lg hover:text-yellow-500 hover:bg-black rounded-xl"
            >
              <Text>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}
