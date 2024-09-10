import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const Home = ({navigation}:any) => {
  const handlerOpenDreawer = ()=>{
    navigation.openDrawer()
  }
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "#fff",
          elevation: 3,
          flexDirection: "row",
          alignItems:'center'
        }}
      >
        <TouchableOpacity style={{marginLeft:15}} onPress={handlerOpenDreawer}>
          <Image source={require('./../../assets/images/DrawerOpenIcon.png')} />
        </TouchableOpacity>
        <Text style={{marginLeft:15}}>DrugsLog</Text>
      </View>
      <View>
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor cumque provident praesentium quos dignissimos iure commodi quisquam nobis magni tenetur illo alias odit eius molestias, deleniti blanditiis quasi porro facere accusamus. Sequi, impedit doloribus officiis, quidem cupiditate fugiat perferendis veritatis autem soluta, pariatur numquam eaque sint. Quibusdam voluptatum eaque reprehenderit? Cum asperiores rerum numquam quibusdam minima repellendus, temporibus porro suscipit quam reprehenderit? Veritatis laborum nihil vitae.</Text>
      </View>
    </View>
  );
};

export default Home;
