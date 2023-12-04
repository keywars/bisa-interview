import { Interview, Question, Tag, User } from "./db/schema";

type InterivewWithAuthorAndQuestion = Interview & {
  author: User;
  tag: Tag;
  questions: Question[];
};
