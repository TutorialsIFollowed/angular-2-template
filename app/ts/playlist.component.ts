import { Video } from './video';
import {Component} from 'angular2/core';

@Component({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['videos']
})

export class PlaylistComponent{

    onSelect(vid:Video){
        console.log(JSON.stringify(vid));
    }

}