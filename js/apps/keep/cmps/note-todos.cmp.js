import { eventBus } from '../../../services/eventBus-service.js';

export default {
    props: ['info', 'note'],
    template: `
        <section class="note-todos">
            <ul>
                <li v-for="todo in info.todos" class="todo" :class="{completed: todo.doneAt}"  @click="toggleDoneToddo(todo)">
                    <i class="fa-regular" :class="getTodoIcon(todo)"></i>
                    <span class="todo-txt">{{todo.txt}}</span>
                </li>
            </ul>
        </section>
    `,
    methods: {
        toggleDoneToddo(todo) {
            todo.doneAt = todo.doneAt ? null : Date.now();
            eventBus.emit('saveNote', {note: this.note});
        },
        saveTitle() {
            eventBus.emit('saveNote', {note: this.note});
        },
        getTodoIcon({doneAt}) {
            return doneAt ? 'fa-square-check' : 'fa-square';
        }
    }
}