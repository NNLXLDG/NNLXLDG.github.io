// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 复制 notes 内容到 public 的函数
const copyNotesContent = () => {
  const srcDir = path.join(__dirname, 'src', 'content', 'notes');
  const destDir = path.join(__dirname, 'public', 'content', 'notes');
  
  if (!fs.existsSync(srcDir)) return;
  
  // 递归复制所有文件
  const copyDir = (src, dest) => {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const files = fs.readdirSync(src);
    files.forEach(file => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      const stat = fs.statSync(srcPath);
      
      if (stat.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  };
  
  copyDir(srcDir, destDir);
};

export default defineConfig({
  site: 'https://github.com/NNLXLDG/NNLXLDG.github.io',
  output: 'static',
  integrations: [
    sitemap(),
    {
      name: 'copy-notes-content',
      hooks: {
        'astro:server:start': () => {
          // 在开发服务器启动时复制
          copyNotesContent();
          console.log('✓ Notes content synced to public');
        },
        'astro:build:start': () => {
          // 在构建开始时复制
          copyNotesContent();
          console.log('✓ Notes content synced to public for build');
        },
      },
    },
  ],
});