export default class TimelineDaily {
  labels: string[];
  datasets: object[];

  constructor(labels: string[], datasets: object[]) {
    this.labels = labels;
    this.datasets = datasets;
  }
}
