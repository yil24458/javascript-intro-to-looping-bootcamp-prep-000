function forLoop(array)
{
  for (let i = 0; i < 25; i++)
  {
    array.push("I am ${i} strange loops")
  }
return array
}

function whileLoop(n)
{
  while (n > 0 ) {
    console.log(--n)
  }
  return 'done'
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    for (let i = array.length; i>0; i--) {
      array.pop(i)
    }
  } while (array.length > 0 && maybeTrue());
    return array
}
