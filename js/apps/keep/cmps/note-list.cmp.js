import notePreview from './note-preview.cmp.js';
import noteEdit from './note-edit.cmp.js';
import noteActions from './note-actions.cmp.js';
import notePin from './note-pin.cmp.js';

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <ul>
                <li v-for="note in notes" 
                class="note" :class="addEditableClass(note)"
                :style="note.style" :key="note.id">
                    <div class="note-container">
                        <note-pin :note="note" />
                        <note-preview :note="note" />
                        <note-actions :note="note"
                            @delete="deleteNote" />
                    </div>
                    <note-edit v-if="note.isEditable" :note="note" />
                </li>
            </ul>
        </section>
    `,
    components: {
        notePreview,
        noteEdit,
        noteActions,
        notePin
    },
    data() {
        return {
        }
    },
    methods: {
        deleteNote(noteId) {
            this.$emit('delete', noteId);
        },
        addEditableClass(note) {
            return {editable: note.isEditable};
        }
    },
    computed: {
        
    }
}
