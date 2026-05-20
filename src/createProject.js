import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";

// Fix __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createProject = async (projectName, template) => {
    const templatePath = path.join(__dirname, "../templates", template);
    const targetPath = path.join(process.cwd(), projectName);

    if (fs.existsSync(targetPath)) {
        console.log(chalk.red("❌ Folder already exists!"));
        return;
    }

    try {
        // Copy template
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

        console.log(chalk.green("🚀 Project created successfully!"));
        console.log(chalk.blue(`👉 cd ${projectName}`));
        console.log(chalk.yellow("👉 npm install"));

    } catch (err) {
        console.error(chalk.red("❌ Error:"), err);
    }
};

export default createProject;