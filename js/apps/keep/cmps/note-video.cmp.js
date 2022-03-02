export default {
    props: ['info'],
    template: `
        <section class="note-video">
            <iframe :src="videoUrl" ></iframe>
        </section>
    `,
    computed: {
        videoUrl() {
            const URL_START = 'https://www.youtube.com/embed/';
            const videoId = this.info.url.split('?v=')[1].split('&')[0];
            console.log(videoId);
            return URL_START + videoId;
        }
    }
}