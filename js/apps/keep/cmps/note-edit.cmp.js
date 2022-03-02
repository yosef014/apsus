import { eventBus } from '../../../services/eventBus-service.js';

export default {
    props: ['note'],
    template: `
        <section class="note-edit">
            <input type="text" v-model="editedTxt" />
            <button @click="saveEdit">Save</button>
            <button @click="cancelEdit">Cancel</button>
        </section>
    `,
    components: {
    },
    data() {
        return {
            editedTxt: this.note.info.txt
        }
    },
    methods: {
        saveEdit() {
            eventBus.emit('toggleEdit', this.note);
            eventBus.emit('save', {note: this.note, editedTxt: this.editedTxt})
        },
        cancelEdit() {
            eventBus.emit('toggleEdit', this.note);
        }
    }
}