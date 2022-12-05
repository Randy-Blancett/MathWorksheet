export class Problem {
  maxCycle: number = 20;
  constructor(possibleAnswers: Map<number, boolean>, exists: string[], operation: Operation, min: number, max: number) {
    this.operation = operation;
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
      this.number2 = Problem.calculatePair(this.number1, answer, this.operation);
      if(this.getOperation() == Operation.SUBTRACT && this.number2>this.number1)
      {
        let tmp :number = this.getNumber1();
        this.number1 = this.getNumber2();
        this.number2 = tmp;
      }
      run = true;
    }
  }
  private number1: number = 0;
  private number2: number = 0;
  declare private operation: Operation 

  private static calculatePair(first: number, answer: number, op: Operation): number {
    switch (op) {
      case Operation.ADD:
        return answer - first;
      case Operation.SUBTRACT:
        return answer + first;
      case Operation.MULTIPLY:
        return answer / first;
      case Operation.DIVIDE:
        return answer * first;
    }
  }
  public getNumber1(): number {
    return this.number1;
  }
  public getNumber2(): number {
    return this.number2;
  }
  public getOperation(): Operation {
    return this.operation;
  }
  private static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * max) + min;
  }
  public getKey(): string {
    return this.getNumber1() + this.getOperation() + this.getNumber2();
  }
}
export enum Operation {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "x",
  DIVIDE = "/"
}
