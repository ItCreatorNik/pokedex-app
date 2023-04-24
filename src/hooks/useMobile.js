import { useEffect, useState } from "react";


export const useCheckDesk = () => {

    const mobileBreakpoint = 575;

    const [isMobile, setIsMobile] = useState(
        window.innerWidth < mobileBreakpoint
    );

    const updateMedia = () => {
        setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return {
        isMobile
    }

}