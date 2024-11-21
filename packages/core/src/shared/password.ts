export default class Password {
  static new(tamanho: number = 8): string {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = lowercase.toUpperCase();
    const numbers = "0123456789";
    const especials = "!@#$%&*";

    const group = [lowercase, uppercase, numbers, especials];
    const password = [];

    for (let i = 0; i < tamanho; i++) {
      const grupo = group[Math.floor(Math.random() * group.length)];
      password.push(grupo[Math.floor(Math.random() * group.length)]);
    }

    return password.join("");
  }
}
