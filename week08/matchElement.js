function match(selector, element) {
  let matchFlag = false;

  // Create properity list
  let hasParent = false;
  let parentList = [];
  let childrenList = [];
  let curProperty = '';

  for (let i = selector.length - 1; i >= 0; i--) {
    if (selector[i] === '.') {
      if (hasParent) {
        parentList.push({ cls: curProperty });
      } else {
        childrenList.push({ cls: curProperty });
      }
      curProperty = '';
      continue;
    } else if (selector[i] === '#') {
      if (hasParent) {
        parentList.push({ id: curProperty });
      } else {
        childrenList.push({ id: curProperty });
      }
      curProperty = '';
      continue;
    } else if (selector[i] === ' ') {
      if (curProperty !== '' && hasParent == false) {
        childrenList.push({ tag: curProperty });
        hasParent = true;
      } else if (curProperty !== '') {
        parentList.push({ tag: curProperty });
      }
      curProperty = '';
      continue;
    } else if (selector[i] === ',') {
      if (curProperty !== '' && hasParent == false) {
        childrenList.push({ tag: curProperty });
      } else if (curProperty !== '') {
        parentList.push({ tag: curProperty });
      }
      curProperty = '';
      continue;
    }

    curProperty = selector[i] + curProperty;
  }

  if (curProperty !== '') {
    if (hasParent) {
      parentList.push({ tag: curProperty });
    } else {
      childrenList.push({ tag: curProperty });
    }
    curProperty = '';
  }

  debugger;

  // Check porperity
  for (let i = 0; i < childrenList.length; i++) {
    if (Object.keys(childrenList[i])[0] === 'cls') {
      if (!element.classList.contains(childrenList[i]['cls'])) {
        return false;
      }
    } else if (Object.keys(childrenList[i])[0] === 'id') {
      if (element.id != childrenList[i]['id']) {
        return false;
      }
    } else if (Object.keys(childrenList[i])[0] === 'tag') {
      if (element.tagName.toLowerCase() != childrenList[i]['tag']) {
        return false;
      }
    } else {
      return false;
    }
  }

  if (hasParent) {
    element = element.parentElement;
  }

  for (let i = 0; i < parentList.length; i++) {
    if (Object.keys(parentList[i])[0] === 'cls') {
      if (!element.classList.contains(parentList[i]['cls'])) {
        return false;
      }
    } else if (Object.keys(parentList[i])[0] === 'id') {
      if (element.id != parentList[i]['id']) {
        return false;
      }
    } else if (Object.keys(parentList[i])[0] === 'tag') {
      if (element.tagName.toLowerCase() != parentList[i]['tag']) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
}

match(
  'div div #bottom-qrcode.modal.panel-modal.hide.fade.in',
  document.getElementById('bottom-qrcode')
);
// match('#bottom-qrcode.modal.panel-modal.hide.fade.in', 123);
