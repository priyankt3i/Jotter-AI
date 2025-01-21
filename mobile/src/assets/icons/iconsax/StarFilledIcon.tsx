import * as React from "react";

import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components";

import { IconProps } from "@src/common/interfaces";
import { IconSize, Opacity } from "@src/common/theme";
import { Box } from "@src/components/atoms";
import { withTouchable } from "@src/components/hoc";

interface Props extends IconProps {
    secondaryColor?: string;
}

export const StarFilledIcon = withTouchable(({ size = IconSize.normal, color, secondaryColor, opacity }: Props) => {
    const { pallette } = useTheme();

    return (
        <Box height={size} opacity={opacity} width={size}>
            <Svg fill="none" height="100%" viewBox="0 0 24 24" width="100%">
                <Path
                    d="M5.74 16c.11-.49-.09-1.19-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27.23-.7.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.56 18.44c-.14.14-.38.01-.34-.19L5.74 16Z"
                    fill={secondaryColor || color || pallette.black}
                    opacity={Opacity.partiallyVisible}
                />
                <Path
                    d="M18.7 14.46c-.36.36-.56 1.05-.44 1.54l.69 3.01c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27c-.51 0-1.11-.19-1.77-.58l-2.93-1.74c-.46-.27-1.22-.27-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31-.23-.17-.4-.4-.51-.7L17.21 8.79c.46-.46 1.11-.67 1.74-.56l1.01.17c1.06.18 1.77.66 2 1.36.22.7-.08 1.51-.84 2.27l-2.42 2.43Z"
                    fill={color || pallette.black}
                />
            </Svg>
        </Box>
    );
});
