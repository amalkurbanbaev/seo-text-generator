import { Children, cloneElement, useState } from 'react';

import { TooltipContainer, TooltipText } from './StyledTooltip.styled';

export const StyledTooltip = ({ children, tip, onExample, variant }) => {
    const [isShow, setIsShow] = useState(false);
    return Children.map(children, (child) =>
        cloneElement(
            <TooltipContainer
                onClick={() => onExample()}
                onMouseOver={() => setIsShow(true)}
                onMouseOut={() => setIsShow(false)}
                variant={variant}
            >
                {child}
                {isShow && <TooltipText>{tip}</TooltipText>}
            </TooltipContainer>
        )
    );
};
