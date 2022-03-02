import { eventBus } from '../../../services/eventBus-service.js';

export default {
    props: ['note'],
    template: `
        <section class="note-edit">
            <input type="text" v-model="editedNoteData" />
            <button @click="saveEdit">Save</button>
            <button @click="cancelEdit">Cancel</button>
        </section>
    `,
    components: {
    },
    data() {
        return {
            editedNoteData: null
        }
    },
    created() {
        this.editedNoteData = this.whatToEdit(this.note.type);
    },
    methods: {
        saveEdit() {
            eventBus.emit('toggleEdit', this.note);
            eventBus.emit('save', {note: this.note, editedData: this.editedNoteData})
        },
        cancelEdit() {
            eventBus.emit('toggleEdit', this.note);
        },
        whatToEdit(noteType) {
            switch(noteType) {
                case 'note-txt':
                    return this.note.info.txt;
                case 'note-img':
                case 'note-video':
                    return this.note.info.url;
            }
        }
    }
}