import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    LoginPage,
    SignupPage,
    FeedPage
 

} from "../Pages"
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/feed" element={<FeedPage />} />
                
            </Routes>
        </BrowserRouter>
    )
};
