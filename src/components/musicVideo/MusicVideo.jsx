const MusicVideo = () => (
        <div style={{margin:'1rem 2.14in'}}>
            <h1 className={'titles'}>music video</h1>
            <div style={{marginBottom:'10vh'}}>
                <iframe width="100%" height="620" src="https://www.youtube.com/embed/7nObtWENgxA"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="">

                </iframe>
            </div>
        </div>
    )

export default MusicVideo;