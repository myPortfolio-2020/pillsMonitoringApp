import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="p-6">
        <Text className="mb-11 font-semibold text-2xl">Profile</Text>
        <Text>Name: Joe</Text>
        <TouchableOpacity>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
