import { PlaylistComponent } from './playlist.component';
import { Video } from './video';
import {Component} from 'angular2/core';
import {Config} from './config.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor(){
        this.videos = [
            new Video(1, "Installing Django", "qgGIqRFvFFK", "How to Install Django"),
            new Video(2, "Surviving the Wilderness", "Fgwy-UdtyLs", "Bucky goes hiking.")
        ]
    }
}

