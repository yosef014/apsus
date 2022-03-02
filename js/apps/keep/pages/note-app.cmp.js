import { noteService } from '../services/note-service.js';
import noteList from '../cmps/note-list.cmp.js';

export default {
    template: `
        <section class="note-app">
            <note-list :notes="notes" />
        </section>
    `,
    components: {
        noteList
    },
    data() {
        return {
            notes: null
        }
    },
    created() {
        noteService.query()
                .then(notes => this.notes = notes);
    }
}