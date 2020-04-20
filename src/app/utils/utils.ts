export function getIndex(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return i;
    }
  }
}

export function getBase64(queue, cb) {
  let value = '';
  queue.forEach(item => {
    const reader = new FileReader();
    reader.readAsDataURL(item._file);
    reader.onload = () => {
      if (value) {
        value = value + '|' + reader.result;
      } else {
        value = '' + reader.result;
      }
      cb(value);
    };
  });
}

export function fileToBase64(file, cb) {
  let value = '';
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    if (value) {
      value = value + '|' + reader.result;
    } else {
      value = '' + reader.result;
    }
    cb(value);
  };
}

export function imgToBase64(img) {
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, img.width, img.height);
  const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase();
  const dataURL = canvas.toDataURL('image/' + ext);
  return dataURL;
}

export function downloadImg(url, cb) {
  const src = url;
  const canvas = document.createElement('canvas');
  const img = document.createElement('img');
  img.setAttribute('crossOrigin', 'Anonymous');
  img.src = src;
  img.onload = (e) => {
    canvas.width = img.width;
    canvas.height = img.height;
    const context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, img.width, img.height);
    // window.navigator.msSaveBlob(canvas.msToBlob(),'image.jpg');
    // saveAs(imageDataUrl, '附件');
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    canvas.toBlob((blob) => {
      cb(window.URL.createObjectURL(blob));
    }, 'image/jpeg');
  };
}

export function listToTree(data, options?) {
  options = options || {};
  const ID_KEY = options.idKey || 'i';
  const PARENT_KEY = options.parentKey || 'p';
  const CHILDREN_KEY = options.childrenKey || 'children';

  const tree = [];
  const childrenOf = {};
  let item;
  let id;
  let parentId;

  for (let i = 0, length = data.length; i < length; i++) {
    item = data[i];
    id = item[ID_KEY];
    parentId = item[PARENT_KEY] || 'root';
    // every item may have children
    childrenOf[id] = childrenOf[id] || [];
    // init its children
    item[CHILDREN_KEY] = childrenOf[id];
    if (parentId !== 'root') {
      // init its parent's children object
      childrenOf[parentId] = childrenOf[parentId] || [];
      // push it into its parent's children object
      childrenOf[parentId].push(item);
    } else {
      tree.push(item);
    }
  }

  return tree;
}

export function listToType(data) {
  const result = {
    top: [],
    today: [],
    middle: [],
    tab: [],
    bottom: [],
    ad: []
  };
  data.forEach(item => {
    if (item.MLevel === 1 || item.MLevel === 11) {
      result.top.push(item);
    }
    if (item.MLevel === 2) {
      result.middle.push(item);
    }
    if (item.MLevel === 3) {
      result.ad.push(item);
    }
    if (item.MLevel === 5) {
      result.bottom.push(item);
    }
    if (item.MLevel === 80) {
      item.sub = listToType(item.children);
      result.tab.push(item);
    }
    if (item.MLevel === 90) {
      result.today.push(item);
    }
  });
  return result;
}

export function groupList(items, length) {
  const result = [];
  let list = [];
  for (let i = 0; i <= items.length; i++) {
    list.push(items[i]);
    if ((i + 1) % length === 0 || i === items.length - 1) {
      result.push(list);
      list = [];
    }
  }
  return result;
}

/*{
  'name': '北京',
  'code': '110000',
  'sub': [
  {
    'name': '北京市',
    'code': '110000',
    sub:[
    {
            'name': '东城区',
            'code': '110101'
          },
          ]
    */

export function toPickerData(data) {
  const result = [];
  let i = 11;
  data.forEach(item => {
    const index = getIndex(result, 'name', item.QDType);
    if (typeof index !== 'number') {
      i = i + 1;
      const obj = {
        name: item.QDType,
        code: i + '0000',
        sub: [
          {
            name: item.QDName,
            code: i + '0100'
          }
        ]
      };
      result.push(obj);
    } else {
      let num = result[index].sub[result[index].sub.length - 1].code;
      num = parseInt(num, 10);
      const obj = {
        name: item.QDName,
        code: num + 100 + '',
      };
      result[index].sub.push(obj);
    }
  });
  return result;
}
