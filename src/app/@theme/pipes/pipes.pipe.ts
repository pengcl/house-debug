import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {getIndex} from '../../utils/utils';

@Pipe({
  name: 'repairDate',
  pure: false
})

@Injectable()
export class RepairDatePipe implements PipeTransform {
  transform(value): any {
    value = value.split('.')[0].replace(/\-/g, '/');
    return value;
  }
}

@Pipe({
  name: 'cnDate',
  pure: false
})

@Injectable()
export class CnDatePipe implements PipeTransform {
  transform(value): any {
  }
}

@Pipe({
  name: 'label',
  pure: false
})
@Injectable()
export class LabelPipe implements PipeTransform {
  transform(value, data): any {
    if (!value) {
      return value;
    }
    const index = getIndex(data, 'value', value);
    if (typeof index === 'number') {
      return data[index].label;
    } else {
      return value;
    }
  }
}

@Pipe({
  name: 'gmt',
  pure: false
})
@Injectable()
export class GmtPipe implements PipeTransform {
  transform(value, data): any {
    if (null === value || '' === value) {
      return '';
    }
    return new Date(Date.parse(value));
  }
}
