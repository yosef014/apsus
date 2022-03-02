import { noteService } from '../services/note-service.js';
import notePreview from '../cmps/note-preview.cmp.js';

export default {
    template: `
        <section class="note-app">
            <note-preview :notes="notes" />
        </section>
    `,
    components: {
        notePreview
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