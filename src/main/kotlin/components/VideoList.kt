package components

import data.Video
import kotlinx.html.js.onClickFunction
import react.*
import react.dom.p

/**
 * Properties is the way arguments are passed around to HTML rendering functions.
 *
 * @property videos List<Video>
 * @property selectedVideo Video?
 * @property onSelectVideo Function1<Video, Unit> : Communicates with caller using this.
 */
external interface VideoListProps: RProps {
    var videos: List<Video>
    var selectedVideo: Video?
    var onSelectVideo: (Video) -> Unit
}

@JsExport
class VideoList: RComponent<VideoListProps, RState>() {
    override fun RBuilder.render() {
        for (video in props.videos) {
            p {
                key = video.id.toString()
                attrs {
                    onClickFunction = {
                        props.onSelectVideo(video)
                    }
                }
                if (video == props.selectedVideo) {
                    +"▶ "
                }
                +"${video.speaker}: ${video.title}"
            }
        }
    }
}

fun RBuilder.videoList(handler: VideoListProps.() -> Unit): ReactElement {
    return child(VideoList::class) {
        this.attrs(handler)
    }
}