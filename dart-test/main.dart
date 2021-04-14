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

List<List<List<BloodTypes>>> possibleCombinations = [
  [
    [BloodTypes.oneg, BloodTypes.oneg],
  ], // o-
  [
    [BloodTypes.opos, BloodTypes.opos],
    [BloodTypes.opos, BloodTypes.oneg],
  ], // o+
  [
    [BloodTypes.aneg, BloodTypes.oneg],
    [BloodTypes.aneg, BloodTypes.aneg],
  ], // a-
  [
    [BloodTypes.apos, BloodTypes.opos],
    [BloodTypes.apos, BloodTypes.oneg],
    [BloodTypes.apos, BloodTypes.apos],
    [BloodTypes.apos, BloodTypes.aneg],
  ], // a+
  [
    [BloodTypes.bneg, BloodTypes.oneg],
    [BloodTypes.bneg, BloodTypes.bneg],
  ],
  [
    [BloodTypes.bpos, BloodTypes.opos],
    [BloodTypes.bpos, BloodTypes.oneg],
    [BloodTypes.bpos, BloodTypes.bpos],
    
  ], 
  [
    []
  ], 
  [
    []
  ], 
]