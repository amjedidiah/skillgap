import {
  Alert,
  FlatList,
  Image,
  Modal,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BlockUserModalCompPropTypes,
  UserProfileHomeSubMenuPropType,
} from "../types";
import AppTextHeading from "./AppTextHeading";
import AppTextContent from "./AppTextContent";
import AppButton from "./AppButton";
import {
  PersonaliseSettingModalCompData,
  listOfBlockedUsers,
} from "utils/data";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Magic } from "@magic-sdk/react-native-expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { logOutAction } from "redux/slices/authSlice";
import { useMutation } from "@tanstack/react-query";
import { logOutApi } from "@/api/authApi";
import AlertMessage from "./AlertMessage";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-message";

export const UserProfileHomeSubMenuComp = ({
  icon,
  heading,
  content,
  imgType,
  setShowDeleteModal,
  setShowLogOutModal,
  showDeleteModal,
  personaliseSettingModal,
  setPersonaliseSettingModal,
}: UserProfileHomeSubMenuPropType) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        if (heading === "Delete Account") {
          setShowDeleteModal(true);
        }
        if (heading === "Personalized Setting") {
          setPersonaliseSettingModal(true);
        }
        if (heading === "Log Out") {
          setShowLogOutModal(true);
        }
        if (heading === "Account Settings") {
          navigation.navigate("profileSettingsScreen");
        }
      }}
      className={` flex-row ${content ? "items-start" : "items-center"} space-x-2  mt-4`}
    >
      <View className="w-7 h-7 rounded-md bg-blue-800 justify-center items-center ">
        <Image
          source={icon}
          className={`${imgType ? "w-[15.5px] h-5" : "w-5 h-5"}`}
        />
      </View>
      <View>
        <AppTextHeading text={heading} classText="text-base leading-[16px]" />
        {content && <AppTextContent text={content} classText="text-[12px]" />}
      </View>
    </TouchableOpacity>
  );
};

