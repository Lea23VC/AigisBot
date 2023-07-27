import { drive } from '../../src/config/google';

export async function getRomUrl(
  folderId: string,
  name: string,
): Promise<string[]> {
  const results = await drive.files.list({
    q: "name contains '" + name + "' and '" + folderId + "' in parents",
    fields: 'files(id, name, parents)',
  });

  const files_ = results.data.files?.map((file) => {
    return (
      `${file.name}: https://drive.google.com/uc?export=download&id=${file.id}` ||
      ''
    );
  });

  return files_ as string[];
}
