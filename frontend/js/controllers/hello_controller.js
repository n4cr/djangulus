import {Controller} from 'stimulus';

export default class extends Controller {
    /*
    Just a boilerplate controller
     */
    connect() {
        console.log("Hello, Stimulus!", this.element);
    }
}
