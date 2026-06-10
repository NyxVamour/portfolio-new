import { useGSAP } from "@gsap/react";
import gsap from "~/client/gsapClient";
import { useEffect } from "react";
import type { pageRefsProps } from "~/features/masterLayout/MasterLayout";
import { projectsData, type ProjectDataProps } from "../data/projectsData";

type useChangeSubpageProps = {
    selectedProjectID: number;
    setSelectedProjectID: React.Dispatch<React.SetStateAction<number>>;
    setProjectInfo: React.Dispatch<
        React.SetStateAction<ProjectDataProps | undefined>
    >;
    pageRefs: pageRefsProps;
};

export default function useChangeSubpage({
    selectedProjectID,
    setSelectedProjectID,
    setProjectInfo,
    pageRefs,
}: useChangeSubpageProps) {
    const { subpageRef, closeSubpageBtnRef } = pageRefs;

    gsap.registerPlugin(useGSAP);

    function changeInfo() {
        const data = projectsData.find((data) => data.id === selectedProjectID);
        setProjectInfo(data);
    }

    function openSubpage(tl: gsap.core.Timeline) {
        tl.to(subpageRef.current, {
            autoAlpha: 1,
        });
    }

    useEffect(() => {
        function closeBtnAction() {
            setSelectedProjectID(0);
        }

        const subpageBtn = closeSubpageBtnRef.current;

        if (!subpageBtn) return;
        subpageBtn.addEventListener("click", closeBtnAction);

        return () => {
            if (!subpageBtn) return;
            subpageBtn.removeEventListener("click", closeBtnAction);
        };
    }, [closeSubpageBtnRef]);

    useGSAP(() => {
        const tl = gsap.timeline();
        changeInfo();
        openSubpage(tl);
    }, [selectedProjectID]);

    useEffect(() => {
        console.log(selectedProjectID);
    }, [selectedProjectID]);
}
