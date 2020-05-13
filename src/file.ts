import { createHash } from "crypto";
import { join } from "path";
import { tmpdir } from "os";
import { writeFile } from "fs";
import { promisify } from "util";

const promiseWriteFile = promisify(writeFile);

export async function writeTempFile(filename: string, html: string) {
  const hashedFileName =
    createHash("md5").update(filename).digest("hex") + ".html";
  console.log(hashedFileName);

  const filePath = join(tmpdir(), hashedFileName);

  await promiseWriteFile(filePath, html);
  return filePath;
}
