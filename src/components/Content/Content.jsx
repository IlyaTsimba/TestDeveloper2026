import './Content.css'
import {FONT_SIZE_LIMITS, UI_TEXT} from "../../constants";

function Content({activeNote, onUpdateNote}) {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
        });

    };

    const onFontSizeChange = (e) => {
        let numFontSize = parseInt(e.target.value)
        if (isNaN(numFontSize)) return;
        if (numFontSize > FONT_SIZE_LIMITS.MAX) {
            numFontSize = FONT_SIZE_LIMITS.MAX;
        }
        return onEditField('settings', {fontSize: numFontSize});
    }

    return (
        activeNote &&
        <div className="content">
            <input
                id="title"
                placeholder={UI_TEXT.TITLE_PLACEHOLDER}
                value={activeNote.title}
                onChange={(e) => onEditField("title", e.target.value)}
                type="text"
                autoComplete="off"
            />
            <div className="settings">
                <input
                    step={FONT_SIZE_LIMITS.STEP}
                    type="number"
                    className="font-size"
                    min={FONT_SIZE_LIMITS.MIN}
                    max={FONT_SIZE_LIMITS.MAX}
                    onChange={(e) => onFontSizeChange(e)}
                    value={activeNote.settings.fontSize}
                />

            </div>
            <textarea
                id="content"
                value={activeNote.content}
                style={{
                    fontSize: `${
                        activeNote.settings.fontSize < FONT_SIZE_LIMITS.MIN ?
                            FONT_SIZE_LIMITS.MIN :
                            activeNote.settings.fontSize}px`
                }}
                onChange={(e) => onEditField("content", e.target.value)}
                placeholder={UI_TEXT.CONTENT_PLACEHOLDER}
            />
        </div>
    );
}

export default Content;
