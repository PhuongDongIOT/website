import { createReadStream, statSync } from 'fs';

export const videoStream = (req: any, path: string) => {
  const stat = statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  const res = req.res;

  if (range) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = (end - start) + 1;
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(206, head);
    createReadStream(path, {start, end}).pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    };
    res.writeHead(200, head);
    createReadStream(path).pipe(res);
  }
};

export const simpleVideoStream = (res: any, path: string) => {
  createReadStream(path).pipe(res);
};