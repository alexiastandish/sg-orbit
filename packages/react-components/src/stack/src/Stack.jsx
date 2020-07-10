import "./Stack.css";

import { any, bool, elementType, oneOf, oneOfType, string } from "prop-types";
import { forwardRef } from "react";
import { mergeClasses } from "../../shared";

const SPACING = [
    "--scale-alpha",
    "--scale-bravo",
    "--scale-charlie",
    "--scale-delta",
    "--scale-echo",
    "--scale-foxtrot",
    "--scale-golf",
    "--scale-hotel",
    "--scale-india",
    "--scale-juliett",
    "--scale-kilo",
    "--scale-lima",
    "--scale-mike"
];

const propTypes = {
    /**
     * Determine how the elements are placed in the container.
     */
    direction: oneOf(["horizontal", "vertical"]),
    /**
     * Determine how the elements are aligned in the container along the main axis (view flexbox align-items).
     */
    align: oneOf(["start", "end", "center"]),
    /**
     * Determine how the elements are aligned in the container along the cross axis (view flexbox justify-content).
     */
    justify: oneOf(["start", "end", "center"]),
    /**
     * Spacing scale between each elements.
     */
    spacing: oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
    /**
     * Whether or not the stack take up the width & height of its container.
     */
    fluid: bool,
    /**
     * An HTML element type or a custom React element type to render as.
     */
    as: oneOfType([string, elementType]),
    /**
     * @ignore
     */
    children: any.isRequired
};

const defaultProps = {
    direction: "horizontal",
    as: "div"
};

export function InnerStack({ direction, align, justify, spacing, fluid, as: ElementType, className, style, children, forwardedRef, ...rest }) {
    return (
        <ElementType
            {...rest}
            className={mergeClasses(
                "o-ui stack",
                direction,
                align && `align-${align}`,
                justify && `justify-${justify}`,
                fluid && "fluid",
                className
            )}
            style={{
                "--spacing": `var(${SPACING[(spacing || 5) - 1]})`,
                ...style
            }}
            ref={forwardedRef}
        >
            {children}
        </ElementType>
    );
}

InnerStack.propTypes = propTypes;
InnerStack.defaultProps = defaultProps;

export const Stack = forwardRef((props, ref) => (
    <InnerStack { ...props } forwardedRef={ref} />
));