import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const NOTES_KEY = 'notes';
_createNotes();

export const noteService = {
    query,
    getNote,
    removeNote,
    saveNote,
    getInfoType
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

function getInfoType(noteType) {
    switch (noteType) {
        case 'note-txt':
            return 'txt';
        case 'note-img':
        case 'note-video':
            return 'url'
    }
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
            {
                id: "n102",
                type: "note-img",
                info: {
                    url: "https://static.scientificamerican.com/sciam/cache/file/ACF0A7DC-14E3-4263-93F438F6DA8CE98A_source.jpg?w=590&h=800&896FA922-DF63-4289-86E2E0A5A8D76BE1",
                    // title: "Bobi and Me"
                }
                // style: {
                //     backgroundColor: "#00d"
                // }
            },
            {
                id: "n106",
                type: "note-todos",
                info: {
                     label: "Get my stuff together",
                     todos: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                        ]
                    }
            },
            {
                id: "n103",
                type: "note-txt",
                info: {
                    txt: "Note 2 txt"
                }
            },
            {
                id: "n104",
                type: "note-txt",
                info: {
                    txt: "Note 3 txt"
                }
            },
            {
                id: "n105",
                type: "note-video",
                info: {
                    url: 'https://www.youtube.com/watch?v=Qi_ucKjCOvM&ab_channel=SekisukeChannel'
                }
            }
        ];
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}