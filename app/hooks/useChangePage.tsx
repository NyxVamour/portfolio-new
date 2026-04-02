import { useGSAP } from "@gsap/react";
import gsap from "../client/gsapClient";
import type { pageRefsProps } from "~/features/masterLayout/MasterLayout";
import { useEffect, useState } from "react";

export default function useChangePage(
    currentPage: string,
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>,
    pageRefs: pageRefsProps,
) {
    gsap.registerPlugin(useGSAP);
    const {
        backgroundLayerRef,
        hackingRef,
        profileRef,
        aboutRef,
        hackingWindowRef,
        closeProfileBtnRef,
        closeAboutBtnRef,
    } = pageRefs;

    const [previousPage, setPreviousPage] = useState("home");

    function closeHome(tl: gsap.core.Timeline) {
        tl.to(hackingWindowRef.current, {
            scaleX: 0,
            autoAlpha: 0,
        });
    }

    function openHome(tl: gsap.core.Timeline) {
        tl.to(hackingWindowRef.current, {
            scaleX: 1,
            autoAlpha: 1,
        });
    }

    function openPage(
        tl: gsap.core.Timeline,
        pageRef:
            | React.RefObject<HTMLDivElement | null>
            | React.RefObject<HTMLElement | null>,
    ) {
        tl.to(pageRef.current, {
            autoAlpha: 1,
        }).to(
            backgroundLayerRef.current,
            {
                filter: "blur(8px)",
            },
            "<",
        );
        // .set("._blurLayer_loggy_1", {
        //     backdropFilter: "blur(8px)",
        // });
    }

    function closePage(
        tl: gsap.core.Timeline,
        pageRef: React.RefObject<HTMLDivElement | null>,
    ) {
        if (!pageRef.current) return;

        tl.to(pageRef.current, {
            autoAlpha: 0,
        }).to(
            backgroundLayerRef.current,
            {
                filter: "blur(0px)",
            },
            "<",
        );
    }

    function getCurrentRef(currentPage: string) {
        switch (currentPage) {
            case "profile":
                return profileRef;
            case "about":
                return aboutRef;
            default:
                break;
        }
    }

    useEffect(() => {
        function closeBtnAction() {
            setCurrentPage("home");
        }

        const elProfile = closeProfileBtnRef.current;
        const elAbout = closeAboutBtnRef.current;

        if (!elProfile || !elAbout) return;
        elProfile.addEventListener("click", closeBtnAction);
        elAbout.addEventListener("click", closeBtnAction);

        return () => {
            if (!elProfile && !elAbout) return;
            elProfile.removeEventListener("click", closeBtnAction);
            elAbout.removeEventListener("click", closeBtnAction);
        };
    }, [closeProfileBtnRef]);

    useGSAP(() => {
        const tl = gsap.timeline();
        switch (currentPage) {
            case "home":
                const currentRef = getCurrentRef(previousPage);
                console.log(currentRef);
                if (currentRef) {
                    closePage(tl, currentRef);
                    openHome(tl);
                }
                break;
            case "profile":
                closeHome(tl);
                openPage(tl, profileRef);
                setPreviousPage("profile");
                break;
            case "about":
                closeHome(tl);
                openPage(tl, aboutRef);
                setPreviousPage("about");
            default:
                break;
        }
    }, [currentPage]);
}
