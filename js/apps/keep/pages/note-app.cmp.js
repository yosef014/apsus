import { noteService } from '../services/note-service.js';
import { eventBus } from '../../../services/eventBus-service.js';
import noteList from '../cmps/note-list.cmp.js';

export default {
    template: `
        <section class="note-app">
            <note-list :notes="notes" @delete="deleteNote" @edit="toggleEditMode" />
        </section>
    `,
    components: {
        noteList
    },
    data() {
        return {
            notes: null,
        }
    },
    created() {
        noteService.query()
                .then(notes => this.notes = notes);
                
        eventBus.on('save', this.saveNoteEdit);
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
            note.info[noteService.getInfoType(note.type)] = editedData;
            noteService.saveNote(note);
        }
    }
}