export const DeleteAccountModalComp = ({
  showDeleteModal,
  setShowDeleteModal,
}) => {
  return (
    <Modal visible={showDeleteModal} animationType="slide" transparent={true}>
      <View
        className="flex-1 justify-center items-center"
        style={{
          backgroundColor: "rgba(29, 155, 240, 0.5)",
        }}
      >
        <View className="rounded-md bg-white px-4 w-4/5  items-center py-6">
          <Image
            source={require("../../../assets/images/deleteAccount.png")}
            className="w-[80px] h-[80px]"
          />
          <AppTextHeading text="Wait a minute" classText="text-center mt-4" />
          <AppTextContent
            text="Are you sure you want to delete your skillgap account?"
            classText="text-center  w-[300px] mt-4"
          />
          <View className="flex-row items-center justify-between  w-full mt-4">
            <AppButton
              handleOnpress={() => {
                setShowDeleteModal(false);
              }}
              text="Yes"
              ButtonViewStyle="w-[120px] bg-white border-red-500 border"
              ButtonTextStyle="text-red-500"
            />
            <AppButton
              handleOnpress={() => {
                setShowDeleteModal(false);
              }}
              text="No"
              ButtonViewStyle="w-[120px] bg-red-500"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const LogOutModalComp = ({ showLogOutModal, setShowLogOutModal }) => {
  const [showModalLogOut, setShowModalLogOut] = useState(false);
  const [errorMessageLogOut, setErrorMesageLogOut] = useState("");
  const [errorTypeLogOut, setErrorTypeLogOut] = useState(null);
  const [runUseEffect, setRunUseEffect] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const magic = new Magic("pk_live_AF0A2FCCABF5C8EF");

  const dispatch = useDispatch();
  const userEmailData =
    useSelector((data) => data?.authReducer?.user?.userEmail) || "";
  const userEmail = userEmailData ? userEmailData : "";
  const jwt = useSelector((data) => data?.authReducer?.user?.jwt);

  // valaidte email mutation

  const logOutUserMutation = useMutation({
    mutationKey: ["logOut-user"],
    mutationFn: logOutApi,
  });

  const {
    date: logOutData,
    isError: logOutError,
    error: logOutErrorData,
    isPending: logOutPending,
    isSuccess: logOutSuccess,
  } = logOutUserMutation;

  useEffect(() => {
    const handleState = async () => {
      console.log("use Efffet ran");
      // console.log("ran useEffect");
      if (logOutError && runUseEffect) {
        // setShowModalLogOut(false);

        // setErrorTypeLogOut(null);
        setDisableButton(false);
        const errorMessage =
          logOutErrorData?.response?.data.message || logOutErrorData?.message;
        // setErrorMesageLogOut("");
        Toast.show({
          type: "error",
          text1: "LogOut Error",
          text2: errorMessage,
          visibilityTime: 4000,
          position: "top",
          topOffset: StatusBar?.currentHeight + 16,
          text1Style: {
            fontSize: 14,
            fontWeight: "bold",
            color: "red",
          },
          text2Style: {
            fontSize: 12,
            fontWeight: "bold",
            color: "gray",
            backgroundColor: "white",
          },
        });

        // console.log("ran error");
      }

      if (logOutPending && runUseEffect) {
        // setShowModalLogOut(true);
        // setErrorTypeLogOut("loading");
        // setErrorMesageLogOut("");
      }

      if (logOutSuccess && runUseEffect) {
        console.log("logOut data", logOutData);

        await magic.user?.logout();
        dispatch(logOutAction());
        setDisableButton(false);
        setRunUseEffect(false);
      }
    };
    handleState();
  }, [logOutSuccess, logOutPending, logOutError]);

  /// console.log("app state from logOut", userEmail, jwt)
  return (
    <Modal visible={showLogOutModal} animationType="slide" transparent={true}>
      {/* <Modal visible={showModalLogOut} transparent={true} animationType="fade">
        <AlertMessage
          message={errorMessageLogOut}
          type={errorTypeLogOut}
          setShowModal={setShowModalLogOut}
        />
      </Modal> */}
      <View
        className="flex-1 justify-center items-center"
        style={{
          backgroundColor: "rgba(78, 78, 78, 0.2)",
        }}
      >
        <View className="rounded-md bg-white px-4 w-4/5  items-center py-6">
          <Image
            source={require("../../../assets/images/deleteAccount.png")}
            className="w-[80px] h-[80px]"
          />
          <AppTextHeading text="Wait a minute" classText="text-center mt-4" />
          <AppTextContent
            text="Are you sure you want to logout?"
            classText="text-center  w-[300px] mt-4"
          />
          <View className="flex-row items-center justify-between  w-full mt-4">
            <AppButton
              disabled={disableButton}
              handleOnpress={async () => {
                try {
                  setDisableButton(true);
                  setRunUseEffect(true);
                  await logOutUserMutation.mutateAsync({
                    email: userEmail,
                    jwt,
                  });
                } catch (error) {
                  console.log(error);
                }
              }}
              text={disableButton ? "Loading..." : "Yes"}
              ButtonViewStyle="w-[120px] bg-white border-red-500 border"
              ButtonTextStyle="text-red-500"
            />
            <AppButton
              disabled={disableButton}
              handleOnpress={() => {
                setRunUseEffect(false);
                setDisableButton(false);
                setShowLogOutModal(false);
              }}
              text="No"
              ButtonViewStyle="w-[120px] bg-red-500"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const PersonaliseSettingModalComp = ({
  personaliseSettingModal,
  setPersonaliseSettingModal,
}) => {
  return (
    <Modal
      visible={personaliseSettingModal}
      animationType="slide"
      transparent={true}
    >
      <View
        className="flex-1 items-center justify-end"
        style={{
          backgroundColor: "rgba(29, 155, 240, 0.5)",
        }}
      >
        <View className="rounded-t-[30px]  bg-white px-4 w-full  items-center py-6">
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setPersonaliseSettingModal(false);
            }}
            className="w-full mb-4"
          >
            <Image
              source={require("../../../assets/images/arrow-left.png")}
              className="w-8 h-8"
            />
          </TouchableOpacity>

          {PersonaliseSettingModalCompData.map((item) => (
            <View key={item.id} className="flex-row px-4 mt-2">
              <View className="flex-1">
                <AppTextHeading
                  text={item.heading}
                  classText="w-[300px] text-[15px]"
                />
                <AppTextContent
                  text={item.content}
                  classText="text-[14px] w-full leading-[15px]"
                />
              </View>
              <TouchableOpacity>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={34}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          ))}
          <View></View>
        </View>
      </View>
    </Modal>
  );
};

export const BlockUserModalComp = ({
  showBlockUserModal,
  setShowBlockUserModal,
}: BlockUserModalCompPropTypes) => {
  return (
    <Modal
      visible={showBlockUserModal}
      animationType="slide"
      transparent={true}
    >
      <View
        className="flex-1 justify-center items-center"
        style={{
          backgroundColor: "rgba(29, 155, 240, 0.5)",
        }}
      >
        <View className="rounded-md bg-white px-8 w-4/5  items-center py-6">
          <Image
            source={require("../../../assets/images/success.png")}
            className="w-[80px] h-[80px]"
          />
          <AppTextHeading text="It’s a wrap" classText="text-center mt-4" />
          <AppTextContent
            text="You have successfully blocked @qubigs. you can go ahead and view all block users in your block list"
            classText="text-center  w-[280px] mt-1"
          />
          <View className="flex-row items-center justify-between  w-full mt-4">
            <AppButton
              handleOnpress={() => {
                setShowBlockUserModal(false);
              }}
              text="View Block List"
              ButtonViewStyle="w-full bg-sky-500"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const PersonalSettingBlockUserListComp = () => {
  return (
    <View>
      <View className="mb-2 mt-4">
        <AppTextHeading text="Blocked Users" classText="text-[16px]" />
      </View>

      <FlatList
        ItemSeparatorComponent={() => <View className="h-4" />}
        data={listOfBlockedUsers}
        renderItem={({ item }) => {
          return (
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-start space-x-1">
                {/* user image start */}
                <View className="w-[50px] h-[50px] rounded-full border-2 border-white overflow-hidden justify-center items-center ">
                  <Image source={item.img} className="w-full h-full" />
                </View>
                {/* user image end  */}
                {/* user bio starts */}
                <View className="">
                  <AppTextHeading text={item.heading} classText="text-[16px]" />
                  <Text className="text-neutral-700 text-[12px] font-normal font-['GeneralSans-Regular'] leading-[12px] ">
                    Date blocked{" "}
                    <Text className="text-neutral-400  font-bold font-['GeneralSans-Regular'] text-[12px] leading-[12px]">
                      {item.time}
                    </Text>
                  </Text>
                </View>
                {/* user bio ends */}
              </View>

              <TouchableOpacity
                className="bg-sky-500 px-3 py-3 rounded-lg items-center justify-center"
                activeOpacity={0.8}
                onPress={() => {
                  console.log("pressed");
                }}
              >
                <Text className="text-white text-[12px] font-normal font-['GeneralSans-Regular'] leading-[12px] ">
                  unblock
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
