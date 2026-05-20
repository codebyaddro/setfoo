#!/usr/bin/env node

import { program } from "commander";
import createProject from "../src/createProject.js";

program
    .option("--node-mvc <name>", "Create Node MVC project")
    .parse(process.argv);

const options = program.opts();

if (options.nodeMvc) {
    createProject(options.nodeMvc, "node-mvc");
} else {
    console.log("❌ Please use --node-mvc <project-name>");
}