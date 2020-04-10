export function NewException(name, message) {
  this.name = name;
  this.message = message;
}
export function errorVerify(error) {
  if (error instanceof TypeError) {
    return `erro de typagem de código linha:${error.line}, coluna:${error.column}`;
  }
  if (error instanceof RangeError) {
    return `erro no tipo de variavel de código linha:${error.line}, coluna:${error.column}`;
  }
  return error.message;
}
