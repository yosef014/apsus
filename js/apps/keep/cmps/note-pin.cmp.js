import { eventBus } from '../../../services/eventBus-service.js';

export default {
    props: ['note'],
    template: `
        <section class="note-pin">
            <i class="fa-solid fa-thumbtack" :class="isPinned" @click="changePinned" :title="pinTitle"></i>
        </section>
    `,
    methods: {
        changePinned() {
            this.note.isPinned = !this.note.isPinned;
            eventBus.emit('saveNote', {note: this.note});
        }
    },
    computed: {
        isPinned() {
            return {pinned: this.note.isPinned};
        },
        pinTitle() {
            return this.note.isPinned ? 'Unpin' : 'Pin';
        }
    }
}