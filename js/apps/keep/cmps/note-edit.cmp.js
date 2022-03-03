import { eventBus } from '../../../services/eventBus-service.js';
import { noteService } from '../services/note-service.js';

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
        this.editedNoteData = this.getCurrentData();
        
    },
    methods: {
        saveEdit() {
            eventBus.emit('toggleEdit', this.note);
            let dataToSave = this.editedNoteData;
            if(this.note.type === 'note-todos'){
                dataToSave = noteService.getTodosFromStr(dataToSave);
            }
            eventBus.emit('saveNote', {note: this.note, editedData: dataToSave})
        },
        cancelEdit() {
            eventBus.emit('toggleEdit', this.note);
        },
        getCurrentData() {
            const paramName = noteService.getInfoType(this.note.type);
            if(this.note.type === 'note-todos') return this.note.info[paramName].map(todo => todo.txt).join();
            return this.note.info[paramName];
        }
    }
}