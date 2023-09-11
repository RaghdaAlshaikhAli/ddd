import React from "react";

// Router
import { Route, Routes } from "react-router-dom";

// pages
import {
    Chat, Login, Profile, Register,
    SellerProfile, Order, ServiceDetailsPage,
    Categories, Home, Service, Filter, SellerSection, FavoritePage, NotFound, Subcategory
} from "../pages";
import About from "../pages/Profile/About";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} >
                <Route path="about/:id" element={<About />} />
            </Route>
            <Route path="/sellerProfile" element={<SellerProfile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/order" element={<Order />} />
            <Route path="/subCategory/:subCatId/service" element={<Service />} />
            <Route path="/details" element={<ServiceDetailsPage />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/seller" element={<SellerSection />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="/category" element={<Categories />} />
            <Route path="/category/:CatId/subCategory" element={<Subcategory />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Router;
