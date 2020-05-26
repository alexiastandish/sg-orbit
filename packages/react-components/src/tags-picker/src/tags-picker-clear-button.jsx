import { Button } from "../../button";
import { PureComponent, createRef } from "react";
import { SIZES } from "./sizes";
import { func, oneOf, string } from "prop-types";

export class TagsPickerClearButton extends PureComponent {
    static propTypes = {
        /**
         * The button text.
         */
        text: string,
        /**
         * Called on click.
         * @param {SyntheticEvent} event - React's original SyntheticEvent.
         * @returns {void}
         */
        onClick: func,
        /**
         * A clear button can have different sizes.
         */
        size: oneOf(SIZES)
    };

    static defaultProps = {
        text: "Clear all"
    };

    _buttonRef = createRef();

    render() {
        const { text, onClick, className, size } = this.props;

        return (
            <Button
                onClick={onClick}
                ghost
                compact
                size={size}
                className={className}
                ref={this._buttonRef}
                data-testid="tags-picker-clear-button"
            >
                {text}
            </Button>
        );
    }
}
