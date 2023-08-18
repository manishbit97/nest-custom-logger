import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private logger = new Logger(AppService.name);
  getHello(): string {
    this.logger.log({ level: "warn", message: "This is warn level", refCode: "456789" });

    this.logger.log({ level: "info", message: "This is Info level", refCode: "12355" });
    try {
      throw new Error('Some random error');
    } catch (err) {
      this.logger.log({ level: "error", message: "This is Error level", err: err, errCustomCode: "20" });
    }
    return 'Hello World!';
  }
}
