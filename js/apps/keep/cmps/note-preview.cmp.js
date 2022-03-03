import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';
import noteTodos from './note-todos.cmp.js';

export default {
    props: ['note'],
    template: `
        <section class="note-preview">
            <component :is="note.type" :info="note.info" :note="note"></component>
        </section>
    `,
    components: {
        noteTxt,
        noteImg,
        noteVideo,
        noteTodos
    },
    data() {
        return {
            
        }
    },
    methods: {
    }
}