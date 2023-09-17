import { createElement, forwardRef, useMemo } from "react";
import { ViewProps as RNViewProps } from "react-native";

export type ViewProps = Omit<RNViewProps, "tw"> & {
    tw?: string | Array<string>;
};

const RCTView = forwardRef((props, ref) => {
    return createElement("RCTView", { ...props, ref });
});

RCTView.displayName = "RCTView";

const View = forwardRef(function View({ ...props }: ViewProps, ref: any) {
    return <RCTView {...props} ref={ref} />;
});

View.displayName = "View";

export { View };
