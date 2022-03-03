import { eventBus } from '../../../services/eventBus-service.js';
export default {
    props: ['note'],
    template: `
       <section class="note-actions">
            <button @click="deleteNote(note.id)">X</button>
            <button @click="editNote(note)">Edit</button>
            <label :for="inputId" class="fa-solid fa-palette"></label>
            <input :id="inputId" style="opacity: 0;" type="color" v-model="note.style.backgroundColor" @input="editColor(note)" />
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
        }
    }
}