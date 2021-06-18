import components.App
import kotlinx.browser.document
import react.dom.render

fun main() {

    /**
     * Grabs the "root" div element defined in index.html as the top
     * and renders that using as the child the component class App:class.
     */
    render(document.getElementById("root")) {
        child(App::class) {}
    }

}
