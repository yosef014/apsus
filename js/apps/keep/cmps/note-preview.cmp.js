import noteTxt from './note-txt.cmp.js';
import noteImg from './note-img.cmp.js';
import noteVideo from './note-video.cmp.js';

export default {
    props: ['note'],
    template: `
        <section class="note-preview">
            <component :is="note.type" :info="note.info"></component>
        </section>
    `,
    components: {
        noteTxt,
        noteImg,
        noteVideo
    },
    data() {
        return {
            
        }
    },
    methods: {
    }
}