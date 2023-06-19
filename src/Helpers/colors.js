const pastel = ['#ACE6E4', '#C6F5E9', '#FCCAE2', '#C6D8E6', '#B6CBE3', '#9AB4DB', '#595794', '#9FD4A6', '#C8E6CF'];

export function getRandomPastelColor() {
  const random = Math.floor(Math.random() * pastel.length);
  return pastel[random];
}

export function getIndexedColor(index) {
  return pastel[index % pastel.length];
}
