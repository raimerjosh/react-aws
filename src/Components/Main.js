import React from "react";
import { Welcome } from "./Welcome";
import { HotelInfo } from "./HotelInfo";

export function Main() {
    return (
        <main id="wrapper">
            <Welcome />
            <HotelInfo />
        </main>
    )
}