import { View, Text, Modal } from "react-native";
import React, { useState } from "react";
import { AppModalProp } from "../types";
import AppTextHeading from "./AppTextHeading";
import AppTextContent from "./AppTextContent";
import { AntDesign } from "@expo/vector-icons";
import { modelArray } from "../../../utils/data";

const AppModel = ({ heading, text, compState, showModal }: AppModalProp) => {
  const [state, setState] = useState(1);
  const [modalArrayState, setModalArrayState] = useState(modelArray);

  return (
    <Modal
      visible={showModal}
      className="bg-red-500"
      style={{
        height: "50%",
        backgroundColor: "orange",
      }}
    >
      <View className="bg-red-500">
        <View>
          <AppTextHeading text={heading} />
          <AppTextContent text={text} />
        </View>
        <View>
          <View>
            {modalArrayState.map((item) => {
              if (item.active) {
                return <View className="w-[30px] h-1 bg-gray-950 rounded-lg" />;
              } else {
                return <View className="w-4 h-1 bg-gray-300 rounded-lg" />;
              }
            })}
          </View>

          <View className="flex-row items-center space-y-2">
            <AntDesign name="arrowleft" size={24} color="black" />
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AppModel;
