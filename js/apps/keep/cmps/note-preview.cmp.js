import noteTxt from './note-txt.cmp.js';
import noteEdit from './note-edit.cmp.js';

export default {
    props: ['note'],
    template: `
        <section class="note-preview">
            <note-txt :info="note.info" />
            <note-edit v-if="note.isEditable" :note="note"/>
        </section>
    `,
    components: {
        noteTxt,
        noteEdit
    },
    data() {
        return {
            
        }
    },
    methods: {
    }
}