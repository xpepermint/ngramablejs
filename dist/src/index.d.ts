export declare enum NgramStyle {
    START = 1,
    MIDDLE = 2
}
export interface NgramRecipe {
    min?: number;
    max?: number;
    style?: NgramStyle;
}
export declare function tokenize(str: string): string[];
export declare function ngram(str: string, recipe?: NgramRecipe): string[];
