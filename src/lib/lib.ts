export function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  // Массивы равны
  return true;
}

export function findByProperty(
  array: Array<any>,
  property: string,
  value: any
) {
  const results = [];
  for (const object of array) {
    if (object[property] === value) {
      results.push(object);
    }
  }
  return results;
}

export function removeByIndex(array: Array<any>, index: number) {
  if (index < 0 || index >= array.length) {
    return array;
  }

  const newArray = new Array(array.length - 1);
  for (let i = 0; i < index; i++) {
    newArray[i] = array[i];
  }
  for (let i = index + 1; i < array.length; i++) {
    newArray[i - 1] = array[i];
  }

  return newArray;
}

export function isSubset(set1: number[], set2: number[]): boolean {
  // Создаем набор всех элементов из set1.
  const set1Set = new Set(set1);

  // Проходим по каждому элементу set2.
  for (const element of set2) {
    // Если элемент не содержится в set1Set, то возвращаем false.
    if (!set1Set.has(element)) {
      return false;
    }
  }
  // Все элементы set2 содержатся в set1Set, поэтому возвращаем true.
  return true;
}
export function isSet(set1: number[], set2: number[]) {
  let count = 4;
  set2.map((id) => {
    if (set1.includes(id)) count--;
  });
  return count <= 0;
}
