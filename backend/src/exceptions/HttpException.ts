export class HttpException extends Error {
  private _status: number;
  private _message: string;

  public get status() {
    return this._status;
  }

  public get message() {
    return this._message;
  }

  constructor(status: number, message: string) {
    super(message);
    this._status = status;
    this._message = message;
  }
}
