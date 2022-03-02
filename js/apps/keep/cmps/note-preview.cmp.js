import noteTxt from './note-txt.cmp.js';

export default {
    props: ['note'],
    template: `
        <section class="note-preview">
            <note-txt v-if="note.type === 'note-txt'" :info="note.info" />
        </section>
    `,
    components: {
        noteTxt
    },
    data() {
        return {
            
        }
    },
    created() {
    }
}