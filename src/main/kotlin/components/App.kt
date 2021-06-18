package components

import data.Video
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlinx.css.Float
import kotlinx.css.LinearDimension
import kotlinx.css.float
import kotlinx.css.width
import react.*
import react.dom.h1
import react.dom.h3
import styled.css
import styled.styledDiv
import util.fetchVideos

/**
 * Dynamic state for the App. Store variable information here.
 *
 * @property currentVideo Video?
 * @property unwatchedVideos List<Video>
 * @property watchedVideos List<Video>
 */
external interface AppState : RState {
    var currentVideo: Video?
    var unwatchedVideos: List<Video>
    var watchedVideos: List<Video>
}

@JsExport
class App : RComponent<RProps, AppState>() {

    override fun AppState.init() {
        unwatchedVideos = listOf()
        watchedVideos = listOf()

        val mainScope = MainScope()
        mainScope.launch {
            val videos = fetchVideos()
            /**
             * State should even only be modifed from within setState:
             */
            setState {
                unwatchedVideos = videos
            }
        }

//        unwatchedVideos = listOf(
//            KotlinVideo(1, "Building and breaking things", "John Doe", "https://youtu.be/PsaFVLr8t4E"),
//            KotlinVideo(2, "The development process", "Jane Smith", "https://youtu.be/PsaFVLr8t4E"),
//            KotlinVideo(3, "The Web 7.0", "Matt Miller", "https://youtu.be/PsaFVLr8t4E")
//        )
//        watchedVideos = listOf(
//            KotlinVideo(4, "Mouseless development", "Tom Jerry", "https://youtu.be/PsaFVLr8t4E")
//        )
    }

    override fun RBuilder.render() {
        h1 {
            +"KotlinConf Explorer v0.13"
        }
        styledDiv {
            css {
                float = Float.left
            }
            h3 {
                +"Videos to watch"
            }
            /**
             * This method is in VideoPlayer.kt
             */
            videoList {
                videos = state.unwatchedVideos
                selectedVideo = state.currentVideo
                onSelectVideo = { video ->
                    setState {
                        currentVideo = video
                    }
                }
            }
            h3 {
                +"Videos watched"
            }
            videoList {
                videos = state.watchedVideos
                selectedVideo = state.currentVideo
                onSelectVideo = { video ->
                    setState {
                        currentVideo = video
                    }
                }
            }
        }
        state.currentVideo?.let { currentVideo ->
            videoPlayer {
                video = currentVideo
                unwatchedVideo = currentVideo in state.unwatchedVideos
                onWatchedButtonPressed = {
                    if (video in state.unwatchedVideos) {
                        setState {
                            unwatchedVideos -= video
                            watchedVideos += video
                        }
                    } else {
                        setState {
                            watchedVideos -= video
                            unwatchedVideos += video
                        }
                    }
                }
            }
        }
    }
}
