import { ArgumentError, SemanticRef, mergeClasses, throwWhenUnsupportedPropIsProvided, useAutofocus, useCombinedRefs } from "../../shared";
import { Checkbox as SemanticCheckbox } from "semantic-ui-react";
import { arrayOf, bool, element, func, number, object, oneOf, oneOfType, string } from "prop-types";
import { cloneElement, forwardRef, useCallback } from "react";
import { createContentIcon } from "../../icons";
import { createCount } from "../../count";
import { createLabel, getContentLabelSize } from "../../label";
import { isArray, isNil } from "lodash";
import { isElement } from "react-is";

// Sizes constants are duplicated here until https://github.com/reactjs/react-docgen/pull/352 is merged. Otherwise it will not render properly in the docs.
const SIZES = ["small", "medium", "large"];
const DEFAULT_SIZE = "medium";

const UNSUPPORTED_PROPS = ["slider", "type", "radio", "toggle"];

export const CHECKBOX_PROP_TYPES = {
    /**
     * Whether or not the checkbox should autofocus on render.
     */
    autofocus: bool,
    /**
     * Delay before trying to autofocus.
     */
    autofocusDelay: number,
    /**
     * The text associated to the checkbox.
     */
    text: string,
    /**
     * [Shorthand](/?path=/docs/getting-started-shorthand-props--page) to display [icons](/?path=/docs/components-icon--default-story) after the text.
     */
    icons: oneOfType([element, arrayOf(element)]),
    /**
     * [Shorthand](/?path=/docs/getting-started-shorthand-props--page) to display a [label](/?path=/docs/components-label--default-story) after the text.
     */
    label: oneOfType([element, object]),
    /**
     * [Shorthand](/?path=/docs/getting-started-shorthand-props--page) to display a [count](/?path=/docs/components-count--default-story) after the text.
     */
    count: oneOfType([element, object]),
    /**
     * A checkbox can vary in sizes.
     */
    size: oneOf(SIZES)
};

export const CHECKBOX_DEFAULT_PROPS = {
    autofocus: false,
    size: DEFAULT_SIZE,
    __componentName: "@orbit-ui/react-components/checkbox",
    __unsupportedProps: UNSUPPORTED_PROPS
};

const propTypes = {
    ...CHECKBOX_PROP_TYPES,
    /**
     * @ignore
     */
    active: bool,
    /**
     * @ignore
     */
    focus: bool,
    /**
     * @ignore
     */
    hover: bool,
    /**
     * @ignore
     */
    __componentName: string,
    /**
     * @ignore
     */
    __unsupportedProps: arrayOf(string)
};

const defaultProps = CHECKBOX_DEFAULT_PROPS;

function throwWhenMutuallyExclusivePropsAreProvided({ label, count }, componentName) {
    if (!isNil(label) && !isNil(count)) {
        throw new ArgumentError(`${componentName} doesn't support having a label and a count at the same time.`);
    }
}

function useSetFocus(checkboxRef) {
    return useCallback(() => {
        if (!isNil(checkboxRef.current)) {
            checkboxRef.current.querySelector("input").focus();
        }
    }, [checkboxRef]);
}

function useIconsRenderer({ icons, size }) {
    return () => {
        const normalizedIcons = isArray(icons) ? icons : [icons];

        return <>{normalizedIcons.map((x, index) => createContentIcon(x, size, { key: index }))}</>;
    };
}

function useLabelRenderer({ label, size }) {
    return () => {
        const props = {
            as: "span",
            size: getContentLabelSize(size),
            highlight: true
        };

        if (isElement(label)) {
            return cloneElement(label, props);
        }

        return createLabel({
            ...props,
            ...label
        });
    };
}

function useCountRenderer({ count }) {
    return () => {
        if (isElement(count)) {
            return count;
        }

        return createCount(count);
    };
}

function useContentRenderer({ text, icons, label, count, size }) {
    const renderIcons = useIconsRenderer({ icons, size });
    const renderLabel = useLabelRenderer({ label, size });
    const renderCount = useCountRenderer({ count });

    return () => {
        let right;

        if (!isNil(icons)) {
            right = renderIcons();
        }

        if (!isNil(label)) {
            if (!isNil(right)) {
                right = <>{right}{renderLabel()}</>;
            } else {
                right = renderLabel();
            }
        }

        if (!isNil(count)) {
            if (!isNil(right)) {
                right = <>{right}{renderCount()}</>;
            } else {
                right = renderCount();
            }
        }

        if (!isNil(text) || !isNil(right)) {
            return <label title={text}>{!isNil(text) && <span className="text">{text}</span>}{!isNil(right) && right}</label>;
        }
    };
}

function useRenderer({ text, icons, label, size, active, focus, hover, disabled, className, rest }, autofocusProps, innerRef, content) {
    return () => {
        const classes = mergeClasses(
            active && "active",
            focus && "focus",
            hover && "hover",
            size && size,
            !isNil(icons) && "with-icon",
            !isNil(label) && "with-label",
            isNil(text) && "without-text",
            className
        );

        return (
            <SemanticRef innerRef={innerRef}>
                <SemanticCheckbox
                    data-testid="checkbox"
                    {...rest}
                    {...autofocusProps}
                    label={content}
                    disabled={disabled}
                    className={classes}
                />
            </SemanticRef>
        );
    };
}

export function InnerCheckbox(props) {
    const { autofocus, autofocusDelay, text, icons, label, count, size, active, focus, hover, disabled, className, forwardedRef, __unsupportedProps, __componentName, ...rest } = props;

    throwWhenUnsupportedPropIsProvided(props, __unsupportedProps, __componentName);
    throwWhenMutuallyExclusivePropsAreProvided(props, __componentName);

    const innerRef = useCombinedRefs(forwardedRef);

    const setFocus = useSetFocus(innerRef);
    const autofocusProps = useAutofocus(autofocus, autofocusDelay, disabled, setFocus);

    const renderContent = useContentRenderer({ text, icons, label, count, size });
    const render = useRenderer({ text, icons, label, size, active, focus, hover, disabled, className, rest }, autofocusProps, innerRef, renderContent());

    // Without a fragment, react-docgen doesn't work.
    return <>{render()}</>;
}

InnerCheckbox.propTypes = propTypes;
InnerCheckbox.defaultProps = defaultProps;

export const Checkbox = forwardRef((props, ref) => (
    <InnerCheckbox { ...props } forwardedRef={ref} />
));
