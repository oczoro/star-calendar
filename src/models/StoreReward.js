class StoreReward {
  constructor(name, desc, img, cost) {
    this.name = name;
    this.desc = desc;
    this.img = img;
    this.cost = cost;
  }

  returnOBJ() {
    return {
      ...this,
    };
  }
}

export default StoreReward;
