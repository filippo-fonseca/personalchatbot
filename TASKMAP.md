# 🚀 Workspace TaskMap Page Backend CRUD

## 🎉 Task Overview

The purpose of this task is to implement the backend resolvers (Create, Read, Update, Delete) functionality for backend content pages.

## 🧠 Important Questions

These are some fundamental questions you must answer with your results.

1. What is the most efficient way of implementing a proper backend CRUD system for a project management tool like a Task Map page?

2. How can I take what has already been built out in other features and their respective best practices, methodologies, etc. (Planner, Quick Capture, Content Pages, LifeOS, etc.) and apply it to Task Map?

3. Do I need to modiffy the existing entities for Task Map as I build out the resolvers? If so, how and to what extent?

4. What are potential conundrums or contingencies (issues) I should account for that might occurr at some point in the development of this task?

## 🎙 Considerations

These are some of the constraints and considerations you must take into account when building your result.

- A *Task Map* is a type of Workspace page (just like a *Content Page* is one)
- The backend entities have already been mostly built out but might need slight refactoring/modifications

- You might need more than the four basic CRUD functions, given Task Map is complex (check the `PageResolvers.ts` file in the `resolvers` directory to see what these may be) => some might be to create a `TaskMapColumn`, others for a simple `TaskTag`, etc. It really depends on the circumstance and feature.

## 🧪 Deliverables

These are a list of all the different aspects that must be included in the final result.

- A full CRUD (Create, Read, Update, Delete) system for Task Map pages and their related contingencies
- The CRUD system must account for all parts of this respective feature (columns, cards, etc.) that have been outlined in the `entity` dierctory and its respective sub-dir for `TaskMap` (this section is one's best friend here for guidance on the CRUD structure)
- The system musy be functional and efficient in its use and manipulation of data
- The same stack as the rest of the backend resolvers must be used (naturally)
- Convention and proper best practices must all be in full display (polymorphism, extraction, etc.)

Best of luck and let anyone on the team know if you have any questions!