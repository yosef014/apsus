import { eventBus } from '../../../services/eventBus-service.js';
import { noteService } from '../services/note-service.js';

export default {
    props: ['note'],
    template: `
       <section class="note-actions">
            <i :class="noteTypeIcon" :title="noteTypeIconTitle"></i>
            <div class="actions">
                <i class="fa-solid fa-trash-can btn-note-delete" @click="deleteNote(note.id)" title="Delete Note"></i>
                <i class="fa-solid fa-pen-to-square btn-note-edit" @click="editNote(note)" title="Edit Note"></i>
                <i class="fa-solid fa-envelope btn-note-mail" @click="sendNoteToMail(note)" title="E-mail this note"></i>
                <i class="fa-solid fa-copy btn-note-duplicate" @click="duplicateNote(note)" title="Duplicate Note"></i>
                <label :for="inputId" class="fa-solid fa-palette btn-note-color-picker" title="Pick Note Color"></label>
                <input :id="inputId" style="opacity: 0;" type="color" v-model="note.style['background-color']" @input="editColor(note)" />
            </div>
        </section>
    `,
    methods: {
        deleteNote(noteId) {
            this.$emit('delete', noteId);
        },
        editNote(note) {
            eventBus.emit('toggleEdit', note);
        },
        editColor(note) {
            eventBus.emit('saveNote', {note});
        },
        duplicateNote(note) {
            eventBus.emit('duplicateNote', {note});
        },
        sendNoteToMail(note) {
            const type = noteService.getInfoType(note.type);
            let data = note.info[type];
            if(type === 'todos') data = data.map(todo => todo.txt).join('\n');
            eventBus.emit('makeMailFromNote', data);
            this.$router.push('../appMail');
        }
    },
    computed: {
        inputId() {
            return 'input' + this.note.id;
        },
        noteTypeIcon() {
            switch(this.note.type) {
                case 'note-txt':
                    return 'fa-solid fa-font';
                case 'note-img':
                    return 'fa-regular fa-image';
                case 'note-video':
                    return 'fa-brands fa-youtube';
                case 'note-todos':
                    return 'fa-solid fa-list-check';
            }
        },
        noteTypeIconTitle() {
            switch(this.note.type) {
                case 'note-txt':
                    return 'Text Note';
                case 'note-img':
                    return 'Picture Note';
                case 'note-video':
                    return 'Youtube Video Note';
                case 'note-todos':
                    return 'To-Do List Note';
            }
        }
    }
}