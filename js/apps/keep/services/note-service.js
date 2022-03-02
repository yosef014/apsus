import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const NOTES_KEY = 'notes';
_createNotes();

export const noteService = {
    query,
    getNote,
    removeNote,
    saveNote
}

function query() {
    return storageService.query(NOTES_KEY);
}

function getNote(noteId) {
    return storageService.get(NOTES_KEY, noteId);
}

function saveNote(note) {
    return storageService.put(NOTES_KEY, note);
}

function removeNote(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}


function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if(!notes || !notes.length) {
        notes = [
            {
                id: "n101",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Note 1 txt"
                }
            },
            // {
            //     id: "n102",
            //     type: "note-img",
            //     info: {
            //         url: "http://some-img/me",
            //         title: "Bobi and Me"
            //     },
            //     style: {
            //         backgroundColor: "#00d"
            //     }
            // },
            // {
            //     id: "n103",
            //     type: "note-todos",
            //     info: {
            //          label: "Get my stuff together",
            //          todos: [
            //             { txt: "Driving liscence", doneAt: null },
            //             { txt: "Coding power", doneAt: 187111111 }
            //             ]
            //         }
            // }
            {
                id: "n102",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Note 2 txt"
                }
            },
            {
                id: "n103",
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "Note 3 txt"
                }
            }
        ];
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}