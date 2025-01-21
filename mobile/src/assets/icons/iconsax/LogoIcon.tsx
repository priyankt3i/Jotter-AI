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

export const LogoIcon = withTouchable(({ size = IconSize.normal, color, secondaryColor, opacity }: Props) => {
    const { pallette } = useTheme();

    return (
        <Box height={size} opacity={opacity} width={size}>
            <Svg fill="none" height="100%" viewBox="0 0 24 24" width="100%">
                <Path
                    d="M21 22H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM19.02 3.48c-1.94-1.94-3.84-1.99-5.83 0l-1.21 1.21c-.1.1-.14.26-.1.4a8.129 8.129 0 0 0 5.53 5.53.4.4 0 0 0 .41-.1l1.2-1.21c.99-.98 1.47-1.93 1.47-2.89.01-.99-.47-1.95-1.47-2.94Z"
                    fill={secondaryColor || color || pallette.black}
                    opacity={Opacity.partiallyVisible}
                />
                <Path
                    d="M15.61 11.53c-.29-.14-.57-.28-.84-.44a8.8 8.8 0 0 1-.64-.42c-.17-.11-.37-.27-.56-.43a1.22 1.22 0 0 1-.17-.15c-.33-.28-.7-.64-1.03-1.04-.03-.02-.08-.09-.15-.18-.1-.12-.27-.32-.42-.55a5.49 5.49 0 0 1-.39-.59c-.16-.27-.3-.54-.44-.82-.14-.3-.25-.59-.35-.86l-6.28 6.28c-.13.13-.25.38-.28.55l-.54 3.83c-.1.68.09 1.32.51 1.75.36.35.86.54 1.4.54.12 0 .24-.01.36-.03l3.84-.54c.18-.03.43-.15.55-.28l6.28-6.28c-.28-.1-.55-.21-.85-.34Z"
                    fill={color || pallette.black}
                />
            </Svg>
        </Box>
    );
});
