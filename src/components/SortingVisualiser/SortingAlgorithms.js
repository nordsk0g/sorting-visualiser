import swap from "./swap";

// BUBBLE SORT

export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSort(array, animations);
  return animations;
}

function bubbleSort(array, animations) {
  let unsorted_until_index = array.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < unsorted_until_index; i++) {
      animations.push([i, i + 1, true]);
      animations.push([i, i + 1, false]);
      if (array[i] > array[i + 1]) {
        sorted = false;
        swap(array, i, i + 1);
        animations.push([i, array[i], i + 1, array[i + 1]]);
      }
    }
    unsorted_until_index--;
  }
}

// INSERTION SORT

export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  insertionSort(array, animations);
  return animations;
}

function insertionSort(array, animations) {
  for (let i = 1; i < array.length; i++) {
    let position = i;
    let temp = array[i];
    animations.push([true, position, position - 1]);
    animations.push([false, position, position - 1]);

    while (position > 0 && array[position - 1] > temp) {
      array[position] = array[position - 1];
      position = position - 1;
      animations.push([true, position, position + 1]);
      animations.push([position, temp, position + 1, array[position + 1]]);
      animations.push([false, position, position + 1]);
    }
    array[position] = temp;
  }
}

// MERGE SORT

export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIndex,
  endIndex,
  auxiliaryArray,
  animations
) {
  if (startIndex === endIndex) return;
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  mergeSortHelper(
    auxiliaryArray,
    startIndex,
    middleIndex,
    mainArray,
    animations
  );
  mergeSortHelper(
    auxiliaryArray,
    middleIndex + 1,
    endIndex,
    mainArray,
    animations
  );
  doMerge(
    mainArray,
    startIndex,
    middleIndex,
    endIndex,
    auxiliaryArray,
    animations
  );
}

function doMerge(
  mainArray,
  startIndex,
  middleIndex,
  endIndex,
  auxiliaryArray,
  animations
) {
  let k = startIndex;
  let i = startIndex;
  let j = middleIndex + 1;
  while (i <= middleIndex && j <= endIndex) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIndex) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIndex) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

// QUICK SORT
export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSort(array, 0, array.length - 1, animations);
  return animations;
}

function partition(array, low, high, animations) {
  let i = low - 1;
  let pivot = array[high];

  for (let j = low; j < high; j++) {
    animations.push([true, j, high]);
    animations.push([false, j, high]);
    if (array[j] <= pivot) {
      i++;
      animations.push([i, array[j], j, array[i]]);
      swap(array, i, j);
    }
  }
  animations.push([i + 1, array[high], high, array[i + 1]]);
  swap(array, i + 1, high);
  return i + 1;
}

function quickSort(array, low, high, animations) {
  if (low < high) {
    let partitionIndex = partition(array, low, high, animations);
    quickSort(array, low, partitionIndex - 1, animations);
    quickSort(array, partitionIndex + 1, high, animations);
  }
}
