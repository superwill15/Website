"""
Fix markdown table spacing - ensure blank line before tables.
"""
import re
import os

def fix_table_spacing(content):
    """Add blank line before tables and lists that don't have one."""
    lines = content.split('\n')
    result = []

    for i, line in enumerate(lines):
        # Check if this line starts a table (starts with | and has content)
        is_table_start = line.startswith('|') and len(line) > 1
        # Check if this line starts a list (starts with - or * or number.)
        is_list_start = (line.startswith('- ') or line.startswith('* ') or
                         (len(line) > 2 and line[0].isdigit() and line[1] in '.)'))

        if (is_table_start or is_list_start) and i > 0:
            prev_line = lines[i-1].strip()
            # If previous line is not empty, not a table/list row, and not a separator
            if (prev_line and
                not prev_line.startswith('|') and
                not prev_line.startswith('- ') and
                not prev_line.startswith('* ') and
                prev_line != '---'):
                # Add blank line before table/list
                result.append('')

        result.append(line)

    return '\n'.join(result)

def process_file(filepath):
    """Process a single markdown file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    fixed_content = fix_table_spacing(content)

    if fixed_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed_content)
        print(f"Fixed: {filepath}")
    else:
        print(f"No changes: {filepath}")

def main():
    resources_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)),
                                  'content', 'resources')

    for filename in os.listdir(resources_dir):
        if filename.endswith('.md'):
            filepath = os.path.join(resources_dir, filename)
            process_file(filepath)

if __name__ == '__main__':
    main()
