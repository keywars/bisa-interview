import { Interview, Question, Tag, User } from "./db/schema";

type InterivewWithAuthorAndQuestionAndTag = Interview & {
  author: User;
  tag: Tag;
  questions: Question[];
};

type InterviewWithTag = Interview & {
  tag: Tag;
};
