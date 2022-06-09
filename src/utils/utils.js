function limitNumberWithinRange(num, min, max) {
  const MIN = min || 0;
  const MAX = max || 2;
  const parsed = parseInt(num);
  return Math.min(Math.max(parsed, MIN), MAX);
}

export { limitNumberWithinRange };
