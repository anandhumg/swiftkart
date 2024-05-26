import { useState } from "react";
import Sidebar from "../../../components/Admin/sidebar/sidebar";
import { AdminOverview } from "../overview/overview";
import { ViewAllCustomers } from "../customers/customers";
import { ViewAllSellers } from "../sellers/seller";
import {Settings} from "../settings/setting";
import {Account} from "../account/account";

function Admindashboard() {
  const [activePage, setActivepage] = useState("overview");
  function changePage(currentPage) {
    setActivepage(currentPage);
  }
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <Sidebar changePage={changePage} activePage={activePage} />
      </div>
      <div style={{overflow:'scroll',height:'100vh',width:'100vw'}}>
        {activePage === "overview" && <AdminOverview />}
        {activePage === "customers" && <ViewAllCustomers />}
        {activePage === "sellers" && <ViewAllSellers />}
        {activePage === "settings" && <Settings />}
        {activePage === "account" && <Account />}
      </div>

    </div>
  );
}
export default Admindashboard;
