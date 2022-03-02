import notePreview from './note-preview.cmp.js';


export default {
    props: ['notes'],
    template: `
        <section class="note-list">
            <ul>
                <li v-for="(note, idx) in notes" :key="note.id">
                    <note-preview :note="note" />
                    <section class="actions">
                         <button @click="deleteNote(note.id)">X</button>
                         <button @click="editNote(note)">Edit</button>
                    </section>
                </li>
            </ul>
        </section>
    `,
    components: {
        notePreview
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
    }
}