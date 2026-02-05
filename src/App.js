import {useEffect, useState} from "react";
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import {DEFAULT_NOTE, LOCAL_STORAGE_KEY, NEW_NOTE_DEFAULTS} from "./constants";

function App() {
    const [notes, setNotes] = useState(
        localStorage.getItem(LOCAL_STORAGE_KEY)
            ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
            : [DEFAULT_NOTE]
    );

    const [activeNoteId, setActiveNoteId] = useState(notes[0]?.id);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
            id: Date.now(),
            ...NEW_NOTE_DEFAULTS
        };
        setNotes([newNote, ...notes]);
        setActiveNoteId(newNote.id);
    };

    const onDeleteNote = (idToDelete) => {
        const newNotes = notes.filter((note) => note.id !== idToDelete);
        setNotes(newNotes);
        if (idToDelete === activeNoteId) {
            setActiveNoteId(newNotes[0]?.id);
        }
    };

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArray = notes.map((note) => {
            if (note.id === activeNoteId) {
                return updatedNote;
            }
            return note;
        });

        setNotes(updatedNotesArray);
    };

    const activeNote = notes.find((note) => note.id === activeNoteId);

    return (
        <div className="App">
            <div className="container">
                <Sidebar
                    notes={notes}
                    onAddNote={onAddNote}
                    onDeleteNote={onDeleteNote}
                    activeNote={activeNote}
                    setActiveNote={setActiveNoteId}
                />
                <Content activeNote={activeNote} onUpdateNote={onUpdateNote}/>
            </div>
        </div>
    );
}

export default App;
