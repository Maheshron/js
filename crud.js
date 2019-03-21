var arr = []
function add(name,age,designation){
  var lengthOfArray = arr.length + 1;
  arr.push({
    id:lengthOfArray,
    name:name,
    age:age,
    designation:designation
  })
  lengthOfArray++;
}
function update(oldName,nameToUpdate){
  for(var i =0;i<arr.length;i++){
    if(arr[i].name === oldName){
      arr[i].name = nameToUpdate;
      }
  }
}
function deleteName(name){
  for(var i=0;i<arr.length;i++){
    if(arr[i].name === name){
      delete arr[i];
    }
  }
}
function search(name){
  for(var i=0;i<arr.length;i++){
    if(arr[i].name === name){
      console.log(arr[i].name+" "+arr[i].age + " "+arr[i].designation);
    }
  }
}
add("Kevein",22,"Ui developer");
add("ron",21,'fb player');
add("lebron james",23,"bb player");
console.log(arr);
update("Kevein","kevin");
console.log(arr)
deleteName("ron")
console.log(arr);
search("kevin");
