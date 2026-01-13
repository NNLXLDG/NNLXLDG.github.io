// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import fs from 'fs';
import path from 'path';

// 递归复制目录
function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

export default defineConfig({
  site: 'https://github.com/NNLXLDG/NNLXLDG.github.io',
  output: 'static',
  integrations: [sitemap()],
  hooks: {
    'astro:build:done': async ({ dir }) => {
      // 复制所有图片资源到 dist/content/notes
      const srcNotesDir = './src/content/notes';
      const destDir = dir instanceof URL ? dir.pathname : String(dir);
      const destContentDir = path.join(destDir, 'content', 'notes');
      
      console.log('🔍 Build hook: sourceDir=', srcNotesDir, ', destDir=', destContentDir);
      
      try {
        // 创建目标目录
        if (!fs.existsSync(destContentDir)) {
          fs.mkdirSync(destContentDir, { recursive: true });
        }
        
        // 递归遍历并复制所有 assets 文件夹中的文件
        function copyAssetsFromDir(srcDir, destBase) {
          const files = fs.readdirSync(srcDir, { withFileTypes: true });
          
          files.forEach(file => {
            const srcPath = path.join(srcDir, file.name);
            
            if (file.isDirectory()) {
              if (file.name === 'assets') {
                // 找到 assets 文件夹，复制其内容
                const relativePath = path.relative(srcNotesDir, srcDir);
                const destPath = path.join(destBase, relativePath, 'assets');
                copyDirRecursive(srcPath, destPath);
              } else {
                // 继续递归搜索子目录
                copyAssetsFromDir(srcPath, destBase);
              }
            }
          });
        }
        
        copyAssetsFromDir(srcNotesDir, destContentDir);
        console.log('✓ Notes assets copied to dist');
      } catch (error) {
        console.error('✗ Failed to copy notes assets:', error);
      }
    }
  }
});