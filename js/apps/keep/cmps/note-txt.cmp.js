export default {
    props: ['info'],
    template: `
        <section class="note-txt">
            <pre>{{info.txt}}</pre>
        </section>
    `
}