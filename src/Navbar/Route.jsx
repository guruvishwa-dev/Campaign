import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { DoubleNavbar } from "./DoubleNavbar";
import { CampaignPage } from "../Campaign/CampaignHome";
import { CampiagnPerformance } from "../Campaign/CampaignPerformance";
import { ChatHome } from "../ChatBot";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DoubleNavbar />}> {/* Set DoubleNavbar as the layout */}
            {/* <Route path="/" element={<Navigate to={"/dashboard"} />} />
            <Route path="dashboard" element={<div>Welcome to Dashboard</div>} /> Default content */}
            <Route path="campaign">
                <Route path="home" element={<CampaignPage />} />
                <Route path="performance" element={<CampiagnPerformance />} />
                <Route path="chatBot" element={<ChatHome />} />

            </Route>
        </Route>
    )
);

export default routes;
