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
        projectsRef,

        hackingWindowRef,

        hackingUITLRef,
        hackingUITRRef,
        hackingUIBLRef,

        profilePortraitRef,
        profileDetailsRef,
        profileThreatRef,
        profileBar1Ref,
        profileBar2Ref,
        profileBox1Ref,
        profileBox2Ref,
        profileBox3Ref,

        profileHeaderRef,
        aboutHeaderRef,
        projectsHeaderRef,

        projectCategoriesRef,
        projectItemRefs,

        closeProfileBtnRef,
        closeAboutBtnRef,
        closeProjectsBtnRef,
    } = pageRefs;

    const [previousPage, setPreviousPage] = useState("home");

    function closeHome(tl: gsap.core.Timeline) {
        tl.fromTo(
            hackingWindowRef.current,
            { clipPath: "inset(0% 0% 0% 0%)" },
            {
                duration: 0.3,
                clipPath: "inset(48% 0% 48% 0%)",
                ease: "none",
            },
        ).fromTo(
            hackingWindowRef.current,
            { clipPath: "inset(48% 0% 48% 0%)", autoAlpha: 1 },
            {
                duration: 0.2,
                clipPath: "inset(50% 50% 50% 50%)",
                ease: "none",
                autoAlpha: 0,
            },
        );
    }

    function startHackingDetailsAnim(tl: gsap.core.Timeline) {
        const topL = hackingUITLRef.current;
        const topR = hackingUITRRef.current;
        const botL = hackingUIBLRef.current;
        tl.fromTo(topL, { autoAlpha: 0, x: -25 }, { autoAlpha: 1, x: 0 }, "1.3")
            .fromTo(topR, { autoAlpha: 0, y: -25 }, { autoAlpha: 1, y: 0 }, "<")
            .fromTo(
                botL,
                { scaleX: 0 },
                { scaleX: 1, transformOrigin: "left left" },
                "<",
            );
    }

    function openHome(tl: gsap.core.Timeline) {
        tl.fromTo(
            hackingWindowRef.current,
            { clipPath: "inset(50% 50% 50% 50%)", autoAlpha: 0 },
            {
                duration: 0.3,
                clipPath: "inset(48% 0% 48% 0%)",
                autoAlpha: 1,
                ease: "none",
            },
        ).fromTo(
            hackingWindowRef.current,
            { clipPath: "inset(48% 0% 48% 0%)" },
            {
                duration: 0.2,
                delay: 0.05,
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
            },
        );
    }

    function openPage(
        tl: gsap.core.Timeline,
        pageRef:
            | React.RefObject<HTMLDivElement | null>
            | React.RefObject<HTMLElement | null>,
        headerRef: React.RefObject<HTMLDivElement | null>,
    ) {
        const page = pageRef.current;
        const bg = backgroundLayerRef.current;
        const header = headerRef.current;
        tl.to(page, {
            duration: 0.2,
            autoAlpha: 1,
        })
            .to(
                bg,
                {
                    duration: 0.2,
                    filter: "blur(8px)",
                },
                "<",
            )
            .fromTo(
                header,
                { scaleX: 0 },
                {
                    duration: 0.4,
                    transformOrigin: "left center",
                    scaleX: 1,
                },
                ">0.2",
            )
            .fromTo(
                header,
                { autoAlpha: 0 },
                { duration: 0.3, autoAlpha: 1, ease: "none" },
                "<",
            );
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

    function animateProfile(tl: gsap.core.Timeline) {
        const portrait = profilePortraitRef.current;
        const details = profileDetailsRef.current;
        const threat = profileThreatRef.current;
        const bar1 = profileBar1Ref.current;
        const bar2 = profileBar2Ref.current;
        const box1 = profileBox1Ref.current;
        const box2 = profileBox2Ref.current;
        const box3 = profileBox3Ref.current;

        tl.fromTo(
            portrait,
            { scaleY: 0, autoAlpha: 0 },
            { duration: 0.3, scaleY: 1, autoAlpha: 1 },
        )
            .fromTo(
                details,
                { scaleX: 0 },
                { scaleX: 1, transformOrigin: "left left" },
            )
            .fromTo(
                box1,
                { x: -35, autoAlpha: 0 },
                { duration: 0.4, x: 0, autoAlpha: 1 },
                "<",
            )
            .fromTo(
                box2,
                { x: -35, autoAlpha: 0 },
                { duration: 0.4, x: 0, autoAlpha: 1 },
                ">-0.1",
            )
            .fromTo(
                box3,
                { x: -35, autoAlpha: 0 },
                { duration: 0.4, x: 0, autoAlpha: 1 },
                ">-0.1",
            )
            .fromTo(
                bar1,
                { scaleX: 0 },
                {
                    duration: 1.9,
                    scaleX: 1,
                    transformOrigin: "left left",
                    ease: "none",
                },
                "1.5",
            )
            .fromTo(
                bar2,
                { scaleX: 0 },
                {
                    duration: 1.5,
                    scaleX: 1,
                    transformOrigin: "left left",
                    ease: "none",
                },
                ">-0.8",
            )
            .to(threat, { duration: 0, autoAlpha: 0 }, "0")
            .to(
                threat,
                {
                    duration: 1,
                    stagger: {
                        from: "start",
                        each: 0.5,
                        repeat: -1,
                        repeatDelay: 0.5,
                        yoyo: true,
                    },
                    autoAlpha: 1,
                },
                "1.5",
            );
    }

    function animateCards(
        tl: gsap.core.Timeline,
        projectItemRefs: React.RefObject<(HTMLLIElement | null)[]>,
        projectCategoriesRef: React.RefObject<HTMLUListElement | null>,
    ) {
        const categs = projectCategoriesRef.current;

        tl.fromTo(categs, { x: -15 }, { duration: 0.5, x: 0 }, "1.2").fromTo(
            categs,
            { autoAlpha: 0 },
            { duration: 0.8, autoAlpha: 1 },
            "<",
        );
        projectItemRefs.current.forEach((item, index) => {
            tl.fromTo(
                item,
                {
                    scale: 1.3,
                    autoAlpha: 0,
                },
                { duration: 0.15, scale: 1, autoAlpha: 1 },
                1.4 + index * 0.08,
            );
        });
    }

    function getCurrentRef(currentPage: string) {
        switch (currentPage) {
            case "profile":
                return profileRef;
            case "about":
                return aboutRef;
            case "projects":
                return projectsRef;
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
        const elProjects = closeProjectsBtnRef.current;

        if (!elProfile || !elAbout || !elProjects) return;
        elProfile.addEventListener("click", closeBtnAction);
        elAbout.addEventListener("click", closeBtnAction);
        elProjects.addEventListener("click", closeBtnAction);

        return () => {
            if (!elProfile && !elAbout && !elProjects) return;
            elProfile.removeEventListener("click", closeBtnAction);
            elAbout.removeEventListener("click", closeBtnAction);
            elProjects.removeEventListener("click", closeBtnAction);
        };
    }, [closeProfileBtnRef]);

    useGSAP(() => {
        const tl = gsap.timeline();
        let headerRef;

        switch (currentPage) {
            case "home":
                const currentRef = getCurrentRef(previousPage);
                if (currentRef) {
                    closePage(tl, currentRef);
                    openHome(tl);
                    startHackingDetailsAnim(tl);
                }
                break;
            case "profile":
                closeHome(tl);
                headerRef = profileHeaderRef;
                openPage(tl, profileRef, headerRef);
                animateProfile(tl);
                setPreviousPage("profile");
                break;
            case "about":
                closeHome(tl);
                headerRef = aboutHeaderRef;
                openPage(tl, aboutRef, headerRef);
                setPreviousPage("about");
                break;
            case "projects":
                closeHome(tl);
                headerRef = projectsHeaderRef;
                openPage(tl, projectsRef, headerRef);
                animateCards(tl, projectItemRefs, projectCategoriesRef);
                setPreviousPage("projects");
            default:
                break;
        }
    }, [currentPage]);
}
