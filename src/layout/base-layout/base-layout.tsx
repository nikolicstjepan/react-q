import Loader from "@/components/loader";
import { useEffect } from "react";
import { useLocation, useNavigation } from "react-router-dom";

function BaseLayout({ children }: { children: React.ReactNode }) {
    const { pathname } = useLocation();
    const { state } = useNavigation();

    const pageLoading = state === "loading";

    useEffect(() => {
        window?.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="bg-dark">
            <main className="container">{children}</main>
            {pageLoading && <Loader />}
        </div>
    );
}

export default BaseLayout;
