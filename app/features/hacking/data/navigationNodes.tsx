export type Direction = "up" | "down" | "left" | "right";
export type NodeID =
    | "a1"
    | "a2"
    | "a3"
    | "b2"
    | "b3"
    | "b4"
    | "c1"
    | "c2"
    | "c3"
    | "d2"
    | "d3";

export type Connection = {
    up?: NodeID;
    down?: NodeID;
    left?: NodeID;
    right?: NodeID;
};

export interface Node {
    id: string;
    type: "link" | "empty";
    connectedTo: Connection;
    filterID: string;
    textBoxFilterID?: string;
    enterID?: string;
}

interface NodesObj {
    [key: string]: Node;
}

export const nodeIDs: NodeID[] = [
    "a1",
    "a2",
    "a3",
    "b2",
    "b3",
    "b4",
    "c1",
    "c2",
    "c3",
    "d2",
    "d3",
];

export const nodes: NodesObj = {
    a1: {
        id: "a1",
        type: "link",
        connectedTo: {
            right: "a2",
        },
        filterID: "filter14_d_2234_1041",
        textBoxFilterID: "filter13_d_2234_1041",
        enterID: "ENTER_4",
    },
    a2: {
        id: "a2",
        type: "empty",
        connectedTo: {
            left: "a1",
            down: "b2",
            right: "a3",
        },
        filterID: "filter12_d_2234_1041",
    },
    a3: {
        id: "a3",
        type: "empty",
        connectedTo: {
            left: "a2",
        },
        filterID: "filter10_d_2234_1041",
    },
    b2: {
        id: "b2",
        type: "empty",
        connectedTo: {
            up: "a2",
            down: "c2",
            right: "b3",
        },
        filterID: "filter11_d_2234_1041",
    },
    b3: {
        id: "b3",
        type: "empty",
        connectedTo: {
            left: "b2",
            right: "b4",
        },
        filterID: "filter2_d_2234_1041",
    },
    b4: {
        id: "b4",
        type: "link",
        connectedTo: {
            left: "b3",
        },
        filterID: "filter9_d_2234_1041",
        textBoxFilterID: "filter8_d_2234_1041",
        enterID: "ENTER_3",
    },
    c1: {
        id: "c1",
        type: "link",
        connectedTo: {
            right: "c2",
        },
        filterID: "filter5_d_2234_1041",
        textBoxFilterID: "filter4_d_2234_1041",
        enterID: "ENTER",
    },
    c2: {
        id: "c2",
        type: "empty",
        connectedTo: {
            up: "b2",
            left: "c1",
            right: "c3",
        },
        filterID: "filter3_d_2234_1041",
    },
    c3: {
        id: "c3",
        type: "empty",
        connectedTo: {
            left: "c2",
            down: "d3",
        },
        filterID: "filter0_d_2234_1041",
    },
    d2: {
        id: "d2",
        type: "link",
        connectedTo: {
            right: "d3",
        },
        filterID: "filter7_d_2234_1041",
        textBoxFilterID: "filter6_d_2234_1041",
        enterID: "ENTER_2",
    },
    d3: {
        id: "d3",
        type: "empty",
        connectedTo: {
            left: "d2",
            up: "c3",
        },
        filterID: "filter1_d_2234_1041",
    },
} as const;
