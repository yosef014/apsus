import { eventBus } from '../../../services/eventBus-service.js';

export default {
    props: ['info', 'note'],
    template: `
        <section class="note-todos">
            <textarea  type="text" v-model="info.label" @change="saveTitle"> </textarea>
            <ul>
                <li v-for="todo in info.todos" class="todo" :class="{completed: todo.doneAt}"  @click="toggleDoneToddo(todo)">
                    {{todo.txt}}
                </li>
            </ul>
        </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        toggleDoneToddo(todo) {
            todo.doneAt = todo.doneAt ? null : Date.now();
            eventBus.emit('saveNote', {note: this.note});
        },
        saveTitle() {
            eventBus.emit('saveNote', {note: this.note});
        }
    },
    computed: {
    }
}