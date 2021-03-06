import { EmbeddedIcon } from "../../icons";

export function renderIcons(icons, size) {
    return (
        <>
            {(Array.isArray(icons) ? icons : [icons]).map(
                (x, index) =>
                    // eslint-disable-next-line react/no-array-index-key
                    <EmbeddedIcon size={size} key={index}>{x}</EmbeddedIcon>
            )}
        </>
    );
}
