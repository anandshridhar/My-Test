var list = [5, 4, 8, 9, 0, 2, 17, 44, 65];
var newlist = [];
function setup() {
  createCanvas(640, 480);
  newlist = quicksort(list);
}

function findsmallest(list){
  var smallest = 0;
  var smallest_index = 0;
  for(var i=0; i<= list.length; i++){
    if (list[i] < smallest){
      smallest = list[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}
function selection_sort(list){
  var newlist = [];
  for(var k=0; k<=list.length; k++){
    var smallest = findsmallest(list);
    newlist.push(list.splice(smallest,1));  
    return newlist;
 
  }
}
function sumlist(list){
  if (list.length == 1){
    return list[0];
  } else {
    return (list.pop() + sumlist(list));
  }
}
function quicksort(list){
  var pivot = [];
  var less = [];
  var more = [];
  if (list.length < 2){
    return list
  } else {
      
      pivot.push(list[0]);
      
     
      for(i=0; i<=list.length; i++){
        if(list[i] <= pivot){
          less.push(list[i]);
        }
        if(list[i] > pivot){
          more.push(list[i]);        
        }
      }
      return quicksort(less).push(pivot).push(quicksort(more));
    }
  }

function draw() {
  background(100);
  text(newlist, width/2, height/2);
}
