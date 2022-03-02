export default {
    props: ['info'],
    template: `
        <section class="note-todos">
            <h2>{{info.label}}</h2>
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
            todo.doneAt = todo.doneAt ? null : Date.now()
        }
    },
    computed: {
    }
}