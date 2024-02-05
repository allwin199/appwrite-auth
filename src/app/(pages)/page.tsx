"use client";

import useAuth from "@/context/useAuth";
import React from "react";
import ProfileCard from "@/components/ProfileCard";
import Login from "@/components/Login";

const Home = () => {
    const { authStatus } = useAuth();
    return (
        <div className="w-full max-w-7xl mx-auto px-8">
            {authStatus ? (
                <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <ProfileCard />
                </section>
            ) : (
                <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <Login />
                </section>
            )}
        </div>
    );
};

export default Home;
