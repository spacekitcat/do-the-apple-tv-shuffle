export default (file, stat) => {
  return !stat.isDirectory() && !file.endsWith('.mp4') && !file.endsWith('.m4v');
};
