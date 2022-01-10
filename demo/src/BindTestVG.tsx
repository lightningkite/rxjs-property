import {bind, subscribeAutoDispose, ViewGenerator} from 'rxjs-plus'
import html from './BindTestVG.html'
import {BehaviorSubject, map} from "rxjs";

export class BindTestVG implements ViewGenerator {
    prop = new BehaviorSubject("")

    generate(): HTMLElement {
        return <div>
            <label for="test-input">Test Input: </label>
            <input id="test-input" class="test-input" type="text" bind2-value-input={this.prop}/>
            <p class="test-output">{this.prop.pipe(
                map(x => `You entered ${x}`),
            )}</p>
        </div>
    }
}