import "dart:math" as Math;

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

class Algorithm {

// Schema: 
//  If you are type: | You can receive type:
List<List<List<BloodTypes>>> possibleCombinations = [
    [BloodTypes.opos, BloodTypes.opos],
    [BloodTypes.opos, BloodTypes.oneg],
    [BloodTypes.oneg, BloodTypes.oneg],
    [BloodTypes.apos, BloodTypes.opos],
    [BloodTypes.apos, BloodTypes.oneg],
    [BloodTypes.apos, BloodTypes.apos],
    [BloodTypes.apos, BloodTypes.aneg],
    [BloodTypes.aneg, BloodTypes.oneg],
    [BloodTypes.aneg, BloodTypes.aneg],
    [BloodTypes.bpos, BloodTypes.opos],
    [BloodTypes.bpos, BloodTypes.oneg],
    [BloodTypes.bpos, BloodTypes.bpos],
    [BloodTypes.bpos, BloodTypes.bneg],
    [BloodTypes.bneg, BloodTypes.bneg],
    [BloodTypes.bneg, BloodTypes.oneg],
    [BloodTypes.bneg, BloodTypes.bneg],
    [BloodTypes.abpos, BloodTypes.opos],
    [BloodTypes.abpos, BloodTypes.apos],
    [BloodTypes.abpos, BloodTypes.aneg],
    [BloodTypes.abpos, BloodTypes.bpos],
    [BloodTypes.abpos, BloodTypes.bneg],
    [BloodTypes.abpos, BloodTypes.abpos],
    [BloodTypes.abpos, BloodTypes.abneg],
    [BloodTypes.abneg, BloodTypes.oneg],
    [BloodTypes.abneg, BloodTypes.aneg],
    [BloodTypes.abneg, BloodTypes.bneg],
    [BloodTypes.abneg, BloodTypes.abneg,]
]
  // Part 1

  BloodTypes matchNumType(int number) {
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
  }

  List<List<List<BloodTypes>>> generate() {
    List<List<List<BloodTypes>>> models = [];
    for (int i = 0; i < 324; i++) {
      List<List<BloodTypes>> model = [];

      for (int j = 0; j < 6; j++) {
        List<BloodTypes> pair = [];
        int r1 = Math.Random().nextInt(7);
        int r2 = Math.Random().nextInt(7);
        BloodTypes donor = matchNumType(r1);
        BloodTypes patient = matchNumType(r2);
        pair.add(donor);
        pair.add(patient);

        model.add(pair);
      }

      models.add(model);
    }

    return models;
  }

  List<BloodTypes> destructureModel(List<List<BloodTypes>> model) {
    List<BloodTypes> desturcturedModel = [];

    for (pair in model){
      desturcturedModel.add(pair[0]);
      desturcturedModel.add(pair[1]);
    }

    return desturcturedModel;
  }

  List filter(List<List<BloodTypes>>> model) {
    List<BloodTypes> destructuredModel = destructureModel(model);
    int pairs = 0;
    List map;

    for (int i = 0; i < destructuredModel.length; i++){
      for (int k = 0; k < destructuredModel.length; k++){
        for (int j = 0; j < 27; j++){
          List<BloodTypes> tempPair = [destructuredModel[i], destructuredModel[k]]
          if (k != i){ // TODO: Look at condition for if clause
            if (tempPair == possibleCombinations[j]){
              pairs++;
              destructuredModel.removeAt(i);
              destructuredModel.removeAt(k);
            }
          }
        }
      }
    }

    if (pairs == 6) {
      map = [
        true,
        model,
      ];
    } else {
      map = [
        false,
        model,
      ];
    }

    return map;
  }

  List<List<List<BloodTypes>>> filterAll(List<List<List<BloodTypes>>> models) {
    List<List<List<BloodTypes>>> verifiedModel = [];

    for (model in models){
      List isVerifiedModel = filter(model);

      if (isVerifiedModel[0]){
        verifiedModel.add(isVerifiedModel[1]);
      }
    }

    return verifiedModel;
  }

  List<List<List<BloodTypes>>> match() {
    List<List<List<BloodTypes>>> randomModels = algorithm.generate();

    List<List<List<BloodTypes>>> verifiedModels = algorithm.filterAll(randomModels);

    return verifiedModels;
  }
}

