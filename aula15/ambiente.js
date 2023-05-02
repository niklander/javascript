let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()// coloca os numeros ou letrass em ordem alfabetica
console.log(num)
console.log(`O vetor tem ${num.length} posições`) //mostra a quantidade de elementos no vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)//mostra primeiro elemento do vetor !

 let pos = num.indexOf(4)
 if( pos == -1){
    console.log('o valor não foi encontrado')
 }else {
    console.log(`O valor 8 está na posição ${pos}`) 
 }
