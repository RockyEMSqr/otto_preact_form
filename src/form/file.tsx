import { Input } from "./input"
import {h} from 'preact';
export class File extends Input {
    type = "file"
    render(props?: any, state?: any) {
        return <div class="input-file">
            <label for="file">{this.label}</label>
            <input required={props.required} type="file" name={props.name} id="file" class="inputfile inputfile-4" data-multiple-caption="{count} files selected" />
            <label for="file" class="btn">Choose a file <span>No file selected&hellip;</span></label>
        </div>
    }
}
export class MultiFile extends Input {
    type = "file"
    render(props?: any, state?: any) {
        return <div class="input-file">
            <label for="file-5">{this.label}</label>
            <input type="file" name={props.name} id="file-5" class="inputfile inputfile-4" data-multiple-caption="{count} files selected" multiple />
            <label for="file-5" class="btn">Choose a file <span>No file selected&hellip;</span></label>
        </div>
    }
}