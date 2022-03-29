export function transform(old: { [key: string]: string[] }) {
  let array: { [key: string]: number } = {};
  for (let key in old) {
    console.log(key);
    let letras: string[] = old[key];
    let numero = parseInt(key);
    letras.sort();
    console.log(letras);
    for (let entry of letras) {
      let letra: string = entry.toLocaleLowerCase()
      array[letra] = numero;
    }

  }
  return array;
}
