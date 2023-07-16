class StatusCodes {
  // status codes for 2XX
  public static OK: number = 200;
  public static Created: number = 201;
  public static NoContent: number = 204;
  public static ResetContent: number = 205;
  public static PartialContent: number = 206;

  // status codes for 3XX
  public static MultipleChoices: number = 300;
  public static MovedPermanently: number = 301;
  public static NotModified: number = 304;
  public static TemporaryRedirect: number = 307;

  // status codes for 4XX
  public static BadRequest: number = 400;
  public static Unauthorized: number = 401;
  public static Forbidden: number = 403;
  public static NotFound: number = 404;
  public static RequestTimeout: number = 408;
  public static Gone: number = 410;

  // status codes for 5XX
  public static InternalServerError: number = 500;
  public static ServiceUnavailable: number = 503;
}

export { StatusCodes };
