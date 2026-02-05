import './Sidebar.css';
import {PREVIEW_LENGTH, UI_TEXT} from "../../constants";

export default function Sidebar({
                                    notes,
                                    onAddNote,
                                    onDeleteNote,
                                    activeNote,
                                    setActiveNote,
                                }) {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h1>{UI_TEXT.SIDEBAR_HEADER}</h1>
                <button className="new-note-button" onClick={onAddNote}>{UI_TEXT.ADD_NOTE_BTN}</button>
            </div>
            <div className="sidebar-notes">
                {notes.map((note) => (
                    <div
                        className={`sidebar-note ${activeNote && note.id === activeNote.id && "active"}`}
                        onClick={() => {
                            setActiveNote(note.id);
                        }}
                        key={note.id}
                    >
                        <div className="sidebar-note-content">
                            <p className="sidebar-note-title">{note.title ? note.title.length > PREVIEW_LENGTH ? note.title.substring(0, PREVIEW_LENGTH) + "..." : note.title : UI_TEXT.UNTITLED_NOTE}</p>
                            <p className="sidebar-note-preview">{note.content && note.content.length > PREVIEW_LENGTH ? note.content.substring(0, PREVIEW_LENGTH) + "..." : note.content}</p>
                        </div>
                        <button className="delete-button" onClick={(e) => {
                            e.stopPropagation();
                            onDeleteNote(note.id);
                        }}>{UI_TEXT.DELETE_NOTE_BTN}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
