export default {
    template: `
        <section class="note-filter">
                <input type="text" v-model="filterBy.txt" @input="filter" :disabled="enableSearch" placeholder="Search" />
                <select v-model="filterBy.type" @change="filter()">
                    <option value="">All</option>
                    <option value="note-txt">Text</option>
                    <option value="note-img">Image</option>
                    <option value="note-video">Video</option>
                    <option value="note-todos">To-do</option>
                </select>
        </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                type: ''
            }
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }
    },
    computed: {
        enableSearch() {
            return this.filterBy.type === 'note-img' || this.filterBy.type === 'note-video'
        }
    }
}