import { eventBus } from '../../../services/eventBus-service.js';
export default {
    props: ['note'],
    template: `
       <section class="note-actions">
            <i :class="noteTypeIcon"></i>
            <div class="actions">
                <i class="fa-solid fa-trash-can btn-note-delete" @click="deleteNote(note.id)"></i>
                <i class="fa-solid fa-pen-to-square" @click="editNote(note)"></i>
                <label :for="inputId" class="fa-solid fa-palette"></label>
                <input :id="inputId" style="opacity: 0;" type="color" v-model="note.style.backgroundColor" @input="editColor(note)" />
            </div>
        </section>
    `,
    components: {

    },
    data() {
        return {
        }
    },
    methods: {
        deleteNote(noteId) {
            this.$emit('delete', noteId);
        },
        editNote(note) {
            eventBus.emit('toggleEdit', note);
        },
        editColor(note) {
            eventBus.emit('saveNote', {note});
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
        }
    }
}