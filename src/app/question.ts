export interface Question {
    id?: string;
    title: string;
    description: string;
    answers?: Answer[];
  }
  
  export interface Answer {
    id?: string;
    content: string;
  }
  