import AddCompanyModal from "../../components/modals/AddCompanyModal";
import SelectedStocksComponent from "../../components/lists/SelectedStockComponent";
import Notifications from "../../components/notification/Notification";
import { apiCall } from "../../utils/ApiClient";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserInfo } from "../../types";
// import { getToken } from "firebase/messaging";
import { onMessageListener, getTokenFromFirebase } from "../../utils/firebase";

const DashboardPage = () => {
  // Set the state with type UserInfo
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    notifications: [],
    companies: [],
  });

  // const [notificationState, setNotificationState] = useState({
  //   open: false,
  //   message: "",
  // });

  // const handleNotificationClick = () => {
  //   setNotificationState({
  //     ...notificationState,
  //     open: false,
  //   });
  // };

  // const handleNotificationClose = () => {
  //   setNotificationState({
  //     ...notificationState,
  //     open: false,
  //   });
  // };

  // const requestNotificationPermission = async () => {
  //   try {
  //     const permission = await Notification.requestPermission();
  //     console.log("Permission", permission);
  //     if (permission === "granted") {
  //       const notificationToken = await getToken(messaging, {
  //         vapidKey: import.meta.env.VITE_VAPID_KEY,
  //       });
  //       console.log("Token", notificationToken);
  //       const response = await apiCall({
  //         url: "/api/user/notification-token",
  //         method: "POST",
  //         data: { notificationToken },
  //       });
  //       console.log("Response", response);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    const fetchUserInfo = async () => {
      interface UserInfoResponse {
        data: UserInfo;
      }
      try {
        const response = await apiCall<UserInfoResponse>({
          url: "/api/user",
          method: "GET",
        });
        if (response && response.data) {
          setUserInfo(response.data);
        }
      } catch (err: any) {
        console.log(err);
        toast.error(err.response?.data?.message || "Something went wrong");
      }
    };
    fetchUserInfo();
    // requestNotificationPermission();
    // getTokenFromFirebase()
    //   .then((response) => {
    //     console.log("Token", response);
    //   })
    //   .catch((err) => {
    //     console.log("Error", err);
    //   });
    // onMessageListener()
    //   .then((payload: any) => {
    //     console.log("Payload", payload);
    //     setNotificationState({
    //       open: true,
    //       message: `🗓 ${payload.data.body}`,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(`An error occured when showing notif ${err}`);
    //   });
  }, []);

  return (
    <div className="container ">
      <div className="row text-center py-3">
        <h2 className="text-white">{userInfo.name} Portfolio</h2>
      </div>
      <h3 className="row text-white mx-3">Recent Notification</h3>
      <div className="row mx-2">
        {userInfo?.notifications?.length === 0 ? (
          <h4 className="text-info text-center fs-4">
            No Notification as of Now
          </h4>
        ) : (
          <Notifications setUserInfo={setUserInfo} userInfo={userInfo} />
        )}
      </div>
      <h3 className="row text-white mx-3">Company List</h3>
      <div className="row mx-2">
        {userInfo?.companies?.length === 0 ? (
          <h4 className="text-info text-center fs-4">
            Add Some Companies Stock to view
          </h4>
        ) : (
          <SelectedStocksComponent
            setUserInfo={setUserInfo}
            userInfo={userInfo}
          />
        )}
      </div>
      <div className="row my-3 mx-3">
        <AddCompanyModal setUserInfo={setUserInfo} />
      </div>
    </div>
  );
};

export default DashboardPage;
