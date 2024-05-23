import React from "react";

export type ScreenType = {
    name: string;
    options?: {
        title: string;
    };
    component: React.FC;
}