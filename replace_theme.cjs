const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(dir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace slate with zinc
    content = content.replace(/slate-/g, 'zinc-');
    // Replace blue with violet
    content = content.replace(/blue-/g, 'violet-');
    // Replace cyan with fuchsia
    content = content.replace(/cyan-/g, 'fuchsia-');
    // Replace sky with purple
    content = content.replace(/sky-/g, 'purple-');
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
console.log('Done replacing theme colors.');
