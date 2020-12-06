import {Controller} from 'stimulus';

export default class extends Controller {
    /*
    Controller to load content from remote
     */
    static targets = ['container']
    static values = {
        url: String,
    }

    connect() {
        this.load()
    }

    load() {
        fetch(this.urlValue).then(resp => resp.text()).then(text => {
            this.container.innerHTML = text;
        })
    }

    get container() {
        // If the container target is available then use it otherwise use the element of the controller
        if (this.hasContainerTarget) {
            return this.containerTarget;
        } else {
            return this.element;
        }
    }
}
