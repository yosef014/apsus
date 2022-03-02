export default {
    props: ['notes'],
    template: `
        <section class="note-pewview">
            <pre>{{notes}}</pre>
        </section>
    `,
    data() {
        return {
            
        }
    },
    created() {
    }
}