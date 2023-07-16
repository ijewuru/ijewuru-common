abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract message: string;

  constructor(message: string) {
    super(message);
  }

  abstract serializeMessage(): { message: string };
}

export { CustomError };
