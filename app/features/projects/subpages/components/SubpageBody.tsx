import { useEffect } from "react";
import type { ProjectDataProps } from "../../data/projectsData";
import EdBroadbent from "../projects/EdBroadbent";
import UrbanSprouts from "../projects/UrbanSprouts";
import type { pageRefsProps } from "~/features/masterLayout/MasterLayout";

// type SubpageBodyProps = {
//     projectInfo?: ProjectDataProps;
// };

export default function SubpageBody({
    projectInfo,
}: {
    projectInfo?: ProjectDataProps;
}) {
    if (!projectInfo) return;
    const ProjectComponent = projectInfo.componentRef;

    return <ProjectComponent />;
}
