export default class TimelineDaily {
  labels: string[];
  data: number[];

  constructor(labels: string[], data: number[]) {
    this.labels = labels;
    this.data = data;
  }
}
