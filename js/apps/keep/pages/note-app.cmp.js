import { noteService } from '../services/note-service.js';
import { eventBus } from '../../../services/eventBus-service.js';
import noteList from '../cmps/note-list.cmp.js';
import noteAdd from '../cmps/note-add.cmp.js';
import noteFilter from '../cmps/note-filter.cmp.js';

export default {
    template: `
        <section class="note-app">
            <note-filter @filtered="setFilter" />
            <note-add @addNote="addNote" />
            <section v-if="notes && isNotePinned()" class="pinned-note-list">
                <p>Pinned:</p>
                <note-list v-if="notes" :notes="pinnedNotesForDisplay" @delete="deleteNote" />
                <p>Others:</p>
            </section>
            <note-list v-if="notes" :notes="notesForDisplay" @delete="deleteNote"/>
        </section>
    `,
    components: {
        noteList,
        noteAdd,
        noteFilter
    },
    data() {
        return {
            notes: null,
            filterBy: null
        }
    },
    created() {
        noteService.query()
                .then(notes => this.notes = notes);
                
        eventBus.on('saveNote', this.saveNoteEdit);
        eventBus.on('toggleEdit', this.toggleEditMode)
    },
    methods: {
        findNoteIdx(noteId) {
            return this.notes.findIndex(note => note.id === noteId);
        },
        deleteNote(noteId) {
            noteService.removeNote(noteId)
                        .then(() => {
                            const noteIdx = this.findNoteIdx(noteId);
                            this.notes.splice(noteIdx, 1);
                        })
        },
        toggleEditMode(note) {
            if(note.isEditable === undefined) note.isEditable = true;
            else note.isEditable = !note.isEditable;
        },
        saveNoteEdit({note, editedData}) {
            if(editedData) note.info[noteService.getInfoType(note.type)] = editedData;
            noteService.saveNote(note);
        },
        addNote({type, data}) {
            noteService.addNote(type, data)
                .then(newNote => {
                    this.notes.push(newNote);
                })
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        filterNotes(notes = this.notes) {
            let displayedNotes = notes.slice().reverse();
            if(!this.filterBy) return displayedNotes;

            const txtReg = new RegExp(this.filterBy.txt, 'i');
            return displayedNotes.filter(note => {

                if(this.filterBy.type && this.filterBy.type !== note.type) return false;

                if(note.type === 'note-txt') return txtReg.test(note.info.txt);
                else if(note.type === 'note-todos') {
                    return note.info.todos.some(todo => txtReg.test(todo.txt))
                }
                
                return !this.filterBy.txt;
            })
        },
        isNotePinned() {
            return this.notes.some(note => note.isPinned);
        }
    },
    computed: {
        notesForDisplay() {
            return this.filterNotes(this.notes.filter(note => !note.isPinned));
        },
        pinnedNotesForDisplay() {
            return this.filterNotes(this.notes.filter(note => note.isPinned))
        }
    }
}
