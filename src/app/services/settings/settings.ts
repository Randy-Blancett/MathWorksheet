export interface Settings {
    ProblemsPerPage: number;
    MinAnswer: number;
    MaxAnswer: number;
    Operations:Operations ;
}

export interface Operations {
        Add:boolean;
        Subtract:boolean;
        Multiply:boolean;
        Divide:boolean;
}