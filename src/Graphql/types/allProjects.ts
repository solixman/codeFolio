import { GraphQLList } from "graphql";
import { projectType } from "./projectType";


export const allProjects = new GraphQLList(projectType);