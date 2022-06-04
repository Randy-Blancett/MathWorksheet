export class Problem {
  maxCycle: number = 20;
  constructor(possibleAnswers: Map<number, boolean>, exists: string[], min: number, max: number) {
    let answer: number = Problem.getRandomInt(min, max);
    let cycle = 0;
    while (!possibleAnswers.get(answer) && cycle < this.maxCycle) {
      cycle++;
      answer = Problem.getRandomInt(min, max);
    }
    possibleAnswers.delete(answer);
    let run: boolean = false;
    cycle = 0;
    while ((exists.includes(this.getKey()) && cycle < this.maxCycle) || !run) {
      cycle++;
      this.number1 = Problem.getRandomInt(1, answer - 1);
      this.number2 = answer - this.number1;
      run = true;
    }
  }
  private number1: number = 0;
  private number2: number = 0;
  private operation: string = "+";

  public getNumber1(): number {
    return this.number1;
  }
  public getNumber2(): number {
    return this.number2;
  }
  public getOperation(): string {
    return this.operation;
  }
  private static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }
  public getKey(): string {
    return this.getNumber1() + this.getOperation() + this.getNumber2();
  }
}
