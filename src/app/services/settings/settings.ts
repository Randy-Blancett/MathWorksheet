import { Operation } from "../../problem";

export interface Settings {
    ProblemsPerPage: number;
    MinAnswer: number;
    MaxAnswer: number;
    Operations:Set<Operation>    ;
}