import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";

// Fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createProject = async (projectName, template) => {

    // IMPORTANT
    // Find package root safely
    const packageRoot = path.resolve(__dirname, "..");

    // Template path
    const templatePath = path.join(
        packageRoot,
        "templates",
        template
    );

    // Output project path
    const targetPath = path.join(
        process.cwd(),
        projectName
    );

    // DEBUG
    console.log(chalk.yellow("Package Root:"), packageRoot);
    console.log(chalk.yellow("Template Path:"), templatePath);
    console.log(chalk.yellow("Target Path:"), targetPath);

    // Check template exists
    if (!fs.existsSync(templatePath)) {
        console.log(chalk.red("❌ Template folder not found"));
        return;
    }

    // Prevent overwrite
    if (fs.existsSync(targetPath)) {
        console.log(chalk.red("❌ Folder already exists"));
        return;
    }

    try {

        // Copy project
        await fs.copy(templatePath, targetPath);

        // Hidden file rename
        const hiddenFiles = [
            ["gitignore", ".gitignore"],
            ["env", ".env"],
            ["env.example", ".env.example"],
            ["dockerignore", ".dockerignore"],
        ];

        for (const [from, to] of hiddenFiles) {

            const oldPath = path.join(targetPath, from);
            const newPath = path.join(targetPath, to);

            if (await fs.pathExists(oldPath)) {
                await fs.move(oldPath, newPath);
            }
        }

        console.log(chalk.green("\n🚀 Project created successfully!\n"));
        console.log(chalk.cyan(`cd ${projectName}`));
        console.log(chalk.cyan("npm install"));

    } catch (error) {

        console.error(
            chalk.red("❌ Failed to create project"),
            error
        );
    }
};

export default createProject;