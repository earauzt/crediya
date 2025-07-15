export async function getEquifaxScore(ci: string): Promise<number> {
  void ci
  // Mock implementation of an Equifax score lookup
  return 300 + Math.floor(Math.random() * 400)
}
