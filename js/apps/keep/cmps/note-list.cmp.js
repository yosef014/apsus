import notePreview from './note-preview.cmp.js';
import noteEdit from './note-edit.cmp.js';
import noteActions from './note-actions.cmp.js';

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <ul>
                <li v-for="note in notes" 
                class="note" :class="addEditableClass(note)"
                :style="note.style" :key="note.id">
                
                    <div class="note-container">
                        <note-preview :note="note" />
                        <note-actions :note="note"
                            @delete="deleteNote"
                            @edit="editNote" />
                    </div>
                    <note-edit v-if="note.isEditable" :note="note" />
                </li>
            </ul>
        </section>
    `,
    components: {
        notePreview,
        noteEdit,
        noteActions
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
            this.$emit('edit', note);
        },
        addEditableClass(note) {
            return {editable: note.isEditable};
        }
    },
    computed: {
        
    }
}
