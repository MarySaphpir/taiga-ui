import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-date-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiInputDateExample2 {
    readonly testForm = new FormGroup({
        testValue: new FormControl(new TuiDay(2017, 2, 15)),
    });
}
