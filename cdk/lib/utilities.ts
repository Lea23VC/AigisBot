export function deIndent(s: any): string {
  const lines: string[] = s.join('').split('\n');
  const leftMargin =
    lines
      .filter((x: string) => x)
      .map((x: string) => x.replace(/\S.*$/, '').length)
      .sort()[0] ?? 0;
  return lines.map((x: string) => x.substr(leftMargin)).join('\n');
}
