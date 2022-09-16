function loadGrain(array) {

  let leftSideIndex = 0;
  let activate = 0;
  let result = 0;
  let usedContent = 0;

  for(let i = 1; i< array.length; i++ ){

    if(array[i-1]>array[i]){
      activate = 1;
    }

    if(activate){
      
      if(array[i-1]<array[i]){
        result += Math.min(array[i], array[leftSideIndex]) * (i-leftSideIndex-1) - usedContent;
        usedContent = Math.min(array[i], array[leftSideIndex]) * (i-leftSideIndex);
      }
      else {
        usedContent += array[i];
      }

    }

    if(array[leftSideIndex]<= array[i]){
      leftSideIndex = i;
      usedContent = 0;
      activate = 0;
    }
  }

  return result;
}

console.log(loadGrain([2, 1, 5, 2, 7, 4, 10]) )