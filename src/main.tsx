import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { LogMessageContext } from "@/lib/log-message-context";
import queryClient from "@/lib/queryClient";

import router from "@/router";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <LogMessageContext.Provider value="Hello from">
                <RouterProvider router={router} />
            </LogMessageContext.Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
