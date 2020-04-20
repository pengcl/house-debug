import {Component, ViewChild} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {LocationStrategy} from '@angular/common';
import {Uploader, UploaderOptions} from '../@theme/modules/uploader';
import {PickerService} from '../@core/modules/picker';
import {TabsService} from '../tabs/tabs.service';
import {DATA} from '../@core/data/cn';
import {getIndex, getBase64} from '../utils/utils';
import {DatePipe} from '@angular/common';
import {SELECTIONS, VALIDATORS} from '../data';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    providers: [DatePipe]
})
export class HomePage {
    backgroundPosition;
    SELECTIONS = SELECTIONS;
    more = false;
    form: FormGroup = new FormGroup({
        ProjectGID: new FormControl('', [Validators.required]),
        UserPhone: new FormControl('', [Validators.required, Validators.pattern(/[0-9]*/), Validators.minLength(11), Validators.maxLength(11)]),
        OPENID: new FormControl('', []),
        truename: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(2)]),
        IDCardType: new FormControl('', []),
        IDCardNo: new FormControl('', []),
        addr: new FormControl('', []),
        sex: new FormControl('', [Validators.required]),
        birthday: new FormControl('', []),
        BuyType: new FormControl('', [Validators.required]),
        BuyHouseType: new FormControl('', []),
        BuyHouseArea: new FormControl('', []),
        BuidingType: new FormControl('', [Validators.required]),
        ComeFrom: new FormControl('APP', []),
        BuyUse: new FormControl('', []),
        UserPhone2: new FormControl('', [Validators.pattern(/[0-9]*/), Validators.minLength(11), Validators.maxLength(11)]),
        HYZK: new FormControl('', []),
        JYCD: new FormControl('', []),
        GZYS: new FormControl('', []),
        GFYS: new FormControl('', []),
        BuidingGID: new FormControl('', []),
        SSHY: new FormControl('', []),
        JTJG: new FormControl('', []),
        IsMemberYZ: new FormControl(false, []), // new
        RZTJ: new FormControl('', []), // new
        GZQY: new FormControl('', []), // new
        JZQY: new FormControl('', []), // new
        NLD: new FormControl('', [])
    });
    followForm: FormGroup = new FormGroup({
        UserGID: new FormControl('', []),
        FollowUpType: new FormControl('建档', []),
        FollowUpRecord: new FormControl('', [Validators.required]),
        FollowUpPhoto: new FormControl('', []),
    });
    uploader: Uploader = new Uploader({
        onFileQueued: () => {
            getBase64(this.uploader.queue, (value) => {
                this.followForm.get('FollowUpPhoto').setValue(value);
            });
        },
        onFileDequeued: () => {
            getBase64(this.uploader.queue, (value) => {
                this.followForm.get('FollowUpPhoto').setValue(value);
            });
        }
    } as UploaderOptions);

    constructor(private route: ActivatedRoute,
                public location: LocationStrategy,
                private tabsSvc: TabsService,
                private datePipe: DatePipe,
                private pickerSvc: PickerService) {
        this.form.get('IDCardType').valueChanges.subscribe(res => {
            if (res) {
                this.form.get('IDCardNo').setValidators([Validators.pattern(VALIDATORS[res][0])]);
            }
        });
    }

    setBinding() {
        this.form.get('OPENID').setValue(this.route.snapshot.queryParams.openid ? this.route.snapshot.queryParams.openid : '');
        this.form.get('UserPhone').setValue(this.route.snapshot.queryParams.mobile ? this.route.snapshot.queryParams.mobile : '');
        this.form.get('BuidingGID').setValue(this.route.snapshot.queryParams.bindingGid ? this.route.snapshot.queryParams.bindingGid : '');
    }

    ionViewDidEnter() {
        this.tabsSvc.set(false);
        this.setBinding();
    }

    del(item: any) {
        this.uploader.removeFromQueue(item);
    }

    pickerShow(target) {
        const index = this.form.get(target).value ? getIndex(SELECTIONS[target], 'value', this.form.get(target).value) : 0;
        this.pickerSvc.show([
                SELECTIONS[target]],
            '',
            [index]).subscribe(res => {
            this.form.get(target).setValue(res.value);
        });
    }

    pickerCity(target) {
        this.pickerSvc.showCity(DATA, '440101').subscribe(res => {
            this.form.get(target).setValue(res.items[0].name + res.items[1].name + res.items[2].name);
        });
    }

    pickerDate() {
        this.pickerSvc.showDateTime('date').subscribe(res => {
            this.form.get('birthday').setValue(res.formatValue);
        });
    }

    toggle(target, e) {
        this.form.get(target).setValue(e.detail.checked);
    }

    reset() {
        this.form.reset();
        this.form.get('ProjectGID').setValue('');
        this.form.get('ComeFrom').setValue('APP');
        this.followForm.reset();
        this.uploader.queue.forEach(item => {
            this.del(item);
        });
    }

    submit() {
        if (this.form.invalid || this.followForm.invalid) {
            return false;
        }
    }


    ionViewDidLeave() {
        this.pickerSvc.destroyAll();
    }
}
