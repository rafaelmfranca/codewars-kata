const recycle = (array) => {
  const x = array.reduce((acc, {type, material, secondMaterial}) => {
    acc[material].push(type)
    if(secondMaterial) acc[secondMaterial].push(type)
    return acc;
  }, { paper: [], glass: [], organic: [], plastic: [] });
  return [x['paper'], x['glass'], x['organic'], x['plastic']]
}