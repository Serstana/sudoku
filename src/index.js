module.exports = function solveSudoku(matrix) {
  // your solution
  let newArray=[];
  for (let col=0; col<matrix.length; col++){
    for(let row=0; row<matrix[col].length; row++){
      if(matrix[col][row]==0){
      newArray.push([col,row]);
      }
    }
  } 
  for (let i=0;i<newArray.length;i++){
  matrix[newArray[i][0]][newArray[i][1]] +=1;
    if (matrix[newArray[i][0]][newArray[i][1]]>9){
    matrix[newArray[i][0]][newArray[i][1]]=0;
      if(i>0){
      i -= 2;
      }else{
      i -= 1;
      }
    }else{
    let j=0; 
    for (j=0;j<matrix.length;j++){
      if((matrix[newArray[i][0]][newArray[i][1]]==matrix[j][newArray[i][1]])&&(newArray[i][0]!=j)){
      i -= 1;
      break;
      }
      if((matrix[newArray[i][0]][newArray[i][1]]==matrix[newArray[i][0]][j])&&(newArray[i][1]!=j)){
      i -= 1;
      break;
      }
    }
    if(j==matrix.length){
      for(j = 0; j < 3; j++){
        for(let k = 0; k < 3; k++){
          if((matrix[newArray[i][0]][newArray[i][1]]==matrix[(Math.floor((newArray[i][0])/3)*3)+j][(Math.floor((newArray[i][1])/3)*3)+k])&&(newArray[i][0]!=((Math.floor((newArray[i][0])/3)*3)+j))&&(newArray[i][1]!=((Math.floor((newArray[i][1])/3)*3)+k))){
          i -= 1;
          j=3;
          k=3;
          break;
          }
        }
      }
    }
    }
  } return matrix;
}
