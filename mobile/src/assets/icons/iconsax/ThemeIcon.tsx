import * as React from "react";

import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";

import { IconProps } from "@src/common/interfaces";
import { IconSize, IconStrokeWidth } from "@src/common/theme";
import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";

export const ThemeIcon = withTouchable(
    ({ size = IconSize.normal, strokeWidth = IconStrokeWidth.default, color }: IconProps) => {
        const { pallette } = useTheme();

        return (
            <Box height={size} width={size}>
                <Svg height="100%" viewBox="0 0 24 24" width="100%">
                    <Path
                        d="M20 8c0-2 0-3-3-3h-1M10 16c0-1.66 0-3 3-3h4c2.03 0 2.68-.46 2.9-1.37M12 2H8a9.475 9.475 0 0 0 0 6h4c.65-1.95.65-4.05 0-6Z"
                        stroke={color || pallette.black}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={strokeWidth}
                    />
                    <Path
                        d="M8 2H7C5 2 4 3 4 5s1 3 3 3h1C7 6 7 4 8 2ZM13 2h-1c1 2 1 4 0 6h1c2 0 3-1 3-3s-1-3-3-3ZM9.5 22h1c1.5 0 1.5-1 1.5-1.5v-3c0-.5 0-1.5-1.5-1.5h-1C8 16 8 17 8 17.5v3C8 21 8 22 9.5 22Z"
                        stroke={color || pallette.black}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={strokeWidth}
                    />
                </Svg>
            </Box>
        );
    }
);
