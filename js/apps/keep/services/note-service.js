import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const NOTES_KEY = 'notes';
_createNotes();

export const noteService = {
    query,
    getNote,
    removeNote,
    saveNote,
    addNote,
    copyNote,
    getInfoType,
    getTodosFromStr,
    getEmptyNote
}

function query() {
    return storageService.query(NOTES_KEY);
}

function getNote(noteId) {
    return storageService.get(NOTES_KEY, noteId);
}

function saveNote(note) {
    const newNote = {...note};
    newNote.isEditable = false;
    return storageService.put(NOTES_KEY, newNote);
}

function removeNote(noteId) {
    return storageService.remove(NOTES_KEY, noteId);
}

function addNote(noteType, noteData) {
    const newNote = getEmptyNote();
    newNote.type = noteType;
    newNote.info[getInfoType(noteType)] = 
        noteType === 'note-todos' ? getTodosFromStr(noteData) : noteData;

    return storageService.post(NOTES_KEY, newNote);
}

function copyNote(note) {
    const newNote = {...note};
    newNote.isEditable = false;
    return storageService.post(NOTES_KEY, newNote);
}

function getEmptyNote() {
    return {
        type: '',
        isPinned: false,
        info: {},
        style: {'background-color': "#fafafa"}
    }
}

function getInfoType(noteType) {
    switch (noteType) {
        case 'note-txt':
            return 'txt';
        case 'note-img':
        case 'note-video':
            return 'url'
        case 'note-todos':
            return 'todos';
    }
}

function getTodosFromStr(todosStr) {
    return todosStr.split(',').map(todo => ({txt: todo, doneAt: null}));
}


function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    if(!notes || !notes.length) {
        notes = [
            {
              "id": "n101",
              "type": "note-txt",
              "isPinned": true,
              "info": {
                "txt": "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine."
              },
              "style": {
                "background-color": "#fafafa"
              }
            },
            {
              "id": "n102",
              "type": "note-img",
              "info": {
                "url": "https://static.scientificamerican.com/sciam/cache/file/ACF0A7DC-14E3-4263-93F438F6DA8CE98A_source.jpg?w=590&h=800&896FA922-DF63-4289-86E2E0A5A8D76BE1"
              },
              "style": {
                "background-color": "#fafafa"
              }
            },
            {
              "id": "n106",
              "type": "note-todos",
              "info": {
                "label": "Get my stuff together",
                "todos": [
                  {
                    "txt": "Find some leprechauns",
                    "doneAt": 1646498679644
                  },
                  {
                    "txt": "Make stew",
                    "doneAt": 1646498679951
                  },
                  {
                    "txt": "Eat",
                    "doneAt": null
                  }
                ]
              },
              "style": {
                "background-color": "#eaf9fb"
              },
              "isPinned": true
            },
            {
              "id": "n104",
              "type": "note-txt",
              "info": {
                "txt": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because the"
              },
              "style": {
                "background-color": "#f7e950"
              }
            },
            {
              "id": "n105",
              "type": "note-video",
              "info": {
                "url": "https://www.youtube.com/watch?v=Qi_ucKjCOvM&ab_channel=SekisukeChannel"
              },
              "style": {
                "background-color": "#f3edf2"
              },
              "isPinned": false
            },
            {
              "type": "note-img",
              "isPinned": false,
              "info": {
                "url": "https://media1.giphy.com/media/l0IykOsxLECVejOzm/giphy.gif?cid=790b7611d502b230e06e1aea62b949a6895f646d951065f0&rid=giphy.gif&ct=g"
              },
              "style": {
                "background-color": "#eaeece"
              },
              "id": "fMPtjwBI"
            },
            {
              "type": "note-img",
              "isPinned": true,
              "info": {
                "url": "http://www.memphiszoo.org/assets/2510/hazel_1.jpg"
              },
              "style": {
                "background-color": "#e1efe4"
              },
              "id": "AtPo1ELh"
            },
            {
              "id": "tVgl9bJQ",
              "type": "note-txt",
              "info": {
                "txt": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mass"
              },
              "style": {
                "background-color": "#fafafa"
              },
              "isPinned": false
            },
            {
              "id": "NVmwszul",
              "type": "note-txt",
              "info": {
                "txt": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mass"
              },
              "style": {
                "background-color": "#fafafa"
              },
              "isPinned": false
            },
            {
              "id": "Srl25voL",
              "type": "note-txt",
              "info": {
                "txt": "The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word \"and\" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
              },
              "style": {
                "background-color": "#eff6f2"
              },
              "isPinned": false
            },
            {
              "id": "ZrU6PO5Z",
              "type": "note-todos",
              "info": {
                "label": "Get my stuff together",
                "todos": [
                  {
                    "txt": "Driving liscence",
                    "doneAt": 1646500088830
                  },
                  {
                    "txt": "Coding power",
                    "doneAt": null
                  }
                ]
              },
              "style": {
                "background-color": "#dbadad"
              },
              "isPinned": true
            },
            {
              "id": "RKk3X1jF",
              "type": "note-txt",
              "info": {
                "txt": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mass"
              },
              "style": {
                "background-color": "#fafafa"
              },
              "isPinned": false
            },
            {
              "id": "WhuJCokL",
              "type": "note-txt",
              "info": {
                "txt": "For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
              },
              "style": {
                "background-color": "#ffe0e0"
              },
              "isPinned": true
            },
            {
              "id": "VMCd6gWY",
              "type": "note-txt",
              "info": {
                "txt": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because the"
              },
              "style": {
                "background-color": "#f7e950"
              }
            },
            {
              "type": "note-img",
              "isPinned": false,
              "info": {
                "url": "https://c.tenor.com/W6Swh0XpkBgAAAAd/head-nod-its-always-sunny.gif"
              },
              "style": {
                "background-color": "#780bc1"
              },
              "id": "leQptGkg"
            },
            {
              "id": "CQxYVKxj",
              "type": "note-todos",
              "info": {
                "label": "Get my stuff together",
                "todos": [
                  {
                    "txt": "Go to the bank",
                    "doneAt": null
                  },
                  {
                    "txt": "Buy Groceries",
                    "doneAt": 1646500243408
                  },
                  {
                    "txt": "Clean The house",
                    "doneAt": 1646500248586
                  },
                  {
                    "txt": "Cook Dinner",
                    "doneAt": 1646500244269
                  }
                ]
              },
              "style": {
                "background-color": "#84e6af"
              },
              "isPinned": false
            }
          ]
        utilService.saveToStorage(NOTES_KEY, notes);
    }
    return notes;
}
