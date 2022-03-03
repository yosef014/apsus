export default {
    template: `
        <section class="note-add">
            <input type="text" :placeholder="inputPlaceholder" v-model="noteTxtData" />
            <i class="fa-regular fa-comment" @click="changeType('txt')" title="Text Note"></i>
            <i class="fa-regular fa-image" @click="changeType('img')" title="Picture Note"></i>
            <i class="fa-brands fa-youtube" @click="changeType('video')" title="Youtube Video Note"></i>
            <i class="fa-solid fa-list-check" @click="changeType('todos')" title="To-Do List Note"></i>
            <i class="fa-regular fa-circle-check" @click="addNote" title="Add Note"></i>
        </section>
    `,
    data() {
        return {
            noteType: 'txt',
            noteTxtData: ''
        }
    },
    methods: {
        changeType(noteType) {
            this.noteType = noteType;
        },
        addNote() { // sould also be done on enter key
            if(!this.noteTxtData) {
                // should emit user msg saying note sould not be empty
                return;
            }
            this.$emit('addNote', {type: `note-${this.noteType}`, data: this.noteTxtData});
            this.noteTxtData = '';
        }
    },
    computed: {
        inputPlaceholder() {
            switch (this.noteType) {
                case 'txt':
                    return 'What\'s on your mind...';
                case 'img':
                    return 'Enter img URL...';
                case 'video':
                    return 'Enter video URL...';
                case 'todos':
                    return 'Enter comma seperated list...';
            }
        }
    }
}
