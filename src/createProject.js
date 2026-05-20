import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";

// Fix __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createProject = async (projectName, template) => {
    // Absolute template path
    const templatePath = path.resolve(
        __dirname,
        "..",
        "templates",
        template
    );

    // User project path
    const targetPath = path.resolve(process.cwd(), projectName);

    // Debug logs
    console.log(chalk.cyan("📁 Template Path:"), templatePath);
    console.log(chalk.cyan("📁 Target Path:"), targetPath);

    // Check template exists
    if (!fs.existsSync(templatePath)) {
        console.log(chalk.red("❌ Template folder not found!"));
        return;
    }

    // Prevent overwrite
    if (fs.existsSync(targetPath)) {
        console.log(chalk.red("❌ Folder already exists!"));
        return;
    }

    try {
        // Copy template folder
        await fs.copy(templatePath, targetPath);

        // Rename hidden files
        const renameFiles = [
            ["gitignore", ".gitignore"],
            ["env", ".env"],
            ["env.example", ".env.example"],
            ["dockerignore", ".dockerignore"],
        ];

        for (const [oldName, newName] of renameFiles) {
            const oldPath = path.join(targetPath, oldName);
            const newPath = path.join(targetPath, newName);

            if (fs.existsSync(oldPath)) {
                await fs.rename(oldPath, newPath);
            }
        }

        console.log(chalk.green("\n🚀 Project created successfully!"));
        console.log(chalk.blue(`👉 cd ${projectName}`));
        console.log(chalk.yellow("👉 npm install"));

    } catch (err) {
        console.error(chalk.red("❌ Error creating project:"), err);
    }
};

export default createProject;