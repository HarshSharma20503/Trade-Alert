// import AddCompanyModal from "../../Components/modals/AddCompanyModal";
// import SelectedStocksComponent from "../../Components/lists/SelectedStockComponent";
// import Notifications from "../../Components/notification/Notifications";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Define the structure for Notification and Company
interface Notification {
  name: string;
  priorityLevel: number;
  url: string;
}

interface Company {
  name: string;
  stockSymbol: string;
  // Add other relevant fields for the company
}

// Define the structure for the UserInfo
interface UserInfo {
  name: string;
  companies: Company[];
  notifications: Notification[];
}

const DashboardPage = () => {
  // Set the state with type UserInfo
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "Harsh",
    companies: [],
    notifications: [],
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const res = await axios.get<{ data: UserInfo }>("/api/user");
        // Update the state with the fetched user data
        setUserInfo(res.data.data);
      } catch (err: any) {
        console.log(err);
        toast.error(err.response?.data?.message || "Something went wrong");
      }
    };
    // fetchUserInfo();
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
          <></>
          // <Notifications setUserInfo={setUserInfo} userInfo={userInfo} />
        )}
      </div>
      <h3 className="row text-white mx-3">Company List</h3>
      <div className="row mx-2">
        {userInfo?.companies?.length === 0 ? (
          <h4 className="text-info text-center fs-4">
            Add Some Companies Stock to view
          </h4>
        ) : (
          <></>
          // <SelectedStocksComponent
          //   setUserInfo={setUserInfo}
          //   userInfo={userInfo}
          // />
        )}
      </div>
      <div className="row my-3 mx-3">
        {/* <AddCompanyModal setUserInfo={setUserInfo} /> */}
      </div>
    </div>
  );
};

export default DashboardPage;
