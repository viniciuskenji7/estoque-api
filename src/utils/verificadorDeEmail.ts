

export function verificarEmailRegex(email: string): boolean {
  // Regex padrão compatível com a maioria dos navegadores e frameworks
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!email || typeof email !== "string") {
    return false;
  }

  return emailRegex.test(email.trim());
}