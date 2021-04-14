enum BloodTypes {
  oneg,
  opos,
  aneg,
  apos,
  bneg,
  bpos,
  abneg,
  abpos,
}

const matchNumType = (number: number): BloodTypes => {
  switch (number) {
    case 0:
      return BloodTypes.oneg;
      break;
    case 1:
      return BloodTypes.opos;
      break;
    case 2:
      return BloodTypes.aneg;
      break;
    case 3:
      return BloodTypes.apos;
      break;
    case 4:
      return BloodTypes.bneg;
      break;
    case 5:
      return BloodTypes.bpos;
      break;
    case 6:
      return BloodTypes.abneg;
      break;
    case 7:
      return BloodTypes.abpos;
      break;
  }

  return BloodTypes.oneg;
};

const generate = (): BloodTypes[] => {
  const arr = [0, 1, 2, 3, 4, 5, 6];
  let models = [];
  for (let i: number = 0; i < 324; i++) {
    let model = [];

    for (let j: number = 0; j < 6; j++) {
      let pair = [];
      const r1: number = Math.floor(Math.random() * arr.length);
      const r2: number = Math.floor(Math.random() * arr.length);
      const donor: BloodTypes = matchNumType(r1);
      const patient: BloodTypes = matchNumType(r2);
      pair.push(donor);
      pair.push(patient);

      model.push(pair);
    }

    models.push(model);
  }

  return models;
};

console.log(generate());
