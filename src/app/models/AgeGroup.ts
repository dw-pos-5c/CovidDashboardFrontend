export default class AgeGroup {
  labels: string[];
  datasets: object[];

  constructor(labels: string[], datasets: object[]) {
    this.labels = labels;
    this.datasets = datasets;
  }
}
