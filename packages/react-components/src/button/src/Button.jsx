/* eslint-disable react/forbid-foreign-prop-types */

import { Children, forwardRef, useCallback } from "react";
import { EmbeddedIcon } from "../../icons";
import { SIZE, SemanticRef, createEmbeddableAdapter, mergeClasses, throwWhenUnsupportedPropIsProvided, useAutofocus, useMergedRefs } from "../../shared";
import { Button as SemanticButton } from "semantic-ui-react";
import { bool, element, number, oneOf } from "prop-types";
import { embedBadge } from "../../badge";
import { isNil } from "lodash";

const SIZES = ["micro", "mini", "tiny", "small", "medium", "large"];
const UNSUPPORTED_PROPS = ["animated", "attached", "color", "labelPosition", "floated", "inverted"];

const propTypes = {
    /**
     * A ghost button doesn't have a background color until it's hovered.
     */
    ghost: bool,
    /**
     * A button can look like a link.
     */
    link: bool,
    /**
     * [Icon](/?path=/docs/components-icon--default-story) component rendered before or after the text.
     */
    icon: element,
    /**
     * An icon can appear on the left or right side of the text.
     */
    iconPosition: oneOf(["left", "right"]),
    /**
     * [Badge](/?path=/docs/components-badge--default-story) component rendered before the text.
     */
    badgeLeft: element,
    /**
     * [Badge](/?path=/docs/components-badge--default-story) component rendered after the text.
     */
    badgeRight: element,
    /**
     * A button can be colorless. Use this variant if you need to customize the button.
     */
    naked: bool,
    /**
     * Whether or not the checkbox should autofocus on render.
     */
    autofocus: bool,
    /**
     * Delay before trying to autofocus.
     */
    autofocusDelay: number,
    /**
     * A button can vary in sizes.
     */
    size: oneOf(SIZES),
    /**
     * The button type.
     */
    type: oneOf(["button", "submit", "reset"])
};

const defaultProps = {
    iconPosition: "left",
    type: "button"
};

export function InnerButton(props) {
    const {
        basic,
        ghost,
        link,
        naked,
        icon,
        iconPosition,
        badgeLeft,
        badgeRight,
        autofocus,
        autofocusDelay,
        size,
        focus,
        hover,
        loading,
        disabled,
        className,
        forwardedRef,
        children,
        ...rest
    } = props;
    throwWhenUnsupportedPropIsProvided(props, UNSUPPORTED_PROPS, "@orbit-ui/react-components/Button");

    const innerRef = useMergedRefs(forwardedRef);

    const setFocus = useCallback(() => {
        if (!isNil(innerRef.current)) {
            innerRef.current.focus();
        }
    }, [innerRef]);

    const autofocusProps = useAutofocus(autofocus, autofocusDelay, disabled, setFocus);

    const hasText = Children.count(children) > 0;

    const iconMarkup = !isNil(icon) && (
        <EmbeddedIcon size={size} standalone={!hasText}>{icon}</EmbeddedIcon>
    );

    const badgeLeftMarkup = !isNil(badgeLeft) && embedBadge(badgeLeft, {
        size,
        highlight: true,
        disabled
    });

    const badgeRightMarkup = !isNil(badgeRight) && embedBadge(badgeRight, {
        size,
        highlight: true,
        disabled
    });

    const content = (
        <>
            {iconPosition === "left" && iconMarkup}{badgeLeftMarkup}
            {children}
            {iconPosition === "right" && iconMarkup}{badgeRightMarkup}
        </>
    );

    return (
        <SemanticRef innerRef={innerRef}>
            <SemanticButton
                data-testid="button"
                {...rest}
                {...autofocusProps}
                basic={basic}
                size={size}
                loading={loading}
                disabled={disabled}
                className={mergeClasses(
                    naked && "naked",
                    ghost && "ghost",
                    link && "link",
                    iconMarkup && "with-icon",
                    iconMarkup && iconPosition === "left" && "with-left-icon",
                    iconMarkup && iconPosition === "right" && "with-right-icon",
                    badgeLeftMarkup && "with-left-badge",
                    badgeRightMarkup && "with-right-badge",
                    !hasText && "fitted",
                    focus && "focus",
                    hover && "hover",
                    className)
                }
            >
                {content}
            </SemanticButton>
        </SemanticRef>
    );
}

InnerButton.propTypes = propTypes;
InnerButton.defaultProps = defaultProps;

export const Button = forwardRef((props, ref) => (
    <InnerButton { ...props } forwardedRef={ref} />
));

// Button.Or is not supported yet.
[InnerButton, Button].forEach(x => {
    x.Content = SemanticButton.Content;
    x.Group = SemanticButton.Group;
});

if (!isNil(SemanticButton.propTypes)) {
    SemanticButton.propTypes.size = oneOf(SIZES);
}

export const embedButton = createEmbeddableAdapter({
    [SIZE.micro]: SIZE.micro,
    [SIZE.mini]: SIZE.micro,
    [SIZE.tiny]: SIZE.micro,
    [SIZE.small]: SIZE.mini,
    [SIZE.medium]: SIZE.tiny,
    [SIZE.large]: SIZE.small
});




