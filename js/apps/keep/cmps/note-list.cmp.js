import notePreview from './note-preview.cmp.js';
import noteEdit from './note-edit.cmp.js';

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <ul>
                <li v-for="note in notes" @mouseover="note.isHover = true" @mouseleave="note.isHover = false" class="note" :key="note.id">
                        <note-preview :note="note" />
                        <section class="actions">
                            <button @click="deleteNote(note.id)">X</button>
                            <button @click="editNote(note)">Edit</button>
                        </section>
                        <note-edit v-if="note.isEditable" :note="note"/>
                </li>
            </ul>
        </section>
    `,
    components: {
        notePreview,
        noteEdit
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
        }
    },
    computed: {
    }
}