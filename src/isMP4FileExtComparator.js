export default (file, stat) => {
  return !stat.isDirectory() && !file.endsWith('.mp4');
};
